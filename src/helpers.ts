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

export const dateToString = (date: Date) => {
    return date.toISOString().split("T")[0]
}
