import { useEffect, useState } from "react"
import { BondsAtBlockDocument, BondsDocument, execute } from "./.graphclient"
import { BLOCKS_MONTHLY } from "./constants"
import { Bond, BondsAtTimestamp } from "./types"
import { parseBonds } from "./helpers"
import { CollateralAreaChart } from "./components/StackedAreaChart"
import { TotalValueLockedStream } from "./components/Stream"
import { BondsAreaBump } from "./components/AreaBump"
import { BondsTreeMap } from "./components/TreeMap"
import { BondsTable } from "./components/Table"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "./App.css"

const Loading = () => {
    return (
        <div className="App">
            <div className="App-fullscreen">
                <p>Loading...</p>
            </div>
        </div>
    )
}

const Error = () => {
    return (
        <div className="App">
            <div className="App-fullscreen">
                <p>Error!</p>
            </div>
        </div>
    )
}

const App = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [currentTimestamp, setCurrentTimestamp] = useState<
        number | undefined
    >()
    const [bondsAtTimestamp, setBondsAtTimestamp] = useState<
        BondsAtTimestamp | undefined
    >()
    const [selected, setSelected] = useState<readonly string[]>([])
    const bondsAtTimestampFiltered: BondsAtTimestamp = {}

    useEffect(() => {
        const fetchChartData = async () => {
            const bondsTimeSeries: BondsAtTimestamp = {}
            // fetch
            for (const dataPoint of BLOCKS_MONTHLY) {
                const r = await execute(BondsAtBlockDocument, {
                    blockNumber: dataPoint.number,
                })
                let bonds
                if (!r.data) {
                    console.error("No data for block", dataPoint.number)
                    bonds = parseBonds([], dataPoint)
                } else {
                    bonds = parseBonds(r.data.bonds, dataPoint)
                }
                bondsTimeSeries[dataPoint.timestamp] = bonds
            }
            const r = await execute(BondsDocument, {})
            const bonds = parseBonds(r.data.bonds, r.data._meta.block)
            const timestamp = bonds[0].block.date.valueOf()
            setSelected(bonds.map((b) => b.id))
            setCurrentTimestamp(timestamp)
            bondsTimeSeries[timestamp] = bonds
            setBondsAtTimestamp(bondsTimeSeries)
        }
        fetchChartData()
            .then(() => setIsLoading(false))
            .catch((e) => {
                console.error(e)
                setIsLoading(false)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (isLoading) return <Loading />
    if (!bondsAtTimestamp || !currentTimestamp) return <Error />
    Object.keys(bondsAtTimestamp).forEach((t) => {
        bondsAtTimestampFiltered[parseInt(t)] = bondsAtTimestamp[
            parseInt(t)
        ].filter((b: Bond) => selected.includes(b.id))
    })

    return (
        <div className="App">
            <div className="App-fullscreen">
                <BondsTable
                    bonds={bondsAtTimestamp[currentTimestamp]}
                    selected={selected}
                    setSelected={setSelected}
                />
                <h2>Collateral</h2>
                <CollateralAreaChart
                    bondsAtTimestamp={bondsAtTimestampFiltered}
                />
                <h2>Total Value Locked</h2>
                <TotalValueLockedStream
                    bondsAtTimestamp={bondsAtTimestampFiltered}
                />
                <h2>Top Bonds (By Collateral)</h2>
                <BondsAreaBump bondsAtTimestamp={bondsAtTimestampFiltered} />
                <h2>Collateral To Debt Ratio</h2>
                <BondsTreeMap
                    bonds={bondsAtTimestampFiltered[currentTimestamp]}
                />
            </div>
        </div>
    )
}

export default App
