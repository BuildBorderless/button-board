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

export interface RawBond {
    id: string
    collateral: RawCollateral
    isMature: boolean
    startDate: string
    maturityDate: string
    totalCollateral: string
    totalDebt: string
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

export type Bond = {
    id: string // address
    collateral: Collateral
    isMature: boolean
    startDate: Date
    maturityDate: Date
    totalCollateral: number
    totalDebt: number
    block: Block
}
