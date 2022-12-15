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

export interface RawTranche {
    index: string
    ratio: string
}
export interface RawBond {
    id: string
    collateral: RawCollateral
    isMature: boolean
    startDate: string
    maturityDate: string
    totalCollateral: string
    totalDebt: string
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

export type Tranche = {
    index: number
    ratio: number
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
    tranches?: Tranche[]
}

export type BondsAtTimestamp = {
    [key: number]: Bond[]
}
