// @ts-nocheck
import {
    GraphQLResolveInfo,
    SelectionSetNode,
    FieldNode,
    GraphQLScalarType,
    GraphQLScalarTypeConfig,
} from "graphql"
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core"
import { gql } from "@graphql-mesh/utils"

import type { GetMeshOptions } from "@graphql-mesh/runtime"
import type { YamlConfig } from "@graphql-mesh/types"
import { PubSub } from "@graphql-mesh/utils"
import { DefaultLogger } from "@graphql-mesh/utils"
import MeshCache from "@graphql-mesh/cache-localforage"
import { fetch as fetchFn } from "@whatwg-node/fetch"

import { MeshResolvedSource } from "@graphql-mesh/runtime"
import { MeshTransform, MeshPlugin } from "@graphql-mesh/types"
import GraphqlHandler from "@graphql-mesh/graphql"
import BareMerger from "@graphql-mesh/merger-bare"
import { printWithCache } from "@graphql-mesh/utils"
import { createMeshHTTPHandler, MeshHTTPHandler } from "@graphql-mesh/http"
import {
    getMesh,
    ExecuteMeshFn,
    SubscribeMeshFn,
    MeshContext as BaseMeshContext,
    MeshInstance,
} from "@graphql-mesh/runtime"
import { MeshStore, FsStoreStorageAdapter } from "@graphql-mesh/store"
import { path as pathModule } from "@graphql-mesh/cross-helpers"
import { ImportFn } from "@graphql-mesh/types"
import type { TrancheTypes } from "./sources/tranche/types"
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>
}
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
    [P in K]-?: NonNullable<T[P]>
}

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
    BigDecimal: any
    BigInt: any
    Bytes: any
}

export type Account = {
    /**  Account address  */
    id: Scalars["ID"]
    /**  Tranche token balances that this account holds  */
    balances: Array<AccountBalance>
}

export type AccountbalancesArgs = {
    skip?: InputMaybe<Scalars["Int"]>
    first?: InputMaybe<Scalars["Int"]>
    orderBy?: InputMaybe<AccountBalance_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<AccountBalance_filter>
}

export type AccountBalance = {
    /**  Equals to: <accountAddress>-<tokenAddress> */
    id: Scalars["ID"]
    /**  Account address  */
    account: Account
    /**  Tranche token address  */
    tranche: Tranche
    /**  Current account balance  */
    amount: Scalars["BigInt"]
    /**  Block number in which the balance was last modified  */
    block?: Maybe<Scalars["BigInt"]>
    /**  Last modified timestamp in seconds  */
    modified?: Maybe<Scalars["BigInt"]>
    /**  Hash of the last transaction that modified the balance  */
    transaction?: Maybe<Scalars["Bytes"]>
}

export type AccountBalance_filter = {
    id?: InputMaybe<Scalars["ID"]>
    id_not?: InputMaybe<Scalars["ID"]>
    id_gt?: InputMaybe<Scalars["ID"]>
    id_lt?: InputMaybe<Scalars["ID"]>
    id_gte?: InputMaybe<Scalars["ID"]>
    id_lte?: InputMaybe<Scalars["ID"]>
    id_in?: InputMaybe<Array<Scalars["ID"]>>
    id_not_in?: InputMaybe<Array<Scalars["ID"]>>
    account?: InputMaybe<Scalars["String"]>
    account_not?: InputMaybe<Scalars["String"]>
    account_gt?: InputMaybe<Scalars["String"]>
    account_lt?: InputMaybe<Scalars["String"]>
    account_gte?: InputMaybe<Scalars["String"]>
    account_lte?: InputMaybe<Scalars["String"]>
    account_in?: InputMaybe<Array<Scalars["String"]>>
    account_not_in?: InputMaybe<Array<Scalars["String"]>>
    account_contains?: InputMaybe<Scalars["String"]>
    account_contains_nocase?: InputMaybe<Scalars["String"]>
    account_not_contains?: InputMaybe<Scalars["String"]>
    account_not_contains_nocase?: InputMaybe<Scalars["String"]>
    account_starts_with?: InputMaybe<Scalars["String"]>
    account_starts_with_nocase?: InputMaybe<Scalars["String"]>
    account_not_starts_with?: InputMaybe<Scalars["String"]>
    account_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
    account_ends_with?: InputMaybe<Scalars["String"]>
    account_ends_with_nocase?: InputMaybe<Scalars["String"]>
    account_not_ends_with?: InputMaybe<Scalars["String"]>
    account_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
    account_?: InputMaybe<Account_filter>
    tranche?: InputMaybe<Scalars["String"]>
    tranche_not?: InputMaybe<Scalars["String"]>
    tranche_gt?: InputMaybe<Scalars["String"]>
    tranche_lt?: InputMaybe<Scalars["String"]>
    tranche_gte?: InputMaybe<Scalars["String"]>
    tranche_lte?: InputMaybe<Scalars["String"]>
    tranche_in?: InputMaybe<Array<Scalars["String"]>>
    tranche_not_in?: InputMaybe<Array<Scalars["String"]>>
    tranche_contains?: InputMaybe<Scalars["String"]>
    tranche_contains_nocase?: InputMaybe<Scalars["String"]>
    tranche_not_contains?: InputMaybe<Scalars["String"]>
    tranche_not_contains_nocase?: InputMaybe<Scalars["String"]>
    tranche_starts_with?: InputMaybe<Scalars["String"]>
    tranche_starts_with_nocase?: InputMaybe<Scalars["String"]>
    tranche_not_starts_with?: InputMaybe<Scalars["String"]>
    tranche_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
    tranche_ends_with?: InputMaybe<Scalars["String"]>
    tranche_ends_with_nocase?: InputMaybe<Scalars["String"]>
    tranche_not_ends_with?: InputMaybe<Scalars["String"]>
    tranche_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
    tranche_?: InputMaybe<Tranche_filter>
    amount?: InputMaybe<Scalars["BigInt"]>
    amount_not?: InputMaybe<Scalars["BigInt"]>
    amount_gt?: InputMaybe<Scalars["BigInt"]>
    amount_lt?: InputMaybe<Scalars["BigInt"]>
    amount_gte?: InputMaybe<Scalars["BigInt"]>
    amount_lte?: InputMaybe<Scalars["BigInt"]>
    amount_in?: InputMaybe<Array<Scalars["BigInt"]>>
    amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
    block?: InputMaybe<Scalars["BigInt"]>
    block_not?: InputMaybe<Scalars["BigInt"]>
    block_gt?: InputMaybe<Scalars["BigInt"]>
    block_lt?: InputMaybe<Scalars["BigInt"]>
    block_gte?: InputMaybe<Scalars["BigInt"]>
    block_lte?: InputMaybe<Scalars["BigInt"]>
    block_in?: InputMaybe<Array<Scalars["BigInt"]>>
    block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
    modified?: InputMaybe<Scalars["BigInt"]>
    modified_not?: InputMaybe<Scalars["BigInt"]>
    modified_gt?: InputMaybe<Scalars["BigInt"]>
    modified_lt?: InputMaybe<Scalars["BigInt"]>
    modified_gte?: InputMaybe<Scalars["BigInt"]>
    modified_lte?: InputMaybe<Scalars["BigInt"]>
    modified_in?: InputMaybe<Array<Scalars["BigInt"]>>
    modified_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
    transaction?: InputMaybe<Scalars["Bytes"]>
    transaction_not?: InputMaybe<Scalars["Bytes"]>
    transaction_gt?: InputMaybe<Scalars["Bytes"]>
    transaction_lt?: InputMaybe<Scalars["Bytes"]>
    transaction_gte?: InputMaybe<Scalars["Bytes"]>
    transaction_lte?: InputMaybe<Scalars["Bytes"]>
    transaction_in?: InputMaybe<Array<Scalars["Bytes"]>>
    transaction_not_in?: InputMaybe<Array<Scalars["Bytes"]>>
    transaction_contains?: InputMaybe<Scalars["Bytes"]>
    transaction_not_contains?: InputMaybe<Scalars["Bytes"]>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
}

export type AccountBalance_orderBy =
    | "id"
    | "account"
    | "tranche"
    | "amount"
    | "block"
    | "modified"
    | "transaction"

export type Account_filter = {
    id?: InputMaybe<Scalars["ID"]>
    id_not?: InputMaybe<Scalars["ID"]>
    id_gt?: InputMaybe<Scalars["ID"]>
    id_lt?: InputMaybe<Scalars["ID"]>
    id_gte?: InputMaybe<Scalars["ID"]>
    id_lte?: InputMaybe<Scalars["ID"]>
    id_in?: InputMaybe<Array<Scalars["ID"]>>
    id_not_in?: InputMaybe<Array<Scalars["ID"]>>
    balances_?: InputMaybe<AccountBalance_filter>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
}

export type Account_orderBy = "id" | "balances"

export type BlockChangedFilter = {
    number_gte: Scalars["Int"]
}

export type Block_height = {
    hash?: InputMaybe<Scalars["Bytes"]>
    number?: InputMaybe<Scalars["Int"]>
    number_gte?: InputMaybe<Scalars["Int"]>
}

