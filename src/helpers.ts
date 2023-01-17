import { Bond, RawBlock, RawBond, RawTranche, Tranche } from "./types"

const parseTranche = (rawTranche: RawTranche): Tranche => {
    const decimals = rawTranche.token
        ? parseInt(rawTranche.token.decimals)
        : undefined
    const totalCollateral =
        decimals && rawTranche.totalCollateral
            ? parseInt(rawTranche.totalCollateral) / 10 ** decimals
            : undefined
    const totalCollateralAtMaturity =
        decimals && rawTranche.totalCollateralAtMaturity
            ? parseInt(rawTranche.totalCollateralAtMaturity) / 10 ** decimals
            : undefined
    const totalSupplyAtMaturity =
        decimals && rawTranche.totalSupplyAtMaturity
            ? parseInt(rawTranche.totalSupplyAtMaturity) / 10 ** decimals
            : undefined

    const token =
        rawTranche.token && decimals
            ? {
                  id: rawTranche.token.id,
                  name: rawTranche.token.name,
                  symbol: rawTranche.token.symbol,
                  decimals,
                  totalSupply:
                      parseInt(rawTranche.token.totalSupply) / 10 ** decimals,
              }
            : undefined

    return {
        index: parseInt(rawTranche.index),
        ratio: parseInt(rawTranche.ratio) / 10,
        totalCollateral,
        totalCollateralAtMaturity,
        totalSupplyAtMaturity,
        token,
    }
}

/**
 * this function is required because the subgraph returns 0 for
 * total collateral when bond is mature that's not always correct.
 */
const getTotalBondCollateral = (bond: RawBond) => {
    if (bond.isMature) {
        // if bond is mature, return sum of totalCollateral over tranches
        return (
            bond.tranches?.reduce((total, tranche) => {
                return total + parseInt(tranche.totalCollateral ?? "0")
            }, 0) ?? 0
        )
    }
    return parseInt(bond.totalCollateral)
}

export const parseBond = (rawBond: RawBond, block: RawBlock): Bond => {
    const decimals = parseInt(rawBond.collateral.decimals)
    const totalCollateral = getTotalBondCollateral(rawBond) / 10 ** decimals
    const totalCollateralAtMaturity = rawBond.totalCollateralAtMaturity
        ? parseInt(rawBond.totalCollateralAtMaturity) / 10 ** decimals
        : undefined
    const totalDebt = parseInt(rawBond.totalDebt) / 10 ** decimals
    const totalDebtAtMaturity = rawBond.totalDebtAtMaturity
        ? parseInt(rawBond.totalDebtAtMaturity) / 10 ** decimals
        : undefined

    const startDate = new Date(parseInt(rawBond.startDate) * 1000)
    const maturityDate = new Date(parseInt(rawBond.maturityDate) * 1000)
    const blockDate = new Date(block.timestamp * 1000)

    return {
        ...rawBond,
        collateral: {
            ...rawBond.collateral,
            decimals,
        },
        startDate,
        maturityDate,
        totalCollateral,
        totalCollateralAtMaturity,
        totalDebt,
        totalDebtAtMaturity,
        block: {
            number: block.number,
            date: blockDate,
        },
        tranches: rawBond.tranches
            ? rawBond.tranches.map(parseTranche)
            : undefined,
    }
}

export const parseBonds = (rawBonds: RawBond[], block: RawBlock) => {
    return rawBonds.map((b: RawBond) => parseBond(b, block))
}

export const dateToString = (date: Date) => {
    return date.toISOString().split("T")[0]
}

export const getCdr = (bond: Bond) => {
    if (bond.totalDebt === 0) {
        return 1
    }
    return bond.totalCollateral / bond.totalDebt
}

export const formatNumber = (num: number | undefined): string => {
    if (!num) return "0.00"
    if (num < 10 ** 3) {
        return num.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })
    }
    if (num < 10 ** 6) {
        return num.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })
    }
    if (num < 10 ** 9) {
        num = num / 10 ** 6
        return num.toFixed(2).toString() + "M"
    }
    if (num < 10 ** 12) {
        num = num / 10 ** 9
        return num.toFixed(2).toString() + "B"
    }
    num = num / 10 ** 12
    return num.toFixed(2).toString() + "T"
}

export const getTrancheRatios = (tranches: Tranche[]) => {
    return tranches
        .sort((a, b) => a.index - b.index)
        .reduce((ratios, tranche) => {
            return (ratios +=
                tranche.ratio.toLocaleString("en-US", {
                    maximumFractionDigits: 1,
                }) + " / ")
        }, "")
        .replace(/ \/ $/gm, "") // remove trailing " / "
}
export const formatAddress = (address: string | undefined) => {
    if (!address) return "0x?"
    return address.substring(0, 6) + "..." + address.substring(37, 41)
}

export const getEtherscanUrl = (address: string | undefined) => {
    if (!address) return "#"
    return "https://etherscan.io/address/" + address
}
