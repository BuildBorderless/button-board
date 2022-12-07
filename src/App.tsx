import { useEffect, useState } from "react"
import { BondsDocument, execute } from "./.graphclient"
import { parseBond } from "./helpers"
import { Bond, RawBond } from "./types"
import "./App.css"
import { BondsTreeMap } from "./components/TreeMap"

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
    const [currentBonds, setCurrentBonds] = useState<Bond[] | undefined>()

    useEffect(() => {
        const fetchChartData = async () => {
            const currentBondsResult = await execute(BondsDocument, {})
            const block = currentBondsResult.data._meta.block
            setCurrentBonds(
                currentBondsResult.data.bonds.map((b: RawBond) =>
                    parseBond(b, block)
                )
            )
        }
        fetchChartData()
            .then(() => setIsLoading(false))
            .catch(console.error)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (isLoading) return <Loading />
    if (!currentBonds) return <Error />
    return (
        <div className="App">
            <div className="App-fullscreen">
                <BondsTreeMap bonds={currentBonds} />
            </div>
        </div>
    )
}

export default App