export type Bond = {
    /**  bond address  */
    id: Scalars["ID"]
    /**  address of the creator  */
    creator: Scalars["String"]
    /**  Deposit limit of the bond  */
    depositLimit: Scalars["BigInt"]
    /**  address of the owner  */
    owner: Scalars["String"]
    /**  reference to the collateral token  */
    collateral: Token
    /**  The tranches and ratios in a list  */
    tranches: Array<Tranche>
    /**  The fee collected by bond owner  */
    feeBps: Scalars["BigInt"]
    /**  The unix timestamp when this bond was created  */
    startDate: Scalars["BigInt"]
    /**  date of when bond can first be matured as a unix timestamp  */
    maturityDate: Scalars["BigInt"]
    /**  date bond was matured as a unix timestamp  */
    maturedDate?: Maybe<Scalars["BigInt"]>
    /**  true if this bond is mature, else false  */
    isMature: Scalars["Boolean"]
    /**  Total amount of debt distributed. Equal to the sum of tranche total supplies  */
    totalDebt: Scalars["BigInt"]
    /**  Total amount of debt distributed at time bond matured. Equal to the sum of tranche total supplies  */
    totalDebtAtMaturity?: Maybe<Scalars["BigInt"]>
    /**  The amount of collateral locked in this bond  */
    totalCollateral: Scalars["BigInt"]
    /**  The amount of collateral locked in this bond at time bond matured  */
    totalCollateralAtMaturity?: Maybe<Scalars["BigInt"]>
    /**  This property facilitates searching by asset, using 'tokenNames_contains' to match Bond entities on substring matches. This field has the value of collateral and tranche asset addresses and symbols concatenated.  */
    tokenNames: Scalars["String"]
    /**  This property facilitates sorting by collateral asset symbol  */
    collateralSymbol: Scalars["String"]
}

export type BondtranchesArgs = {
    skip?: InputMaybe<Scalars["Int"]>
    first?: InputMaybe<Scalars["Int"]>
    orderBy?: InputMaybe<Tranche_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Tranche_filter>
}

export type Bond_filter = {
    id?: InputMaybe<Scalars["ID"]>
    id_not?: InputMaybe<Scalars["ID"]>
    id_gt?: InputMaybe<Scalars["ID"]>
    id_lt?: InputMaybe<Scalars["ID"]>
    id_gte?: InputMaybe<Scalars["ID"]>
    id_lte?: InputMaybe<Scalars["ID"]>
    id_in?: InputMaybe<Array<Scalars["ID"]>>
    id_not_in?: InputMaybe<Array<Scalars["ID"]>>
    creator?: InputMaybe<Scalars["String"]>
    creator_not?: InputMaybe<Scalars["String"]>
    creator_gt?: InputMaybe<Scalars["String"]>
    creator_lt?: InputMaybe<Scalars["String"]>
    creator_gte?: InputMaybe<Scalars["String"]>
    creator_lte?: InputMaybe<Scalars["String"]>
    creator_in?: InputMaybe<Array<Scalars["String"]>>
    creator_not_in?: InputMaybe<Array<Scalars["String"]>>
    creator_contains?: InputMaybe<Scalars["String"]>
    creator_contains_nocase?: InputMaybe<Scalars["String"]>
    creator_not_contains?: InputMaybe<Scalars["String"]>
    creator_not_contains_nocase?: InputMaybe<Scalars["String"]>
    creator_starts_with?: InputMaybe<Scalars["String"]>
    creator_starts_with_nocase?: InputMaybe<Scalars["String"]>
    creator_not_starts_with?: InputMaybe<Scalars["String"]>
    creator_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
    creator_ends_with?: InputMaybe<Scalars["String"]>
    creator_ends_with_nocase?: InputMaybe<Scalars["String"]>
    creator_not_ends_with?: InputMaybe<Scalars["String"]>
    creator_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
    depositLimit?: InputMaybe<Scalars["BigInt"]>
    depositLimit_not?: InputMaybe<Scalars["BigInt"]>
    depositLimit_gt?: InputMaybe<Scalars["BigInt"]>
    depositLimit_lt?: InputMaybe<Scalars["BigInt"]>
    depositLimit_gte?: InputMaybe<Scalars["BigInt"]>
    depositLimit_lte?: InputMaybe<Scalars["BigInt"]>
    depositLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>
    depositLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
    owner?: InputMaybe<Scalars["String"]>
    owner_not?: InputMaybe<Scalars["String"]>
    owner_gt?: InputMaybe<Scalars["String"]>
    owner_lt?: InputMaybe<Scalars["String"]>
    owner_gte?: InputMaybe<Scalars["String"]>
    owner_lte?: InputMaybe<Scalars["String"]>
    owner_in?: InputMaybe<Array<Scalars["String"]>>
    owner_not_in?: InputMaybe<Array<Scalars["String"]>>
    owner_contains?: InputMaybe<Scalars["String"]>
    owner_contains_nocase?: InputMaybe<Scalars["String"]>
    owner_not_contains?: InputMaybe<Scalars["String"]>
    owner_not_contains_nocase?: InputMaybe<Scalars["String"]>
    owner_starts_with?: InputMaybe<Scalars["String"]>
    owner_starts_with_nocase?: InputMaybe<Scalars["String"]>
    owner_not_starts_with?: InputMaybe<Scalars["String"]>
    owner_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
    owner_ends_with?: InputMaybe<Scalars["String"]>
    owner_ends_with_nocase?: InputMaybe<Scalars["String"]>
    owner_not_ends_with?: InputMaybe<Scalars["String"]>
    owner_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
    collateral?: InputMaybe<Scalars["String"]>
    collateral_not?: InputMaybe<Scalars["String"]>
    collateral_gt?: InputMaybe<Scalars["String"]>
    collateral_lt?: InputMaybe<Scalars["String"]>
    collateral_gte?: InputMaybe<Scalars["String"]>
    collateral_lte?: InputMaybe<Scalars["String"]>
    collateral_in?: InputMaybe<Array<Scalars["String"]>>
    collateral_not_in?: InputMaybe<Array<Scalars["String"]>>
    collateral_contains?: InputMaybe<Scalars["String"]>
    collateral_contains_nocase?: InputMaybe<Scalars["String"]>
    collateral_not_contains?: InputMaybe<Scalars["String"]>
    collateral_not_contains_nocase?: InputMaybe<Scalars["String"]>
    collateral_starts_with?: InputMaybe<Scalars["String"]>
    collateral_starts_with_nocase?: InputMaybe<Scalars["String"]>
    collateral_not_starts_with?: InputMaybe<Scalars["String"]>
    collateral_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
    collateral_ends_with?: InputMaybe<Scalars["String"]>
    collateral_ends_with_nocase?: InputMaybe<Scalars["String"]>
    collateral_not_ends_with?: InputMaybe<Scalars["String"]>
    collateral_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
    collateral_?: InputMaybe<Token_filter>
    tranches?: InputMaybe<Array<Scalars["String"]>>
    tranches_not?: InputMaybe<Array<Scalars["String"]>>
    tranches_contains?: InputMaybe<Array<Scalars["String"]>>
    tranches_contains_nocase?: InputMaybe<Array<Scalars["String"]>>
    tranches_not_contains?: InputMaybe<Array<Scalars["String"]>>
    tranches_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>
    tranches_?: InputMaybe<Tranche_filter>
    feeBps?: InputMaybe<Scalars["BigInt"]>
    feeBps_not?: InputMaybe<Scalars["BigInt"]>
    feeBps_gt?: InputMaybe<Scalars["BigInt"]>
    feeBps_lt?: InputMaybe<Scalars["BigInt"]>
    feeBps_gte?: InputMaybe<Scalars["BigInt"]>
    feeBps_lte?: InputMaybe<Scalars["BigInt"]>
    feeBps_in?: InputMaybe<Array<Scalars["BigInt"]>>
    feeBps_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
    startDate?: InputMaybe<Scalars["BigInt"]>
    startDate_not?: InputMaybe<Scalars["BigInt"]>
    startDate_gt?: InputMaybe<Scalars["BigInt"]>
    startDate_lt?: InputMaybe<Scalars["BigInt"]>
    startDate_gte?: InputMaybe<Scalars["BigInt"]>
    startDate_lte?: InputMaybe<Scalars["BigInt"]>
    startDate_in?: InputMaybe<Array<Scalars["BigInt"]>>
    startDate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
    maturityDate?: InputMaybe<Scalars["BigInt"]>
    maturityDate_not?: InputMaybe<Scalars["BigInt"]>
    maturityDate_gt?: InputMaybe<Scalars["BigInt"]>
    maturityDate_lt?: InputMaybe<Scalars["BigInt"]>
    maturityDate_gte?: InputMaybe<Scalars["BigInt"]>
    maturityDate_lte?: InputMaybe<Scalars["BigInt"]>
    maturityDate_in?: InputMaybe<Array<Scalars["BigInt"]>>
    maturityDate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
    maturedDate?: InputMaybe<Scalars["BigInt"]>
    maturedDate_not?: InputMaybe<Scalars["BigInt"]>
    maturedDate_gt?: InputMaybe<Scalars["BigInt"]>
    maturedDate_lt?: InputMaybe<Scalars["BigInt"]>
    maturedDate_gte?: InputMaybe<Scalars["BigInt"]>
    maturedDate_lte?: InputMaybe<Scalars["BigInt"]>
    maturedDate_in?: InputMaybe<Array<Scalars["BigInt"]>>
    maturedDate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
    isMature?: InputMaybe<Scalars["Boolean"]>
    isMature_not?: InputMaybe<Scalars["Boolean"]>
    isMature_in?: InputMaybe<Array<Scalars["Boolean"]>>
    isMature_not_in?: InputMaybe<Array<Scalars["Boolean"]>>
    totalDebt?: InputMaybe<Scalars["BigInt"]>
    totalDebt_not?: InputMaybe<Scalars["BigInt"]>
    totalDebt_gt?: InputMaybe<Scalars["BigInt"]>
    totalDebt_lt?: InputMaybe<Scalars["BigInt"]>
    totalDebt_gte?: InputMaybe<Scalars["BigInt"]>
    totalDebt_lte?: InputMaybe<Scalars["BigInt"]>
    totalDebt_in?: InputMaybe<Array<Scalars["BigInt"]>>
    totalDebt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
    totalDebtAtMaturity?: InputMaybe<Scalars["BigInt"]>
    totalDebtAtMaturity_not?: InputMaybe<Scalars["BigInt"]>
    totalDebtAtMaturity_gt?: InputMaybe<Scalars["BigInt"]>
    totalDebtAtMaturity_lt?: InputMaybe<Scalars["BigInt"]>
    totalDebtAtMaturity_gte?: InputMaybe<Scalars["BigInt"]>
    totalDebtAtMaturity_lte?: InputMaybe<Scalars["BigInt"]>
    totalDebtAtMaturity_in?: InputMaybe<Array<Scalars["BigInt"]>>
    totalDebtAtMaturity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
    totalCollateral?: InputMaybe<Scalars["BigInt"]>
    totalCollateral_not?: InputMaybe<Scalars["BigInt"]>
    totalCollateral_gt?: InputMaybe<Scalars["BigInt"]>
    totalCollateral_lt?: InputMaybe<Scalars["BigInt"]>
    totalCollateral_gte?: InputMaybe<Scalars["BigInt"]>
    totalCollateral_lte?: InputMaybe<Scalars["BigInt"]>
    totalCollateral_in?: InputMaybe<Array<Scalars["BigInt"]>>
    totalCollateral_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
    totalCollateralAtMaturity?: InputMaybe<Scalars["BigInt"]>
    totalCollateralAtMaturity_not?: InputMaybe<Scalars["BigInt"]>
    totalCollateralAtMaturity_gt?: InputMaybe<Scalars["BigInt"]>
    totalCollateralAtMaturity_lt?: InputMaybe<Scalars["BigInt"]>
    totalCollateralAtMaturity_gte?: InputMaybe<Scalars["BigInt"]>
    totalCollateralAtMaturity_lte?: InputMaybe<Scalars["BigInt"]>
    totalCollateralAtMaturity_in?: InputMaybe<Array<Scalars["BigInt"]>>
    totalCollateralAtMaturity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
    tokenNames?: InputMaybe<Scalars["String"]>
    tokenNames_not?: InputMaybe<Scalars["String"]>
    tokenNames_gt?: InputMaybe<Scalars["String"]>
    tokenNames_lt?: InputMaybe<Scalars["String"]>
    tokenNames_gte?: InputMaybe<Scalars["String"]>
    tokenNames_lte?: InputMaybe<Scalars["String"]>
    tokenNames_in?: InputMaybe<Array<Scalars["String"]>>
    tokenNames_not_in?: InputMaybe<Array<Scalars["String"]>>
    tokenNames_contains?: InputMaybe<Scalars["String"]>
    tokenNames_contains_nocase?: InputMaybe<Scalars["String"]>
    tokenNames_not_contains?: InputMaybe<Scalars["String"]>
    tokenNames_not_contains_nocase?: InputMaybe<Scalars["String"]>
    tokenNames_starts_with?: InputMaybe<Scalars["String"]>
    tokenNames_starts_with_nocase?: InputMaybe<Scalars["String"]>
    tokenNames_not_starts_with?: InputMaybe<Scalars["String"]>
    tokenNames_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
    tokenNames_ends_with?: InputMaybe<Scalars["String"]>
    tokenNames_ends_with_nocase?: InputMaybe<Scalars["String"]>
    tokenNames_not_ends_with?: InputMaybe<Scalars["String"]>
    tokenNames_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
    collateralSymbol?: InputMaybe<Scalars["String"]>
    collateralSymbol_not?: InputMaybe<Scalars["String"]>
    collateralSymbol_gt?: InputMaybe<Scalars["String"]>
    collateralSymbol_lt?: InputMaybe<Scalars["String"]>
    collateralSymbol_gte?: InputMaybe<Scalars["String"]>
    collateralSymbol_lte?: InputMaybe<Scalars["String"]>
    collateralSymbol_in?: InputMaybe<Array<Scalars["String"]>>
    collateralSymbol_not_in?: InputMaybe<Array<Scalars["String"]>>
    collateralSymbol_contains?: InputMaybe<Scalars["String"]>
    collateralSymbol_contains_nocase?: InputMaybe<Scalars["String"]>
    collateralSymbol_not_contains?: InputMaybe<Scalars["String"]>
    collateralSymbol_not_contains_nocase?: InputMaybe<Scalars["String"]>
    collateralSymbol_starts_with?: InputMaybe<Scalars["String"]>
    collateralSymbol_starts_with_nocase?: InputMaybe<Scalars["String"]>
    collateralSymbol_not_starts_with?: InputMaybe<Scalars["String"]>
    collateralSymbol_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
    collateralSymbol_ends_with?: InputMaybe<Scalars["String"]>
    collateralSymbol_ends_with_nocase?: InputMaybe<Scalars["String"]>
    collateralSymbol_not_ends_with?: InputMaybe<Scalars["String"]>
    collateralSymbol_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
}

