export interface RawBlock {
    number: number
    timestamp: number
}

export interface RawCollateral {
    id: string
    name: string
    symbol: string
    decimals: string
}

export interface RawTrancheToken {
    id: string
    name: string
    symbol: string
    decimals: string
    totalSupply: string
}

export interface RawTranche {
    index: string
    ratio: string
    totalCollateral: string
    totalCollateralAtMaturity?: string
    totalSupplyAtMaturity?: string
    token?: RawTrancheToken
}
export interface RawBond {
    id: string
    collateral: RawCollateral
    isMature: boolean
    startDate: string
    maturityDate: string
    totalCollateral: string
    totalCollateralAtMaturity?: string
    totalDebt: string
    totalDebtAtMaturity?: string
    tranches?: RawTranche[]
}

export type Block = {
    number: number
    date: Date
}

export type Collateral = {
    id: string // address
    name: string
    symbol: string
    decimals: number
}

export type TrancheToken = {
    id: string
    name: string
    symbol: string
    decimals: number
    totalSupply: number
}

export type Tranche = {
    index: number
    ratio: number
    totalCollateral?: number
    totalCollateralAtMaturity?: number
    totalSupplyAtMaturity?: number
    token?: TrancheToken
}

export type Bond = {
    id: string // address
    collateral: Collateral
    isMature: boolean
    startDate: Date
    maturityDate: Date
    totalCollateral: number
    totalCollateralAtMaturity?: number
    totalDebt: number
    totalDebtAtMaturity?: number
    block: Block
    tranches?: Tranche[]
}

export type BondsAtTimestamp = {
    [key: number]: Bond[]
}
