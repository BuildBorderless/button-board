import { useEffect, useState } from "react"
import { BondsAtBlockDocument, BondsDocument, execute } from "../.graphclient"
import { BLOCKS_MONTHLY } from "../constants"
import { Bond, BondsAtTimestamp } from "../types"
import { parseBonds } from "../helpers"
import { CollateralAreaChart } from "../components/StackedAreaChart"
import { BondsTable } from "../components/Table"
import Error from "./error"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "../App.css"
import Loading from "./loading"

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
                <h1 hidden>Bonds</h1>
                <BondsTable
                    bonds={bondsAtTimestamp[currentTimestamp]}
                    selected={selected}
                    setSelected={setSelected}
                />
                <h2>Collateral</h2>
                <CollateralAreaChart
                    bondsAtTimestamp={bondsAtTimestampFiltered}
                />
            </div>
        </div>
    )
}

export default App