export type Bond_orderBy =
    | "id"
    | "creator"
    | "depositLimit"
    | "owner"
    | "collateral"
    | "tranches"
    | "feeBps"
    | "startDate"
    | "maturityDate"
    | "maturedDate"
    | "isMature"
    | "totalDebt"
    | "totalDebtAtMaturity"
    | "totalCollateral"
    | "totalCollateralAtMaturity"
    | "tokenNames"
    | "collateralSymbol"

export type CollateralToken = {
    /**  Token address  */
    id: Scalars["ID"]
    /**  The token entity  */
    token: Token
}

export type CollateralToken_filter = {
    id?: InputMaybe<Scalars["ID"]>
    id_not?: InputMaybe<Scalars["ID"]>
    id_gt?: InputMaybe<Scalars["ID"]>
    id_lt?: InputMaybe<Scalars["ID"]>
    id_gte?: InputMaybe<Scalars["ID"]>
    id_lte?: InputMaybe<Scalars["ID"]>
    id_in?: InputMaybe<Array<Scalars["ID"]>>
    id_not_in?: InputMaybe<Array<Scalars["ID"]>>
    token?: InputMaybe<Scalars["String"]>
    token_not?: InputMaybe<Scalars["String"]>
    token_gt?: InputMaybe<Scalars["String"]>
    token_lt?: InputMaybe<Scalars["String"]>
    token_gte?: InputMaybe<Scalars["String"]>
    token_lte?: InputMaybe<Scalars["String"]>
    token_in?: InputMaybe<Array<Scalars["String"]>>
    token_not_in?: InputMaybe<Array<Scalars["String"]>>
    token_contains?: InputMaybe<Scalars["String"]>
    token_contains_nocase?: InputMaybe<Scalars["String"]>
    token_not_contains?: InputMaybe<Scalars["String"]>
    token_not_contains_nocase?: InputMaybe<Scalars["String"]>
    token_starts_with?: InputMaybe<Scalars["String"]>
    token_starts_with_nocase?: InputMaybe<Scalars["String"]>
    token_not_starts_with?: InputMaybe<Scalars["String"]>
    token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
    token_ends_with?: InputMaybe<Scalars["String"]>
    token_ends_with_nocase?: InputMaybe<Scalars["String"]>
    token_not_ends_with?: InputMaybe<Scalars["String"]>
    token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
    token_?: InputMaybe<Token_filter>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
}

export type CollateralToken_orderBy = "id" | "token"

export type Factory = {
    /**  factory contract address  */
    id: Scalars["ID"]
    /**  number of bonds created  */
    bondCount: Scalars["BigInt"]
}

export type Factory_filter = {
    id?: InputMaybe<Scalars["ID"]>
    id_not?: InputMaybe<Scalars["ID"]>
    id_gt?: InputMaybe<Scalars["ID"]>
    id_lt?: InputMaybe<Scalars["ID"]>
    id_gte?: InputMaybe<Scalars["ID"]>
    id_lte?: InputMaybe<Scalars["ID"]>
    id_in?: InputMaybe<Array<Scalars["ID"]>>
    id_not_in?: InputMaybe<Array<Scalars["ID"]>>
    bondCount?: InputMaybe<Scalars["BigInt"]>
    bondCount_not?: InputMaybe<Scalars["BigInt"]>
    bondCount_gt?: InputMaybe<Scalars["BigInt"]>
    bondCount_lt?: InputMaybe<Scalars["BigInt"]>
    bondCount_gte?: InputMaybe<Scalars["BigInt"]>
    bondCount_lte?: InputMaybe<Scalars["BigInt"]>
    bondCount_in?: InputMaybe<Array<Scalars["BigInt"]>>
    bondCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
}

export type Factory_orderBy = "id" | "bondCount"

/** Defines the order direction, either ascending or descending */
export type OrderDirection = "asc" | "desc"

