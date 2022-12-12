import { Bond, RawBlock, RawBond } from "./types"

export const parseBond = (rawBond: RawBond, block: RawBlock): Bond => {
    const decimals = parseInt(rawBond.collateral.decimals)
    const totalCollateral = parseInt(rawBond.totalCollateral) / 10 ** decimals
    const totalDebt = parseInt(rawBond.totalDebt) / 10 ** decimals

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
        totalDebt,
        block: {
            number: block.number,
            date: blockDate,
        },
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

export const formatNumber = (num: number): string => {
    if (num < 10 ** 3) {
        return num.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })
    }
    if (num < 10 ** 6) {
        return num.toLocaleString("en-US", {
            maximumFractionDigits: 0,
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
