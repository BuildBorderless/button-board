// @ts-nocheck

import { InContextSdkMethod } from "@graphql-mesh/types"
import { MeshContext } from "@graphql-mesh/runtime"

export namespace TrancheTypes {
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

    export type QuerySdk = {
        /** null **/
        factory: InContextSdkMethod<
            Query["factory"],
            QueryfactoryArgs,
            MeshContext
        >
        /** null **/
        factories: InContextSdkMethod<
            Query["factories"],
            QueryfactoriesArgs,
            MeshContext
        >
        /** null **/
        token: InContextSdkMethod<Query["token"], QuerytokenArgs, MeshContext>
        /** null **/
        tokens: InContextSdkMethod<
            Query["tokens"],
            QuerytokensArgs,
            MeshContext
        >
        /** null **/
        tranche: InContextSdkMethod<
            Query["tranche"],
            QuerytrancheArgs,
            MeshContext
        >
        /** null **/
        tranches: InContextSdkMethod<
            Query["tranches"],
            QuerytranchesArgs,
            MeshContext
        >
        /** null **/
        bond: InContextSdkMethod<Query["bond"], QuerybondArgs, MeshContext>
        /** null **/
        bonds: InContextSdkMethod<Query["bonds"], QuerybondsArgs, MeshContext>
        /** null **/
        account: InContextSdkMethod<
            Query["account"],
            QueryaccountArgs,
            MeshContext
        >
        /** null **/
        accounts: InContextSdkMethod<
            Query["accounts"],
            QueryaccountsArgs,
            MeshContext
        >
        /** null **/
        accountBalance: InContextSdkMethod<
            Query["accountBalance"],
            QueryaccountBalanceArgs,
            MeshContext
        >
        /** null **/
        accountBalances: InContextSdkMethod<
            Query["accountBalances"],
            QueryaccountBalancesArgs,
            MeshContext
        >
        /** null **/
        collateralToken: InContextSdkMethod<
            Query["collateralToken"],
            QuerycollateralTokenArgs,
            MeshContext
        >
        /** null **/
        collateralTokens: InContextSdkMethod<
            Query["collateralTokens"],
            QuerycollateralTokensArgs,
            MeshContext
        >
        /** Access to subgraph metadata **/
        _meta: InContextSdkMethod<Query["_meta"], Query_metaArgs, MeshContext>
    }

    export type MutationSdk = {}

    export type SubscriptionSdk = {
        /** null **/
        factory: InContextSdkMethod<
            Subscription["factory"],
            SubscriptionfactoryArgs,
            MeshContext
        >
        /** null **/
        factories: InContextSdkMethod<
            Subscription["factories"],
            SubscriptionfactoriesArgs,
            MeshContext
        >
        /** null **/
        token: InContextSdkMethod<
            Subscription["token"],
            SubscriptiontokenArgs,
            MeshContext
        >
        /** null **/
        tokens: InContextSdkMethod<
            Subscription["tokens"],
            SubscriptiontokensArgs,
            MeshContext
        >
        /** null **/
        tranche: InContextSdkMethod<
            Subscription["tranche"],
            SubscriptiontrancheArgs,
            MeshContext
        >
        /** null **/
        tranches: InContextSdkMethod<
            Subscription["tranches"],
            SubscriptiontranchesArgs,
            MeshContext
        >
        /** null **/
        bond: InContextSdkMethod<
            Subscription["bond"],
            SubscriptionbondArgs,
            MeshContext
        >
        /** null **/
        bonds: InContextSdkMethod<
            Subscription["bonds"],
            SubscriptionbondsArgs,
            MeshContext
        >
        /** null **/
        account: InContextSdkMethod<
            Subscription["account"],
            SubscriptionaccountArgs,
            MeshContext
        >
        /** null **/
        accounts: InContextSdkMethod<
            Subscription["accounts"],
            SubscriptionaccountsArgs,
            MeshContext
        >
        /** null **/
        accountBalance: InContextSdkMethod<
            Subscription["accountBalance"],
            SubscriptionaccountBalanceArgs,
            MeshContext
        >
        /** null **/
        accountBalances: InContextSdkMethod<
            Subscription["accountBalances"],
            SubscriptionaccountBalancesArgs,
            MeshContext
        >
        /** null **/
        collateralToken: InContextSdkMethod<
            Subscription["collateralToken"],
            SubscriptioncollateralTokenArgs,
            MeshContext
        >
        /** null **/
        collateralTokens: InContextSdkMethod<
            Subscription["collateralTokens"],
            SubscriptioncollateralTokensArgs,
            MeshContext
        >
        /** Access to subgraph metadata **/
        _meta: InContextSdkMethod<
            Subscription["_meta"],
            Subscription_metaArgs,
            MeshContext
        >
    }

    export type Context = {
        ["tranche"]: {
            Query: QuerySdk
            Mutation: MutationSdk
            Subscription: SubscriptionSdk
        }
    }
}