export type Query = {
    factory?: Maybe<Factory>
    factories: Array<Factory>
    token?: Maybe<Token>
    tokens: Array<Token>
    tranche?: Maybe<Tranche>
    tranches: Array<Tranche>
    bond?: Maybe<Bond>
    bonds: Array<Bond>
    account?: Maybe<Account>
    accounts: Array<Account>
    accountBalance?: Maybe<AccountBalance>
    accountBalances: Array<AccountBalance>
    collateralToken?: Maybe<CollateralToken>
    collateralTokens: Array<CollateralToken>
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>
}

export type QueryfactoryArgs = {
    id: Scalars["ID"]
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
}

export type QueryfactoriesArgs = {
    skip?: InputMaybe<Scalars["Int"]>
    first?: InputMaybe<Scalars["Int"]>
    orderBy?: InputMaybe<Factory_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Factory_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
}

export type QuerytokenArgs = {
    id: Scalars["ID"]
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
}

export type QuerytokensArgs = {
    skip?: InputMaybe<Scalars["Int"]>
    first?: InputMaybe<Scalars["Int"]>
    orderBy?: InputMaybe<Token_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Token_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
}

export type QuerytrancheArgs = {
    id: Scalars["ID"]
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
}

export type QuerytranchesArgs = {
    skip?: InputMaybe<Scalars["Int"]>
    first?: InputMaybe<Scalars["Int"]>
    orderBy?: InputMaybe<Tranche_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Tranche_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
}

export type QuerybondArgs = {
    id: Scalars["ID"]
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
}

export type QuerybondsArgs = {
    skip?: InputMaybe<Scalars["Int"]>
    first?: InputMaybe<Scalars["Int"]>
    orderBy?: InputMaybe<Bond_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Bond_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
}

export type QueryaccountArgs = {
    id: Scalars["ID"]
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
}

export type QueryaccountsArgs = {
    skip?: InputMaybe<Scalars["Int"]>
    first?: InputMaybe<Scalars["Int"]>
    orderBy?: InputMaybe<Account_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Account_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
}

export type QueryaccountBalanceArgs = {
    id: Scalars["ID"]
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
}

export type QueryaccountBalancesArgs = {
    skip?: InputMaybe<Scalars["Int"]>
    first?: InputMaybe<Scalars["Int"]>
    orderBy?: InputMaybe<AccountBalance_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<AccountBalance_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
}

export type QuerycollateralTokenArgs = {
    id: Scalars["ID"]
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
}

export type QuerycollateralTokensArgs = {
    skip?: InputMaybe<Scalars["Int"]>
    first?: InputMaybe<Scalars["Int"]>
    orderBy?: InputMaybe<CollateralToken_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<CollateralToken_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
}

export type Query_metaArgs = {
    block?: InputMaybe<Block_height>
}

export type Subscription = {
    factory?: Maybe<Factory>
    factories: Array<Factory>
    token?: Maybe<Token>
    tokens: Array<Token>
    tranche?: Maybe<Tranche>
    tranches: Array<Tranche>
    bond?: Maybe<Bond>
    bonds: Array<Bond>
    account?: Maybe<Account>
    accounts: Array<Account>
    accountBalance?: Maybe<AccountBalance>
    accountBalances: Array<AccountBalance>
    collateralToken?: Maybe<CollateralToken>
    collateralTokens: Array<CollateralToken>
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>
}

