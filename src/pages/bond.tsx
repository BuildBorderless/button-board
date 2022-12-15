import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BondDocument, execute } from "../.graphclient"
import { parseBond } from "../helpers"
import { Bond } from "../types"
import Error from "./error"
import Loading from "./loading"

const BondPage = () => {
    const { bondAddress } = useParams()
    const [bond, setBond] = useState<Bond | undefined>()
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchBond = async (address: string | undefined) => {
            if (!address) return
            const r = await execute(BondDocument, { address })
            const bond = parseBond(r.data.bond, r.data._meta.block)
            setBond(bond)
        }
        fetchBond(bondAddress)
            .then(() => setIsLoading(false))
            .catch((e) => {
                console.error(e)
                setIsLoading(false)
            })
    }, [bondAddress])

    if (isLoading) return <Loading />
    if (!bond) return <Error />
    return (
        <div className="App">
            <div className="App-fullscreen">
                <h1>Bond</h1>
                <p>Address: {bond.id}</p>
                <p>Collateral: {bond.collateral.name}</p>
            </div>
        </div>
    )
}

export default BondPage
