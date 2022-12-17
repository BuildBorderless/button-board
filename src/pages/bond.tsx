import { Container, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BondDocument, execute } from "../.graphclient"
import { Tile } from "../components/Tile"
import {
    dateToString,
    formatAddress,
    getEtherscanUrl,
    parseBond,
} from "../helpers"
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
                <h1 hidden>Bond Details</h1>
                <code>{bond.id}</code>
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={3}>
                        <Tile
                            title="Collateral"
                            value={bond.collateral.name}
                            subtitle={bond.collateral.symbol}
                        />
                        <Tile
                            title="Start Date"
                            value={dateToString(bond.startDate)}
                        />
                        <Tile
                            title="Maturity Date"
                            value={dateToString(bond.maturityDate)}
                        />
                        <Tile
                            title="Address"
                            value={formatAddress(bond.id)}
                            linkTitle="View on Etherscan"
                            linkHref={getEtherscanUrl(bond.id)}
                        />
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default BondPage