export type SubscriptionfactoryArgs = {
    id: Scalars["ID"]
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionfactoriesArgs = {
    skip?: InputMaybe<Scalars["Int"]>
    first?: InputMaybe<Scalars["Int"]>
    orderBy?: InputMaybe<Factory_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Factory_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptiontokenArgs = {
    id: Scalars["ID"]
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptiontokensArgs = {
    skip?: InputMaybe<Scalars["Int"]>
    first?: InputMaybe<Scalars["Int"]>
    orderBy?: InputMaybe<Token_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Token_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptiontrancheArgs = {
    id: Scalars["ID"]
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptiontranchesArgs = {
    skip?: InputMaybe<Scalars["Int"]>
    first?: InputMaybe<Scalars["Int"]>
    orderBy?: InputMaybe<Tranche_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Tranche_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionbondArgs = {
    id: Scalars["ID"]
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionbondsArgs = {
    skip?: InputMaybe<Scalars["Int"]>
    first?: InputMaybe<Scalars["Int"]>
    orderBy?: InputMaybe<Bond_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Bond_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionaccountArgs = {
    id: Scalars["ID"]
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionaccountsArgs = {
    skip?: InputMaybe<Scalars["Int"]>
    first?: InputMaybe<Scalars["Int"]>
    orderBy?: InputMaybe<Account_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Account_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionaccountBalanceArgs = {
    id: Scalars["ID"]
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionaccountBalancesArgs = {
    skip?: InputMaybe<Scalars["Int"]>
    first?: InputMaybe<Scalars["Int"]>
    orderBy?: InputMaybe<AccountBalance_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<AccountBalance_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptioncollateralTokenArgs = {
    id: Scalars["ID"]
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptioncollateralTokensArgs = {
    skip?: InputMaybe<Scalars["Int"]>
    first?: InputMaybe<Scalars["Int"]>
    orderBy?: InputMaybe<CollateralToken_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<CollateralToken_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
}

export type Subscription_metaArgs = {
    block?: InputMaybe<Block_height>
}

export type Token = {
    /**  token address  */
    id: Scalars["ID"]
    /**  token symbol  */
    symbol: Scalars["String"]
    /**  token name  */
    name: Scalars["String"]
    /**  token decimals  */
    decimals: Scalars["BigInt"]
    /**  token total supply  */
    totalSupply: Scalars["BigInt"]
}

export type Token_filter = {
    id?: InputMaybe<Scalars["ID"]>
    id_not?: InputMaybe<Scalars["ID"]>
    id_gt?: InputMaybe<Scalars["ID"]>
    id_lt?: InputMaybe<Scalars["ID"]>
    id_gte?: InputMaybe<Scalars["ID"]>
    id_lte?: InputMaybe<Scalars["ID"]>
    id_in?: InputMaybe<Array<Scalars["ID"]>>
    id_not_in?: InputMaybe<Array<Scalars["ID"]>>
    symbol?: InputMaybe<Scalars["String"]>
    symbol_not?: InputMaybe<Scalars["String"]>
    symbol_gt?: InputMaybe<Scalars["String"]>
    symbol_lt?: InputMaybe<Scalars["String"]>
    symbol_gte?: InputMaybe<Scalars["String"]>
    symbol_lte?: InputMaybe<Scalars["String"]>
    symbol_in?: InputMaybe<Array<Scalars["String"]>>
    symbol_not_in?: InputMaybe<Array<Scalars["String"]>>
    symbol_contains?: InputMaybe<Scalars["String"]>
    symbol_contains_nocase?: InputMaybe<Scalars["String"]>
    symbol_not_contains?: InputMaybe<Scalars["String"]>
    symbol_not_contains_nocase?: InputMaybe<Scalars["String"]>
    symbol_starts_with?: InputMaybe<Scalars["String"]>
    symbol_starts_with_nocase?: InputMaybe<Scalars["String"]>
    symbol_not_starts_with?: InputMaybe<Scalars["String"]>
    symbol_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
    symbol_ends_with?: InputMaybe<Scalars["String"]>
    symbol_ends_with_nocase?: InputMaybe<Scalars["String"]>
    symbol_not_ends_with?: InputMaybe<Scalars["String"]>
    symbol_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
    name?: InputMaybe<Scalars["String"]>
    name_not?: InputMaybe<Scalars["String"]>
    name_gt?: InputMaybe<Scalars["String"]>
    name_lt?: InputMaybe<Scalars["String"]>
    name_gte?: InputMaybe<Scalars["String"]>
    name_lte?: InputMaybe<Scalars["String"]>
    name_in?: InputMaybe<Array<Scalars["String"]>>
    name_not_in?: InputMaybe<Array<Scalars["String"]>>
    name_contains?: InputMaybe<Scalars["String"]>
    name_contains_nocase?: InputMaybe<Scalars["String"]>
    name_not_contains?: InputMaybe<Scalars["String"]>
    name_not_contains_nocase?: InputMaybe<Scalars["String"]>
    name_starts_with?: InputMaybe<Scalars["String"]>
    name_starts_with_nocase?: InputMaybe<Scalars["String"]>
    name_not_starts_with?: InputMaybe<Scalars["String"]>
    name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
    name_ends_with?: InputMaybe<Scalars["String"]>
    name_ends_with_nocase?: InputMaybe<Scalars["String"]>
    name_not_ends_with?: InputMaybe<Scalars["String"]>
    name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
    decimals?: InputMaybe<Scalars["BigInt"]>
    decimals_not?: InputMaybe<Scalars["BigInt"]>
    decimals_gt?: InputMaybe<Scalars["BigInt"]>
    decimals_lt?: InputMaybe<Scalars["BigInt"]>
    decimals_gte?: InputMaybe<Scalars["BigInt"]>
    decimals_lte?: InputMaybe<Scalars["BigInt"]>
    decimals_in?: InputMaybe<Array<Scalars["BigInt"]>>
    decimals_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
    totalSupply?: InputMaybe<Scalars["BigInt"]>
    totalSupply_not?: InputMaybe<Scalars["BigInt"]>
    totalSupply_gt?: InputMaybe<Scalars["BigInt"]>
    totalSupply_lt?: InputMaybe<Scalars["BigInt"]>
    totalSupply_gte?: InputMaybe<Scalars["BigInt"]>
    totalSupply_lte?: InputMaybe<Scalars["BigInt"]>
    totalSupply_in?: InputMaybe<Array<Scalars["BigInt"]>>
    totalSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
}

export type Token_orderBy =
    | "id"
    | "symbol"
    | "name"
    | "decimals"
    | "totalSupply"

export type Tranche = {
    /**  tranche token address  */
    id: Scalars["ID"]
    /**  reference to the bond in which this tranche belongs  */
    bond: Bond
    /**  reference to the tranche token contract  */
    token: Token
    /**  ratio of this tranche, all tranche ratios sum to 1000  */
    ratio: Scalars["BigInt"]
    /**  index of this tranche, i.e. A-tranche is 0, B is 1 and so on  */
    index: Scalars["BigInt"]
    /**  The amount of collateral in this tranche for redemption  */
    totalCollateral: Scalars["BigInt"]
    /**  The amount of collateral in this tranche for redemption at time bond matured  */
    totalCollateralAtMaturity?: Maybe<Scalars["BigInt"]>
    /**  token total supply at time bond matured  */
    totalSupplyAtMaturity?: Maybe<Scalars["BigInt"]>
}

export type Tranche_filter = {
    id?: InputMaybe<Scalars["ID"]>
    id_not?: InputMaybe<Scalars["ID"]>
    id_gt?: InputMaybe<Scalars["ID"]>
    id_lt?: InputMaybe<Scalars["ID"]>
    id_gte?: InputMaybe<Scalars["ID"]>
    id_lte?: InputMaybe<Scalars["ID"]>
    id_in?: InputMaybe<Array<Scalars["ID"]>>
    id_not_in?: InputMaybe<Array<Scalars["ID"]>>
    bond?: InputMaybe<Scalars["String"]>
    bond_not?: InputMaybe<Scalars["String"]>
    bond_gt?: InputMaybe<Scalars["String"]>
    bond_lt?: InputMaybe<Scalars["String"]>
    bond_gte?: InputMaybe<Scalars["String"]>
    bond_lte?: InputMaybe<Scalars["String"]>
    bond_in?: InputMaybe<Array<Scalars["String"]>>
    bond_not_in?: InputMaybe<Array<Scalars["String"]>>
    bond_contains?: InputMaybe<Scalars["String"]>
    bond_contains_nocase?: InputMaybe<Scalars["String"]>
    bond_not_contains?: InputMaybe<Scalars["String"]>
    bond_not_contains_nocase?: InputMaybe<Scalars["String"]>
    bond_starts_with?: InputMaybe<Scalars["String"]>
    bond_starts_with_nocase?: InputMaybe<Scalars["String"]>
    bond_not_starts_with?: InputMaybe<Scalars["String"]>
    bond_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
    bond_ends_with?: InputMaybe<Scalars["String"]>
    bond_ends_with_nocase?: InputMaybe<Scalars["String"]>
    bond_not_ends_with?: InputMaybe<Scalars["String"]>
    bond_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
    bond_?: InputMaybe<Bond_filter>
    token?: InputMaybe<Scalars["String"]>
    token_not?: InputMaybe<Scalars["String"]>
    token_gt?: InputMaybe<Scalars["String"]>
    token_lt?: InputMaybe<Scalars["String"]>
    token_gte?: InputMaybe<Scalars["String"]>
    token_lte?: InputMaybe<Scalars["String"]>
    token_in?: InputMaybe<Array<Scalars["String"]>>
    token_not_in?: InputMaybe<Array<Scalars["String"]>>
    token_contains?: InputMaybe<Scalars["String"]>
    token_contains_nocase?: InputMaybe<Scalars["String"]>
    token_not_contains?: InputMaybe<Scalars["String"]>
    token_not_contains_nocase?: InputMaybe<Scalars["String"]>
    token_starts_with?: InputMaybe<Scalars["String"]>
    token_starts_with_nocase?: InputMaybe<Scalars["String"]>
    token_not_starts_with?: InputMaybe<Scalars["String"]>
    token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>
    token_ends_with?: InputMaybe<Scalars["String"]>
    token_ends_with_nocase?: InputMaybe<Scalars["String"]>
    token_not_ends_with?: InputMaybe<Scalars["String"]>
    token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>
    token_?: InputMaybe<Token_filter>
    ratio?: InputMaybe<Scalars["BigInt"]>
    ratio_not?: InputMaybe<Scalars["BigInt"]>
    ratio_gt?: InputMaybe<Scalars["BigInt"]>
    ratio_lt?: InputMaybe<Scalars["BigInt"]>
    ratio_gte?: InputMaybe<Scalars["BigInt"]>
    ratio_lte?: InputMaybe<Scalars["BigInt"]>
    ratio_in?: InputMaybe<Array<Scalars["BigInt"]>>
    ratio_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
    index?: InputMaybe<Scalars["BigInt"]>
    index_not?: InputMaybe<Scalars["BigInt"]>
    index_gt?: InputMaybe<Scalars["BigInt"]>
    index_lt?: InputMaybe<Scalars["BigInt"]>
    index_gte?: InputMaybe<Scalars["BigInt"]>
    index_lte?: InputMaybe<Scalars["BigInt"]>
    index_in?: InputMaybe<Array<Scalars["BigInt"]>>
    index_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
    totalCollateral?: InputMaybe<Scalars["BigInt"]>
    totalCollateral_not?: InputMaybe<Scalars["BigInt"]>
    totalCollateral_gt?: InputMaybe<Scalars["BigInt"]>
    totalCollateral_lt?: InputMaybe<Scalars["BigInt"]>
    totalCollateral_gte?: InputMaybe<Scalars["BigInt"]>
    totalCollateral_lte?: InputMaybe<Scalars["BigInt"]>
    totalCollateral_in?: InputMaybe<Array<Scalars["BigInt"]>>
    totalCollateral_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
    totalCollateralAtMaturity?: InputMaybe<Scalars["BigInt"]>
    totalCollateralAtMaturity_not?: InputMaybe<Scalars["BigInt"]>
    totalCollateralAtMaturity_gt?: InputMaybe<Scalars["BigInt"]>
    totalCollateralAtMaturity_lt?: InputMaybe<Scalars["BigInt"]>
    totalCollateralAtMaturity_gte?: InputMaybe<Scalars["BigInt"]>
    totalCollateralAtMaturity_lte?: InputMaybe<Scalars["BigInt"]>
    totalCollateralAtMaturity_in?: InputMaybe<Array<Scalars["BigInt"]>>
    totalCollateralAtMaturity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
    totalSupplyAtMaturity?: InputMaybe<Scalars["BigInt"]>
    totalSupplyAtMaturity_not?: InputMaybe<Scalars["BigInt"]>
    totalSupplyAtMaturity_gt?: InputMaybe<Scalars["BigInt"]>
    totalSupplyAtMaturity_lt?: InputMaybe<Scalars["BigInt"]>
    totalSupplyAtMaturity_gte?: InputMaybe<Scalars["BigInt"]>
    totalSupplyAtMaturity_lte?: InputMaybe<Scalars["BigInt"]>
    totalSupplyAtMaturity_in?: InputMaybe<Array<Scalars["BigInt"]>>
    totalSupplyAtMaturity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
}

export type Tranche_orderBy =
    | "id"
    | "bond"
    | "token"
    | "ratio"
    | "index"
    | "totalCollateral"
    | "totalCollateralAtMaturity"
    | "totalSupplyAtMaturity"

export type _Block_ = {
    /** The hash of the block */
    hash?: Maybe<Scalars["Bytes"]>
    /** The block number */
    number: Scalars["Int"]
    /** Integer representation of the timestamp stored in blocks for the chain */
    timestamp?: Maybe<Scalars["Int"]>
}

/** The type for the top-level _meta field */
export type _Meta_ = {
    /**
     * Information about a specific subgraph block. The hash of the block
     * will be null if the _meta field has a block constraint that asks for
     * a block number. It will be filled if the _meta field has no block constraint
     * and therefore asks for the latest  block
     *
     */
    block: _Block_
    /** The deployment ID */
    deployment: Scalars["String"]
    /** If `true`, the subgraph encountered indexing errors at some past block */
    hasIndexingErrors: Scalars["Boolean"]
}

export type _SubgraphErrorPolicy_ =
    /** Data will be returned even if the subgraph has indexing errors */
    | "allow"
    /** If the subgraph has indexing errors, data will be omitted. The default. */
    | "deny"

export type WithIndex<TObject> = TObject & Record<string, any>
export type ResolversObject<TObject> = WithIndex<TObject>

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
    fragment: string
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
    selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode)
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
    | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
    | NewStitchingResolver<TResult, TParent, TContext, TArgs>
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
    | ResolverFn<TResult, TParent, TContext, TArgs>
    | ResolverWithResolve<TResult, TParent, TContext, TArgs>
    | StitchingResolver<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
    TResult,
    TKey extends string,
    TParent,
    TContext,
    TArgs
> {
    subscribe: SubscriptionSubscribeFn<
        { [key in TKey]: TResult },
        TParent,
        TContext,
        TArgs
    >
    resolve?: SubscriptionResolveFn<
        TResult,
        { [key in TKey]: TResult },
        TContext,
        TArgs
    >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
    TResult,
    TKey extends string,
    TParent,
    TContext,
    TArgs
> =
    | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
    | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
    TResult,
    TKey extends string,
    TParent = {},
    TContext = {},
    TArgs = {}
> =
    | ((
          ...args: any[]
      ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
    | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
    parent: TParent,
    context: TContext,
    info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
    obj: T,
    context: TContext,
    info: GraphQLResolveInfo
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
    TResult = {},
    TParent = {},
    TContext = {},
    TArgs = {}
> = (
    next: NextResolverFn<TResult>,
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
    Account: ResolverTypeWrapper<Account>
    AccountBalance: ResolverTypeWrapper<AccountBalance>
    AccountBalance_filter: AccountBalance_filter
    AccountBalance_orderBy: AccountBalance_orderBy
    Account_filter: Account_filter
    Account_orderBy: Account_orderBy
    BigDecimal: ResolverTypeWrapper<Scalars["BigDecimal"]>
    BigInt: ResolverTypeWrapper<Scalars["BigInt"]>
    BlockChangedFilter: BlockChangedFilter
    Block_height: Block_height
    Bond: ResolverTypeWrapper<Bond>
    Bond_filter: Bond_filter
    Bond_orderBy: Bond_orderBy
    Boolean: ResolverTypeWrapper<Scalars["Boolean"]>
    Bytes: ResolverTypeWrapper<Scalars["Bytes"]>
    CollateralToken: ResolverTypeWrapper<CollateralToken>
    CollateralToken_filter: CollateralToken_filter
    CollateralToken_orderBy: CollateralToken_orderBy
    Factory: ResolverTypeWrapper<Factory>
    Factory_filter: Factory_filter
    Factory_orderBy: Factory_orderBy
    Float: ResolverTypeWrapper<Scalars["Float"]>
    ID: ResolverTypeWrapper<Scalars["ID"]>
    Int: ResolverTypeWrapper<Scalars["Int"]>
    OrderDirection: OrderDirection
    Query: ResolverTypeWrapper<{}>
    String: ResolverTypeWrapper<Scalars["String"]>
    Subscription: ResolverTypeWrapper<{}>
    Token: ResolverTypeWrapper<Token>
    Token_filter: Token_filter
    Token_orderBy: Token_orderBy
    Tranche: ResolverTypeWrapper<Tranche>
    Tranche_filter: Tranche_filter
    Tranche_orderBy: Tranche_orderBy
    _Block_: ResolverTypeWrapper<_Block_>
    _Meta_: ResolverTypeWrapper<_Meta_>
    _SubgraphErrorPolicy_: _SubgraphErrorPolicy_
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
    Account: Account
    AccountBalance: AccountBalance
    AccountBalance_filter: AccountBalance_filter
    Account_filter: Account_filter
    BigDecimal: Scalars["BigDecimal"]
    BigInt: Scalars["BigInt"]
    BlockChangedFilter: BlockChangedFilter
    Block_height: Block_height
    Bond: Bond
    Bond_filter: Bond_filter
    Boolean: Scalars["Boolean"]
    Bytes: Scalars["Bytes"]
    CollateralToken: CollateralToken
    CollateralToken_filter: CollateralToken_filter
    Factory: Factory
    Factory_filter: Factory_filter
    Float: Scalars["Float"]
    ID: Scalars["ID"]
    Int: Scalars["Int"]
    Query: {}
    String: Scalars["String"]
    Subscription: {}
    Token: Token
    Token_filter: Token_filter
    Tranche: Tranche
    Tranche_filter: Tranche_filter
    _Block_: _Block_
    _Meta_: _Meta_
}>

export type entityDirectiveArgs = {}

export type entityDirectiveResolver<
    Result,
    Parent,
    ContextType = MeshContext,
    Args = entityDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type subgraphIdDirectiveArgs = {
    id: Scalars["String"]
}

export type subgraphIdDirectiveResolver<
    Result,
    Parent,
    ContextType = MeshContext,
    Args = subgraphIdDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type derivedFromDirectiveArgs = {
    field: Scalars["String"]
}

export type derivedFromDirectiveResolver<
    Result,
    Parent,
    ContextType = MeshContext,
    Args = derivedFromDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type AccountResolvers<
    ContextType = MeshContext,
    ParentType extends ResolversParentTypes["Account"] = ResolversParentTypes["Account"]
> = ResolversObject<{
    id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>
    balances?: Resolver<
        Array<ResolversTypes["AccountBalance"]>,
        ParentType,
        ContextType,
        RequireFields<AccountbalancesArgs, "skip" | "first">
    >
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type AccountBalanceResolvers<
    ContextType = MeshContext,
    ParentType extends ResolversParentTypes["AccountBalance"] = ResolversParentTypes["AccountBalance"]
> = ResolversObject<{
    id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>
    account?: Resolver<ResolversTypes["Account"], ParentType, ContextType>
    tranche?: Resolver<ResolversTypes["Tranche"], ParentType, ContextType>
    amount?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
    block?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>
    modified?: Resolver<
        Maybe<ResolversTypes["BigInt"]>,
        ParentType,
        ContextType
    >
    transaction?: Resolver<
        Maybe<ResolversTypes["Bytes"]>,
        ParentType,
        ContextType
    >
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export interface BigDecimalScalarConfig
    extends GraphQLScalarTypeConfig<ResolversTypes["BigDecimal"], any> {
    name: "BigDecimal"
}

export interface BigIntScalarConfig
    extends GraphQLScalarTypeConfig<ResolversTypes["BigInt"], any> {
    name: "BigInt"
}

export type BondResolvers<
    ContextType = MeshContext,
    ParentType extends ResolversParentTypes["Bond"] = ResolversParentTypes["Bond"]
> = ResolversObject<{
    id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>
    creator?: Resolver<ResolversTypes["String"], ParentType, ContextType>
    depositLimit?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
    owner?: Resolver<ResolversTypes["String"], ParentType, ContextType>
    collateral?: Resolver<ResolversTypes["Token"], ParentType, ContextType>
    tranches?: Resolver<
        Array<ResolversTypes["Tranche"]>,
        ParentType,
        ContextType,
        RequireFields<BondtranchesArgs, "skip" | "first">
    >
    feeBps?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
    startDate?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
    maturityDate?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
    maturedDate?: Resolver<
        Maybe<ResolversTypes["BigInt"]>,
        ParentType,
        ContextType
    >
    isMature?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>
    totalDebt?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
    totalDebtAtMaturity?: Resolver<
        Maybe<ResolversTypes["BigInt"]>,
        ParentType,
        ContextType
    >
    totalCollateral?: Resolver<
        ResolversTypes["BigInt"],
        ParentType,
        ContextType
    >
    totalCollateralAtMaturity?: Resolver<
        Maybe<ResolversTypes["BigInt"]>,
        ParentType,
        ContextType
    >
    tokenNames?: Resolver<ResolversTypes["String"], ParentType, ContextType>
    collateralSymbol?: Resolver<
        ResolversTypes["String"],
        ParentType,
        ContextType
    >
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export interface BytesScalarConfig
    extends GraphQLScalarTypeConfig<ResolversTypes["Bytes"], any> {
    name: "Bytes"
}

export type CollateralTokenResolvers<
    ContextType = MeshContext,
    ParentType extends ResolversParentTypes["CollateralToken"] = ResolversParentTypes["CollateralToken"]
> = ResolversObject<{
    id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>
    token?: Resolver<ResolversTypes["Token"], ParentType, ContextType>
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type FactoryResolvers<
    ContextType = MeshContext,
    ParentType extends ResolversParentTypes["Factory"] = ResolversParentTypes["Factory"]
> = ResolversObject<{
    id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>
    bondCount?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type QueryResolvers<
    ContextType = MeshContext,
    ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = ResolversObject<{
    factory?: Resolver<
        Maybe<ResolversTypes["Factory"]>,
        ParentType,
        ContextType,
        RequireFields<QueryfactoryArgs, "id" | "subgraphError">
    >
    factories?: Resolver<
        Array<ResolversTypes["Factory"]>,
        ParentType,
        ContextType,
        RequireFields<QueryfactoriesArgs, "skip" | "first" | "subgraphError">
    >
    token?: Resolver<
        Maybe<ResolversTypes["Token"]>,
        ParentType,
        ContextType,
        RequireFields<QuerytokenArgs, "id" | "subgraphError">
    >
    tokens?: Resolver<
        Array<ResolversTypes["Token"]>,
        ParentType,
        ContextType,
        RequireFields<QuerytokensArgs, "skip" | "first" | "subgraphError">
    >
    tranche?: Resolver<
        Maybe<ResolversTypes["Tranche"]>,
        ParentType,
        ContextType,
        RequireFields<QuerytrancheArgs, "id" | "subgraphError">
    >
    tranches?: Resolver<
        Array<ResolversTypes["Tranche"]>,
        ParentType,
        ContextType,
        RequireFields<QuerytranchesArgs, "skip" | "first" | "subgraphError">
    >
    bond?: Resolver<
        Maybe<ResolversTypes["Bond"]>,
        ParentType,
        ContextType,
        RequireFields<QuerybondArgs, "id" | "subgraphError">
    >
    bonds?: Resolver<
        Array<ResolversTypes["Bond"]>,
        ParentType,
        ContextType,
        RequireFields<QuerybondsArgs, "skip" | "first" | "subgraphError">
    >
    account?: Resolver<
        Maybe<ResolversTypes["Account"]>,
        ParentType,
        ContextType,
        RequireFields<QueryaccountArgs, "id" | "subgraphError">
    >
    accounts?: Resolver<
        Array<ResolversTypes["Account"]>,
        ParentType,
        ContextType,
        RequireFields<QueryaccountsArgs, "skip" | "first" | "subgraphError">
    >
    accountBalance?: Resolver<
        Maybe<ResolversTypes["AccountBalance"]>,
        ParentType,
        ContextType,
        RequireFields<QueryaccountBalanceArgs, "id" | "subgraphError">
    >
    accountBalances?: Resolver<
        Array<ResolversTypes["AccountBalance"]>,
        ParentType,
        ContextType,
        RequireFields<
            QueryaccountBalancesArgs,
            "skip" | "first" | "subgraphError"
        >
    >
    collateralToken?: Resolver<
        Maybe<ResolversTypes["CollateralToken"]>,
        ParentType,
        ContextType,
        RequireFields<QuerycollateralTokenArgs, "id" | "subgraphError">
    >
    collateralTokens?: Resolver<
        Array<ResolversTypes["CollateralToken"]>,
        ParentType,
        ContextType,
        RequireFields<
            QuerycollateralTokensArgs,
            "skip" | "first" | "subgraphError"
        >
    >
    _meta?: Resolver<
        Maybe<ResolversTypes["_Meta_"]>,
        ParentType,
        ContextType,
        Partial<Query_metaArgs>
    >
}>

export type SubscriptionResolvers<
    ContextType = MeshContext,
    ParentType extends ResolversParentTypes["Subscription"] = ResolversParentTypes["Subscription"]
> = ResolversObject<{
    factory?: SubscriptionResolver<
        Maybe<ResolversTypes["Factory"]>,
        "factory",
        ParentType,
        ContextType,
        RequireFields<SubscriptionfactoryArgs, "id" | "subgraphError">
    >
    factories?: SubscriptionResolver<
        Array<ResolversTypes["Factory"]>,
        "factories",
        ParentType,
        ContextType,
        RequireFields<
            SubscriptionfactoriesArgs,
            "skip" | "first" | "subgraphError"
        >
    >
    token?: SubscriptionResolver<
        Maybe<ResolversTypes["Token"]>,
        "token",
        ParentType,
        ContextType,
        RequireFields<SubscriptiontokenArgs, "id" | "subgraphError">
    >
    tokens?: SubscriptionResolver<
        Array<ResolversTypes["Token"]>,
        "tokens",
        ParentType,
        ContextType,
        RequireFields<
            SubscriptiontokensArgs,
            "skip" | "first" | "subgraphError"
        >
    >
    tranche?: SubscriptionResolver<
        Maybe<ResolversTypes["Tranche"]>,
        "tranche",
        ParentType,
        ContextType,
        RequireFields<SubscriptiontrancheArgs, "id" | "subgraphError">
    >
    tranches?: SubscriptionResolver<
        Array<ResolversTypes["Tranche"]>,
        "tranches",
        ParentType,
        ContextType,
        RequireFields<
            SubscriptiontranchesArgs,
            "skip" | "first" | "subgraphError"
        >
    >
    bond?: SubscriptionResolver<
        Maybe<ResolversTypes["Bond"]>,
        "bond",
        ParentType,
        ContextType,
        RequireFields<SubscriptionbondArgs, "id" | "subgraphError">
    >
    bonds?: SubscriptionResolver<
        Array<ResolversTypes["Bond"]>,
        "bonds",
        ParentType,
        ContextType,
        RequireFields<SubscriptionbondsArgs, "skip" | "first" | "subgraphError">
    >
    account?: SubscriptionResolver<
        Maybe<ResolversTypes["Account"]>,
        "account",
        ParentType,
        ContextType,
        RequireFields<SubscriptionaccountArgs, "id" | "subgraphError">
    >
    accounts?: SubscriptionResolver<
        Array<ResolversTypes["Account"]>,
        "accounts",
        ParentType,
        ContextType,
        RequireFields<
            SubscriptionaccountsArgs,
            "skip" | "first" | "subgraphError"
        >
    >
    accountBalance?: SubscriptionResolver<
        Maybe<ResolversTypes["AccountBalance"]>,
        "accountBalance",
        ParentType,
        ContextType,
        RequireFields<SubscriptionaccountBalanceArgs, "id" | "subgraphError">
    >
    accountBalances?: SubscriptionResolver<
        Array<ResolversTypes["AccountBalance"]>,
        "accountBalances",
        ParentType,
        ContextType,
        RequireFields<
            SubscriptionaccountBalancesArgs,
            "skip" | "first" | "subgraphError"
        >
    >
    collateralToken?: SubscriptionResolver<
        Maybe<ResolversTypes["CollateralToken"]>,
        "collateralToken",
        ParentType,
        ContextType,
        RequireFields<SubscriptioncollateralTokenArgs, "id" | "subgraphError">
    >
    collateralTokens?: SubscriptionResolver<
        Array<ResolversTypes["CollateralToken"]>,
        "collateralTokens",
        ParentType,
        ContextType,
        RequireFields<
            SubscriptioncollateralTokensArgs,
            "skip" | "first" | "subgraphError"
        >
    >
    _meta?: SubscriptionResolver<
        Maybe<ResolversTypes["_Meta_"]>,
        "_meta",
        ParentType,
        ContextType,
        Partial<Subscription_metaArgs>
    >
}>

export type TokenResolvers<
    ContextType = MeshContext,
    ParentType extends ResolversParentTypes["Token"] = ResolversParentTypes["Token"]
> = ResolversObject<{
    id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>
    symbol?: Resolver<ResolversTypes["String"], ParentType, ContextType>
    name?: Resolver<ResolversTypes["String"], ParentType, ContextType>
    decimals?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
    totalSupply?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TrancheResolvers<
    ContextType = MeshContext,
    ParentType extends ResolversParentTypes["Tranche"] = ResolversParentTypes["Tranche"]
> = ResolversObject<{
    id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>
    bond?: Resolver<ResolversTypes["Bond"], ParentType, ContextType>
    token?: Resolver<ResolversTypes["Token"], ParentType, ContextType>
    ratio?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
    index?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>
    totalCollateral?: Resolver<
        ResolversTypes["BigInt"],
        ParentType,
        ContextType
    >
    totalCollateralAtMaturity?: Resolver<
        Maybe<ResolversTypes["BigInt"]>,
        ParentType,
        ContextType
    >
    totalSupplyAtMaturity?: Resolver<
        Maybe<ResolversTypes["BigInt"]>,
        ParentType,
        ContextType
    >
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type _Block_Resolvers<
    ContextType = MeshContext,
    ParentType extends ResolversParentTypes["_Block_"] = ResolversParentTypes["_Block_"]
> = ResolversObject<{
    hash?: Resolver<Maybe<ResolversTypes["Bytes"]>, ParentType, ContextType>
    number?: Resolver<ResolversTypes["Int"], ParentType, ContextType>
    timestamp?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type _Meta_Resolvers<
    ContextType = MeshContext,
    ParentType extends ResolversParentTypes["_Meta_"] = ResolversParentTypes["_Meta_"]
> = ResolversObject<{
    block?: Resolver<ResolversTypes["_Block_"], ParentType, ContextType>
    deployment?: Resolver<ResolversTypes["String"], ParentType, ContextType>
    hasIndexingErrors?: Resolver<
        ResolversTypes["Boolean"],
        ParentType,
        ContextType
    >
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
    Account?: AccountResolvers<ContextType>
    AccountBalance?: AccountBalanceResolvers<ContextType>
    BigDecimal?: GraphQLScalarType
    BigInt?: GraphQLScalarType
    Bond?: BondResolvers<ContextType>
    Bytes?: GraphQLScalarType
    CollateralToken?: CollateralTokenResolvers<ContextType>
    Factory?: FactoryResolvers<ContextType>
    Query?: QueryResolvers<ContextType>
    Subscription?: SubscriptionResolvers<ContextType>
    Token?: TokenResolvers<ContextType>
    Tranche?: TrancheResolvers<ContextType>
    _Block_?: _Block_Resolvers<ContextType>
    _Meta_?: _Meta_Resolvers<ContextType>
}>

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
    entity?: entityDirectiveResolver<any, any, ContextType>
    subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>
    derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>
}>

export type MeshContext = TrancheTypes.Context & BaseMeshContext

import { fileURLToPath } from "@graphql-mesh/utils"
const baseDir = pathModule.join(
    pathModule.dirname(fileURLToPath(import.meta.url)),
    ".."
)

const importFn: ImportFn = <T>(moduleId: string) => {
    const relativeModuleId = (
        pathModule.isAbsolute(moduleId)
            ? pathModule.relative(baseDir, moduleId)
            : moduleId
    )
        .split("\\")
        .join("/")
        .replace(baseDir + "/", "")
    switch (relativeModuleId) {
        case ".graphclient/sources/tranche/introspectionSchema":
            return import("./sources/tranche/introspectionSchema") as T

        default:
            return Promise.reject(
                new Error(`Cannot find module '${relativeModuleId}'.`)
            )
    }
}

const rootStore = new MeshStore(
    ".graphclient",
    new FsStoreStorageAdapter({
        cwd: baseDir,
        importFn,
        fileType: "ts",
    }),
    {
        readonly: true,
        validate: false,
    }
)

export const rawServeConfig: YamlConfig.Config["serve"] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
    const pubsub = new PubSub()
    const sourcesStore = rootStore.child("sources")
    const logger = new DefaultLogger("GraphClient")
    const cache = new (MeshCache as any)({
        ...({} as any),
        importFn,
        store: rootStore.child("cache"),
        pubsub,
        logger,
    } as any)

    const sources: MeshResolvedSource[] = []
    const transforms: MeshTransform[] = []
    const additionalEnvelopPlugins: MeshPlugin<any>[] = []
    const trancheTransforms = []
    const additionalTypeDefs = [] as any[]
    const trancheHandler = new GraphqlHandler({
        name: "tranche",
        config: {
            endpoint:
                "https://api.thegraph.com/subgraphs/name/buttonwood-protocol/tranche",
        },
        baseDir,
        cache,
        pubsub,
        store: sourcesStore.child("tranche"),
        logger: logger.child("tranche"),
        importFn,
    })
    sources[0] = {
        name: "tranche",
        handler: trancheHandler,
        transforms: trancheTransforms,
    }
    const additionalResolvers = [] as any[]
    const merger = new (BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child("bareMerger"),
        store: rootStore.child("bareMerger"),
    })

    return {
        sources,
        transforms,
        additionalTypeDefs,
        additionalResolvers,
        cache,
        pubsub,
        merger,
        logger,
        additionalEnvelopPlugins,
        get documents() {
            return [
                {
                    document: BondsDocument,
                    get rawSDL() {
                        return printWithCache(BondsDocument)
                    },
                    location: "BondsDocument.graphql",
                },
                {
                    document: BondsAtBlockDocument,
                    get rawSDL() {
                        return printWithCache(BondsAtBlockDocument)
                    },
                    location: "BondsAtBlockDocument.graphql",
                },
                {
                    document: BondDocument,
                    get rawSDL() {
                        return printWithCache(BondDocument)
                    },
                    location: "BondDocument.graphql",
                },
            ]
        },
        fetchFn,
    }
}

export function createBuiltMeshHTTPHandler(): MeshHTTPHandler<MeshContext> {
    return createMeshHTTPHandler<MeshContext>({
        baseDir,
        getBuiltMesh: getBuiltGraphClient,
        rawServeConfig: undefined,
    })
}

let meshInstance$: Promise<MeshInstance> | undefined

export function getBuiltGraphClient(): Promise<MeshInstance> {
    if (meshInstance$ == null) {
        meshInstance$ = getMeshOptions()
            .then((meshOptions) => getMesh(meshOptions))
            .then((mesh) => {
                const id = mesh.pubsub.subscribe("destroy", () => {
                    meshInstance$ = undefined
                    mesh.pubsub.unsubscribe(id)
                })
                return mesh
            })
    }
    return meshInstance$
}

export const execute: ExecuteMeshFn = (...args) =>
    getBuiltGraphClient().then(({ execute }) => execute(...args))

export const subscribe: SubscribeMeshFn = (...args) =>
    getBuiltGraphClient().then(({ subscribe }) => subscribe(...args))
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(
    globalContext?: TGlobalContext
) {
    const sdkRequester$ = getBuiltGraphClient().then(
        ({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext)
    )
    return getSdk<TOperationContext, TGlobalContext>((...args) =>
        sdkRequester$.then((sdkRequester) => sdkRequester(...args))
    )
}
export type bondDataFragment = Pick<
    Bond,
    | "id"
    | "startDate"
    | "maturityDate"
    | "totalCollateral"
    | "totalCollateralAtMaturity"
    | "totalDebt"
    | "totalDebtAtMaturity"
    | "isMature"
> & { collateral: Pick<Token, "name" | "symbol" | "id" | "decimals"> }

export type trancheDataFragment = Pick<
    Tranche,
    | "index"
    | "ratio"
    | "totalCollateral"
    | "totalCollateralAtMaturity"
    | "totalSupplyAtMaturity"
> & {
    token: Pick<Token, "id" | "name" | "symbol" | "decimals" | "totalSupply">
}

export type trancheDataMinFragment = Pick<
    Tranche,
    "index" | "ratio" | "totalCollateral"
>

export type blockDataFragment = { block: Pick<_Block_, "number" | "timestamp"> }

export type BondsQueryVariables = Exact<{ [key: string]: never }>

export type BondsQuery = {
    bonds: Array<
        Pick<
            Bond,
            | "id"
            | "startDate"
            | "maturityDate"
            | "totalCollateral"
            | "totalCollateralAtMaturity"
            | "totalDebt"
            | "totalDebtAtMaturity"
            | "isMature"
        > & {
            tranches: Array<
                Pick<Tranche, "index" | "ratio" | "totalCollateral">
            >
            collateral: Pick<Token, "name" | "symbol" | "id" | "decimals">
        }
    >
    _meta?: Maybe<{ block: Pick<_Block_, "number" | "timestamp"> }>
}

export type BondsAtBlockQueryVariables = Exact<{
    blockNumber: Scalars["Int"]
}>

export type BondsAtBlockQuery = {
    bonds: Array<
        Pick<
            Bond,
            | "id"
            | "startDate"
            | "maturityDate"
            | "totalCollateral"
            | "totalCollateralAtMaturity"
            | "totalDebt"
            | "totalDebtAtMaturity"
            | "isMature"
        > & { collateral: Pick<Token, "name" | "symbol" | "id" | "decimals"> }
    >
    _meta?: Maybe<{ block: Pick<_Block_, "number" | "timestamp"> }>
}

export type BondQueryVariables = Exact<{
    address: Scalars["ID"]
}>

export type BondQuery = {
    bond?: Maybe<
        Pick<
            Bond,
            | "id"
            | "startDate"
            | "maturityDate"
            | "totalCollateral"
            | "totalCollateralAtMaturity"
            | "totalDebt"
            | "totalDebtAtMaturity"
            | "isMature"
        > & {
            tranches: Array<
                Pick<
                    Tranche,
                    | "index"
                    | "ratio"
                    | "totalCollateral"
                    | "totalCollateralAtMaturity"
                    | "totalSupplyAtMaturity"
                > & {
                    token: Pick<
                        Token,
                        "id" | "name" | "symbol" | "decimals" | "totalSupply"
                    >
                }
            >
            collateral: Pick<Token, "name" | "symbol" | "id" | "decimals">
        }
    >
    _meta?: Maybe<{ block: Pick<_Block_, "number" | "timestamp"> }>
}

export const bondDataFragmentDoc = gql`
    fragment bondData on Bond {
        id
        startDate
        maturityDate
        totalCollateral
        totalCollateralAtMaturity
        totalDebt
        totalDebtAtMaturity
        isMature
        collateral {
            name
            symbol
            id
            decimals
        }
    }
` as unknown as DocumentNode<bondDataFragment, unknown>
export const trancheDataFragmentDoc = gql`
    fragment trancheData on Tranche {
        index
        ratio
        totalCollateral
        totalCollateralAtMaturity
        totalSupplyAtMaturity
        token {
            id
            name
            symbol
            decimals
            totalSupply
        }
    }
` as unknown as DocumentNode<trancheDataFragment, unknown>
export const trancheDataMinFragmentDoc = gql`
    fragment trancheDataMin on Tranche {
        index
        ratio
        totalCollateral
    }
` as unknown as DocumentNode<trancheDataMinFragment, unknown>
export const blockDataFragmentDoc = gql`
    fragment blockData on _Meta_ {
        block {
            number
            timestamp
        }
    }
` as unknown as DocumentNode<blockDataFragment, unknown>
export const BondsDocument = gql`
    query Bonds {
        bonds {
            ...bondData
            tranches(orderDirection: asc, orderBy: index) {
                ...trancheDataMin
            }
        }
        _meta {
            ...blockData
        }
    }
    ${bondDataFragmentDoc}
    ${trancheDataMinFragmentDoc}
    ${blockDataFragmentDoc}
` as unknown as DocumentNode<BondsQuery, BondsQueryVariables>
export const BondsAtBlockDocument = gql`
    query BondsAtBlock($blockNumber: Int!) {
        bonds(block: { number: $blockNumber }) {
            ...bondData
        }
        _meta {
            ...blockData
        }
    }
    ${bondDataFragmentDoc}
    ${blockDataFragmentDoc}
` as unknown as DocumentNode<BondsAtBlockQuery, BondsAtBlockQueryVariables>
export const BondDocument = gql`
    query Bond($address: ID!) {
        bond(id: $address) {
            ...bondData
            tranches(orderDirection: asc, orderBy: index) {
                ...trancheData
            }
        }
        _meta {
            ...blockData
        }
    }
    ${bondDataFragmentDoc}
    ${trancheDataFragmentDoc}
    ${blockDataFragmentDoc}
` as unknown as DocumentNode<BondQuery, BondQueryVariables>

export type Requester<C = {}, E = unknown> = <R, V>(
    doc: DocumentNode,
    vars?: V,
    options?: C
) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
    return {
        Bonds(
            variables?: BondsQueryVariables,
            options?: C
        ): Promise<BondsQuery> {
            return requester<BondsQuery, BondsQueryVariables>(
                BondsDocument,
                variables,
                options
            ) as Promise<BondsQuery>
        },
        BondsAtBlock(
            variables: BondsAtBlockQueryVariables,
            options?: C
        ): Promise<BondsAtBlockQuery> {
            return requester<BondsAtBlockQuery, BondsAtBlockQueryVariables>(
                BondsAtBlockDocument,
                variables,
                options
            ) as Promise<BondsAtBlockQuery>
        },
        Bond(variables: BondQueryVariables, options?: C): Promise<BondQuery> {
            return requester<BondQuery, BondQueryVariables>(
                BondDocument,
                variables,
                options
            ) as Promise<BondQuery>
        },
    }
}
export type Sdk = ReturnType<typeof getSdk>
