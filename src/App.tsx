import { useEffect, useState } from "react"
import { BondsAtBlockDocument, BondsDocument, execute } from "./.graphclient"
import { BLOCKS_MONTHLY } from "./constants"
import { BondsAtTimestamp } from "./types"
import { parseBonds } from "./helpers"
import { BondsAreaBump } from "./components/AreaBump"
import { BondsTreeMap } from "./components/TreeMap"
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
    return (
        <div className="App">
            <div className="App-fullscreen">
                <h2>Collateral per Bond</h2>
                <BondsAreaBump bondsAtTimestamp={bondsAtTimestamp} />
                <h2>Collateral To Debt Ratio</h2>
                <BondsTreeMap bonds={bondsAtTimestamp[currentTimestamp]} />
            </div>
        </div>
    )
}

export default App
