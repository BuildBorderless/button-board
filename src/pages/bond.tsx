import { Container, Grid } from "@mui/material"
import { Fragment, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BondDocument, execute } from "../.graphclient"
import { Tile } from "../components/Tile"
import {
    dateToString,
    formatAddress,
    formatNumber,
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
                            title="Collateral Asset"
                            value={bond.collateral.name}
                            subtitle={bond.collateral.symbol}
                        />
                        <Tile
                            title={
                                bond.isMature
                                    ? "Collateral (at Maturity)"
                                    : "Collateral"
                            }
                            value={
                                bond.isMature
                                    ? formatNumber(
                                          bond.totalCollateralAtMaturity
                                      )
                                    : formatNumber(bond.totalCollateral)
                            }
                            subtitle={bond.collateral.symbol}
                        />
                        <Tile
                            title={
                                bond.isMature ? "Debt (at Maturity)" : "Debt"
                            }
                            value={
                                bond.isMature
                                    ? formatNumber(bond.totalDebtAtMaturity)
                                    : formatNumber(bond.totalDebt)
                            }
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
                {bond.tranches?.map((t) => (
                    <Fragment key={bond.id + t.index}>
                        <h2>
                            {t.token?.name} ({t.ratio} %)
                        </h2>
                        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                            <Grid container spacing={3}>
                                <Tile
                                    title={
                                        bond.isMature
                                            ? "Supply (at Maturity)"
                                            : "Supply"
                                    }
                                    value={
                                        bond.isMature
                                            ? formatNumber(
                                                  t.totalSupplyAtMaturity
                                              )
                                            : formatNumber(t.token?.totalSupply)
                                    }
                                />
                                {(bond.isMature &&
                                    t.totalCollateralAtMaturity) ||
                                (!bond.isMature && t.totalCollateral) ? (
                                    <Tile
                                        title={
                                            bond.isMature
                                                ? "Collateral (at Maturity)"
                                                : "Collateral"
                                        }
                                        value={
                                            bond.isMature
                                                ? formatNumber(
                                                      t.totalCollateralAtMaturity
                                                  )
                                                : formatNumber(
                                                      t.totalCollateral
                                                  )
                                        }
                                        subtitle={bond.collateral.symbol}
                                    />
                                ) : null}
                                <Tile
                                    title="Address"
                                    value={formatAddress(t.token?.id)}
                                    linkTitle="View on Etherscan"
                                    linkHref={getEtherscanUrl(t.token?.id)}
                                />
                            </Grid>
                        </Container>
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

export default BondPage
