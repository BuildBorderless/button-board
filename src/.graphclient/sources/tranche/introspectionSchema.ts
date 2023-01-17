// @ts-nocheck
import { buildASTSchema } from "graphql"

const schemaAST = {
    kind: "Document",
    definitions: [
        {
            kind: "SchemaDefinition",
            operationTypes: [
                {
                    kind: "OperationTypeDefinition",
                    operation: "query",
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Query",
                        },
                    },
                },
                {
                    kind: "OperationTypeDefinition",
                    operation: "subscription",
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Subscription",
                        },
                    },
                },
            ],
            directives: [],
        },
        {
            kind: "DirectiveDefinition",
            description: {
                kind: "StringValue",
                value: "Marks the GraphQL type as indexable entity.  Each type that should be an entity is required to be annotated with this directive.",
            },
            name: {
                kind: "Name",
                value: "entity",
            },
            arguments: [],
            repeatable: false,
            locations: [
                {
                    kind: "Name",
                    value: "OBJECT",
                },
            ],
        },
        {
            kind: "DirectiveDefinition",
            description: {
                kind: "StringValue",
                value: "Defined a Subgraph ID for an object type",
            },
            name: {
                kind: "Name",
                value: "subgraphId",
            },
            arguments: [
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id",
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                            },
                        },
                    },
                    directives: [],
                },
            ],
            repeatable: false,
            locations: [
                {
                    kind: "Name",
                    value: "OBJECT",
                },
            ],
        },
        {
            kind: "DirectiveDefinition",
            description: {
                kind: "StringValue",
                value: "creates a virtual field on the entity that may be queried but cannot be set manually through the mappings API.",
            },
            name: {
                kind: "Name",
                value: "derivedFrom",
            },
            arguments: [
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "field",
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                            },
                        },
                    },
                    directives: [],
                },
            ],
            repeatable: false,
            locations: [
                {
                    kind: "Name",
                    value: "FIELD_DEFINITION",
                },
            ],
        },
        {
            kind: "ObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "Account",
            },
            fields: [
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " Account address ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "id",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " Tranche token balances that this account holds ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "balances",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "skip",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "0",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "first",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "100",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderBy",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "AccountBalance_orderBy",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderDirection",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "OrderDirection",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "where",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "AccountBalance_filter",
                                },
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "AccountBalance",
                                    },
                                },
                            },
                        },
                    },
                    directives: [],
                },
            ],
            interfaces: [],
            directives: [],
        },
        {
            kind: "ObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "AccountBalance",
            },
            fields: [
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " Equals to: <accountAddress>-<tokenAddress>",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "id",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " Account address ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "account",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Account",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " Tranche token address ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "tranche",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Tranche",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " Current account balance ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "amount",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BigInt",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " Block number in which the balance was last modified ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "block",
                    },
                    arguments: [],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " Last modified timestamp in seconds ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "modified",
                    },
                    arguments: [],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " Hash of the last transaction that modified the balance ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "transaction",
                    },
                    arguments: [],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Bytes",
                        },
                    },
                    directives: [],
                },
            ],
            interfaces: [],
            directives: [],
        },
        {
            kind: "InputObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "AccountBalance_filter",
            },
            fields: [
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "account",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "account_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "account_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "account_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "account_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "account_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "account_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "account_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "account_contains",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "account_contains_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "account_not_contains",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "account_not_contains_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "account_starts_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "account_starts_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "account_not_starts_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "account_not_starts_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "account_ends_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "account_ends_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "account_not_ends_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "account_not_ends_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "account_",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Account_filter",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tranche",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tranche_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tranche_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tranche_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tranche_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tranche_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tranche_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tranche_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tranche_contains",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tranche_contains_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tranche_not_contains",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tranche_not_contains_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tranche_starts_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tranche_starts_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tranche_not_starts_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tranche_not_starts_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tranche_ends_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tranche_ends_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tranche_not_ends_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tranche_not_ends_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tranche_",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Tranche_filter",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "amount",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "amount_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "amount_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "amount_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "amount_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "amount_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "amount_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "amount_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "block",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "block_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "block_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "block_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "block_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "block_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "block_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "block_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "modified",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "modified_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "modified_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "modified_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "modified_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "modified_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "modified_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "modified_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "transaction",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Bytes",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "transaction_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Bytes",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "transaction_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Bytes",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "transaction_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Bytes",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "transaction_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Bytes",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "transaction_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Bytes",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "transaction_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Bytes",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "transaction_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Bytes",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "transaction_contains",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Bytes",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "transaction_not_contains",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Bytes",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    description: {
                        kind: "StringValue",
                        value: "Filter for the block changed event.",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "_change_block",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BlockChangedFilter",
                        },
                    },
                    directives: [],
                },
            ],
            directives: [],
        },
        {
            kind: "EnumTypeDefinition",
            name: {
                kind: "Name",
                value: "AccountBalance_orderBy",
            },
            values: [
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "account",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tranche",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "amount",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "block",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "modified",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "transaction",
                    },
                    directives: [],
                },
            ],
            directives: [],
        },
        {
            kind: "InputObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "Account_filter",
            },
            fields: [
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "balances_",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "AccountBalance_filter",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    description: {
                        kind: "StringValue",
                        value: "Filter for the block changed event.",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "_change_block",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BlockChangedFilter",
                        },
                    },
                    directives: [],
                },
            ],
            directives: [],
        },
        {
            kind: "EnumTypeDefinition",
            name: {
                kind: "Name",
                value: "Account_orderBy",
            },
            values: [
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "balances",
                    },
                    directives: [],
                },
            ],
            directives: [],
        },
        {
            kind: "ScalarTypeDefinition",
            name: {
                kind: "Name",
                value: "BigDecimal",
            },
            directives: [],
        },
        {
            kind: "ScalarTypeDefinition",
            name: {
                kind: "Name",
                value: "BigInt",
            },
            directives: [],
        },
        {
            kind: "InputObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "BlockChangedFilter",
            },
            fields: [
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "number_gte",
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Int",
                            },
                        },
                    },
                    directives: [],
                },
            ],
            directives: [],
        },
        {
            kind: "InputObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "Block_height",
            },
            fields: [
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "hash",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Bytes",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "number",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Int",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "number_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Int",
                        },
                    },
                    directives: [],
                },
            ],
            directives: [],
        },
        {
            kind: "ObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "Bond",
            },
            fields: [
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " bond address ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "id",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " address of the creator ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "creator",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " Deposit limit of the bond ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "depositLimit",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BigInt",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " address of the owner ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "owner",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " reference to the collateral token ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "collateral",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Token",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " The tranches and ratios in a list ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "tranches",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "skip",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "0",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "first",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "100",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderBy",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Tranche_orderBy",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderDirection",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "OrderDirection",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "where",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Tranche_filter",
                                },
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Tranche",
                                    },
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " The fee collected by bond owner ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "feeBps",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BigInt",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " The unix timestamp when this bond was created ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "startDate",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BigInt",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " date of when bond can first be matured as a unix timestamp ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "maturityDate",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BigInt",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " date bond was matured as a unix timestamp ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "maturedDate",
                    },
                    arguments: [],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " true if this bond is mature, else false ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "isMature",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " Total amount of debt distributed. Equal to the sum of tranche total supplies ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "totalDebt",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BigInt",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " Total amount of debt distributed at time bond matured. Equal to the sum of tranche total supplies ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "totalDebtAtMaturity",
                    },
                    arguments: [],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " The amount of collateral locked in this bond ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "totalCollateral",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BigInt",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " The amount of collateral locked in this bond at time bond matured ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "totalCollateralAtMaturity",
                    },
                    arguments: [],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " This property facilitates searching by asset, using 'tokenNames_contains' to match Bond entities on substring matches. This field has the value of collateral and tranche asset addresses and symbols concatenated. ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "tokenNames",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " This property facilitates sorting by collateral asset symbol ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "collateralSymbol",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                            },
                        },
                    },
                    directives: [],
                },
            ],
            interfaces: [],
            directives: [],
        },
        {
            kind: "InputObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "Bond_filter",
            },
            fields: [
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "creator",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "creator_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "creator_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "creator_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "creator_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "creator_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "creator_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "creator_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "creator_contains",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "creator_contains_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "creator_not_contains",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "creator_not_contains_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "creator_starts_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "creator_starts_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "creator_not_starts_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "creator_not_starts_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "creator_ends_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "creator_ends_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "creator_not_ends_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "creator_not_ends_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "depositLimit",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "depositLimit_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "depositLimit_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "depositLimit_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "depositLimit_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "depositLimit_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "depositLimit_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "depositLimit_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "owner",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "owner_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "owner_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "owner_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "owner_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "owner_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "owner_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "owner_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "owner_contains",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "owner_contains_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "owner_not_contains",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "owner_not_contains_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "owner_starts_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "owner_starts_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "owner_not_starts_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "owner_not_starts_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "owner_ends_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "owner_ends_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "owner_not_ends_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "owner_not_ends_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateral",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateral_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateral_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateral_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateral_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateral_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateral_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateral_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateral_contains",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateral_contains_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateral_not_contains",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateral_not_contains_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateral_starts_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateral_starts_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateral_not_starts_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateral_not_starts_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateral_ends_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateral_ends_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateral_not_ends_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateral_not_ends_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateral_",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Token_filter",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tranches",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tranches_not",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tranches_contains",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tranches_contains_nocase",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tranches_not_contains",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tranches_not_contains_nocase",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tranches_",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Tranche_filter",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "feeBps",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "feeBps_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "feeBps_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "feeBps_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "feeBps_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "feeBps_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "feeBps_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "feeBps_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "startDate",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "startDate_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "startDate_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "startDate_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "startDate_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "startDate_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "startDate_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "startDate_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "maturityDate",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "maturityDate_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "maturityDate_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "maturityDate_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "maturityDate_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "maturityDate_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "maturityDate_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "maturityDate_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "maturedDate",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "maturedDate_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "maturedDate_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "maturedDate_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "maturedDate_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "maturedDate_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "maturedDate_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "maturedDate_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "isMature",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Boolean",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "isMature_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Boolean",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "isMature_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "isMature_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalDebt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalDebt_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalDebt_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalDebt_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalDebt_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalDebt_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalDebt_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalDebt_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalDebtAtMaturity",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalDebtAtMaturity_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalDebtAtMaturity_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalDebtAtMaturity_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalDebtAtMaturity_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalDebtAtMaturity_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalDebtAtMaturity_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalDebtAtMaturity_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateral",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateral_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateral_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateral_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateral_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateral_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateral_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateral_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateralAtMaturity",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateralAtMaturity_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateralAtMaturity_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateralAtMaturity_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateralAtMaturity_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateralAtMaturity_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateralAtMaturity_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateralAtMaturity_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tokenNames",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tokenNames_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tokenNames_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tokenNames_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tokenNames_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tokenNames_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tokenNames_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tokenNames_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tokenNames_contains",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tokenNames_contains_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tokenNames_not_contains",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tokenNames_not_contains_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tokenNames_starts_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tokenNames_starts_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tokenNames_not_starts_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tokenNames_not_starts_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tokenNames_ends_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tokenNames_ends_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tokenNames_not_ends_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tokenNames_not_ends_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateralSymbol",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateralSymbol_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateralSymbol_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateralSymbol_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateralSymbol_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateralSymbol_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateralSymbol_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateralSymbol_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateralSymbol_contains",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateralSymbol_contains_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateralSymbol_not_contains",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateralSymbol_not_contains_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateralSymbol_starts_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateralSymbol_starts_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateralSymbol_not_starts_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateralSymbol_not_starts_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateralSymbol_ends_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateralSymbol_ends_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateralSymbol_not_ends_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateralSymbol_not_ends_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    description: {
                        kind: "StringValue",
                        value: "Filter for the block changed event.",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "_change_block",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BlockChangedFilter",
                        },
                    },
                    directives: [],
                },
            ],
            directives: [],
        },
        {
            kind: "EnumTypeDefinition",
            name: {
                kind: "Name",
                value: "Bond_orderBy",
            },
            values: [
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "creator",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "depositLimit",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "owner",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateral",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tranches",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "feeBps",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "startDate",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "maturityDate",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "maturedDate",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "isMature",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalDebt",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalDebtAtMaturity",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateral",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateralAtMaturity",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "tokenNames",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collateralSymbol",
                    },
                    directives: [],
                },
            ],
            directives: [],
        },
        {
            kind: "ScalarTypeDefinition",
            name: {
                kind: "Name",
                value: "Bytes",
            },
            directives: [],
        },
        {
            kind: "ObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "CollateralToken",
            },
            fields: [
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " Token address ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "id",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " The token entity ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "token",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Token",
                            },
                        },
                    },
                    directives: [],
                },
            ],
            interfaces: [],
            directives: [],
        },
        {
            kind: "InputObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "CollateralToken_filter",
            },
            fields: [
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_contains",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_contains_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_not_contains",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_not_contains_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_starts_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_starts_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_not_starts_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_not_starts_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_ends_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_ends_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_not_ends_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_not_ends_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Token_filter",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    description: {
                        kind: "StringValue",
                        value: "Filter for the block changed event.",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "_change_block",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BlockChangedFilter",
                        },
                    },
                    directives: [],
                },
            ],
            directives: [],
        },
        {
            kind: "EnumTypeDefinition",
            name: {
                kind: "Name",
                value: "CollateralToken_orderBy",
            },
            values: [
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token",
                    },
                    directives: [],
                },
            ],
            directives: [],
        },
        {
            kind: "ObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "Factory",
            },
            fields: [
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " factory contract address ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "id",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " number of bonds created ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "bondCount",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BigInt",
                            },
                        },
                    },
                    directives: [],
                },
            ],
            interfaces: [],
            directives: [],
        },
        {
            kind: "InputObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "Factory_filter",
            },
            fields: [
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bondCount",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bondCount_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bondCount_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bondCount_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bondCount_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bondCount_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bondCount_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bondCount_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    description: {
                        kind: "StringValue",
                        value: "Filter for the block changed event.",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "_change_block",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BlockChangedFilter",
                        },
                    },
                    directives: [],
                },
            ],
            directives: [],
        },
        {
            kind: "EnumTypeDefinition",
            name: {
                kind: "Name",
                value: "Factory_orderBy",
            },
            values: [
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bondCount",
                    },
                    directives: [],
                },
            ],
            directives: [],
        },
        {
            kind: "EnumTypeDefinition",
            description: {
                kind: "StringValue",
                value: "Defines the order direction, either ascending or descending",
                block: true,
            },
            name: {
                kind: "Name",
                value: "OrderDirection",
            },
            values: [
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "asc",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "desc",
                    },
                    directives: [],
                },
            ],
            directives: [],
        },
        {
            kind: "ObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "Query",
            },
            fields: [
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "factory",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                    },
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "block",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Block_height",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "subgraphError",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "_SubgraphErrorPolicy_",
                                    },
                                },
                            },
                            defaultValue: {
                                kind: "EnumValue",
                                value: "deny",
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Factory",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "factories",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "skip",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "0",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "first",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "100",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderBy",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Factory_orderBy",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderDirection",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "OrderDirection",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "where",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Factory_filter",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "block",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Block_height",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "subgraphError",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "_SubgraphErrorPolicy_",
                                    },
                                },
                            },
                            defaultValue: {
                                kind: "EnumValue",
                                value: "deny",
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Factory",
                                    },
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "token",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                    },
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "block",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Block_height",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "subgraphError",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "_SubgraphErrorPolicy_",
                                    },
                                },
                            },
                            defaultValue: {
                                kind: "EnumValue",
                                value: "deny",
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Token",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "tokens",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "skip",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "0",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "first",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "100",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderBy",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Token_orderBy",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderDirection",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "OrderDirection",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "where",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Token_filter",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "block",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Block_height",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "subgraphError",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "_SubgraphErrorPolicy_",
                                    },
                                },
                            },
                            defaultValue: {
                                kind: "EnumValue",
                                value: "deny",
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Token",
                                    },
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "tranche",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                    },
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "block",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Block_height",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "subgraphError",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "_SubgraphErrorPolicy_",
                                    },
                                },
                            },
                            defaultValue: {
                                kind: "EnumValue",
                                value: "deny",
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Tranche",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "tranches",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "skip",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "0",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "first",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "100",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderBy",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Tranche_orderBy",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderDirection",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "OrderDirection",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "where",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Tranche_filter",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "block",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Block_height",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "subgraphError",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "_SubgraphErrorPolicy_",
                                    },
                                },
                            },
                            defaultValue: {
                                kind: "EnumValue",
                                value: "deny",
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Tranche",
                                    },
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "bond",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                    },
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "block",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Block_height",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "subgraphError",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "_SubgraphErrorPolicy_",
                                    },
                                },
                            },
                            defaultValue: {
                                kind: "EnumValue",
                                value: "deny",
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Bond",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "bonds",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "skip",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "0",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "first",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "100",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderBy",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Bond_orderBy",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderDirection",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "OrderDirection",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "where",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Bond_filter",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "block",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Block_height",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "subgraphError",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "_SubgraphErrorPolicy_",
                                    },
                                },
                            },
                            defaultValue: {
                                kind: "EnumValue",
                                value: "deny",
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Bond",
                                    },
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "account",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                    },
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "block",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Block_height",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "subgraphError",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "_SubgraphErrorPolicy_",
                                    },
                                },
                            },
                            defaultValue: {
                                kind: "EnumValue",
                                value: "deny",
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Account",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "accounts",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "skip",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "0",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "first",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "100",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderBy",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Account_orderBy",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderDirection",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "OrderDirection",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "where",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Account_filter",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "block",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Block_height",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "subgraphError",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "_SubgraphErrorPolicy_",
                                    },
                                },
                            },
                            defaultValue: {
                                kind: "EnumValue",
                                value: "deny",
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Account",
                                    },
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "accountBalance",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                    },
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "block",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Block_height",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "subgraphError",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "_SubgraphErrorPolicy_",
                                    },
                                },
                            },
                            defaultValue: {
                                kind: "EnumValue",
                                value: "deny",
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "AccountBalance",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "accountBalances",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "skip",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "0",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "first",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "100",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderBy",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "AccountBalance_orderBy",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderDirection",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "OrderDirection",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "where",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "AccountBalance_filter",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "block",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Block_height",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "subgraphError",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "_SubgraphErrorPolicy_",
                                    },
                                },
                            },
                            defaultValue: {
                                kind: "EnumValue",
                                value: "deny",
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "AccountBalance",
                                    },
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "collateralToken",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                    },
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "block",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Block_height",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "subgraphError",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "_SubgraphErrorPolicy_",
                                    },
                                },
                            },
                            defaultValue: {
                                kind: "EnumValue",
                                value: "deny",
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "CollateralToken",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "collateralTokens",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "skip",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "0",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "first",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "100",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderBy",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "CollateralToken_orderBy",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderDirection",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "OrderDirection",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "where",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "CollateralToken_filter",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "block",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Block_height",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "subgraphError",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "_SubgraphErrorPolicy_",
                                    },
                                },
                            },
                            defaultValue: {
                                kind: "EnumValue",
                                value: "deny",
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "CollateralToken",
                                    },
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: "Access to subgraph metadata",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "_meta",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "block",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Block_height",
                                },
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "_Meta_",
                        },
                    },
                    directives: [],
                },
            ],
            interfaces: [],
            directives: [],
        },
        {
            kind: "ObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "Subscription",
            },
            fields: [
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "factory",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                    },
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "block",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Block_height",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "subgraphError",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "_SubgraphErrorPolicy_",
                                    },
                                },
                            },
                            defaultValue: {
                                kind: "EnumValue",
                                value: "deny",
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Factory",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "factories",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "skip",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "0",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "first",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "100",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderBy",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Factory_orderBy",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderDirection",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "OrderDirection",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "where",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Factory_filter",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "block",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Block_height",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "subgraphError",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "_SubgraphErrorPolicy_",
                                    },
                                },
                            },
                            defaultValue: {
                                kind: "EnumValue",
                                value: "deny",
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Factory",
                                    },
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "token",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                    },
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "block",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Block_height",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "subgraphError",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "_SubgraphErrorPolicy_",
                                    },
                                },
                            },
                            defaultValue: {
                                kind: "EnumValue",
                                value: "deny",
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Token",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "tokens",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "skip",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "0",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "first",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "100",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderBy",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Token_orderBy",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderDirection",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "OrderDirection",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "where",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Token_filter",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "block",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Block_height",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "subgraphError",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "_SubgraphErrorPolicy_",
                                    },
                                },
                            },
                            defaultValue: {
                                kind: "EnumValue",
                                value: "deny",
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Token",
                                    },
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "tranche",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                    },
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "block",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Block_height",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "subgraphError",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "_SubgraphErrorPolicy_",
                                    },
                                },
                            },
                            defaultValue: {
                                kind: "EnumValue",
                                value: "deny",
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Tranche",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "tranches",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "skip",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "0",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "first",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "100",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderBy",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Tranche_orderBy",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderDirection",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "OrderDirection",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "where",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Tranche_filter",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "block",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Block_height",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "subgraphError",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "_SubgraphErrorPolicy_",
                                    },
                                },
                            },
                            defaultValue: {
                                kind: "EnumValue",
                                value: "deny",
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Tranche",
                                    },
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "bond",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                    },
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "block",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Block_height",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "subgraphError",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "_SubgraphErrorPolicy_",
                                    },
                                },
                            },
                            defaultValue: {
                                kind: "EnumValue",
                                value: "deny",
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Bond",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "bonds",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "skip",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "0",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "first",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "100",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderBy",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Bond_orderBy",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderDirection",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "OrderDirection",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "where",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Bond_filter",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "block",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Block_height",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "subgraphError",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "_SubgraphErrorPolicy_",
                                    },
                                },
                            },
                            defaultValue: {
                                kind: "EnumValue",
                                value: "deny",
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Bond",
                                    },
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "account",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                    },
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "block",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Block_height",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "subgraphError",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "_SubgraphErrorPolicy_",
                                    },
                                },
                            },
                            defaultValue: {
                                kind: "EnumValue",
                                value: "deny",
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Account",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "accounts",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "skip",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "0",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "first",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "100",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderBy",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Account_orderBy",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderDirection",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "OrderDirection",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "where",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Account_filter",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "block",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Block_height",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "subgraphError",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "_SubgraphErrorPolicy_",
                                    },
                                },
                            },
                            defaultValue: {
                                kind: "EnumValue",
                                value: "deny",
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Account",
                                    },
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "accountBalance",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                    },
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "block",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Block_height",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "subgraphError",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "_SubgraphErrorPolicy_",
                                    },
                                },
                            },
                            defaultValue: {
                                kind: "EnumValue",
                                value: "deny",
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "AccountBalance",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "accountBalances",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "skip",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "0",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "first",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "100",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderBy",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "AccountBalance_orderBy",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderDirection",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "OrderDirection",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "where",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "AccountBalance_filter",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "block",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Block_height",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "subgraphError",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "_SubgraphErrorPolicy_",
                                    },
                                },
                            },
                            defaultValue: {
                                kind: "EnumValue",
                                value: "deny",
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "AccountBalance",
                                    },
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "collateralToken",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                    },
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "block",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Block_height",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "subgraphError",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "_SubgraphErrorPolicy_",
                                    },
                                },
                            },
                            defaultValue: {
                                kind: "EnumValue",
                                value: "deny",
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "CollateralToken",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "collateralTokens",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "skip",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "0",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "first",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "100",
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderBy",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "CollateralToken_orderBy",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "orderDirection",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "OrderDirection",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "where",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "CollateralToken_filter",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "block",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Block_height",
                                },
                            },
                            directives: [],
                        },
                        {
                            kind: "InputValueDefinition",
                            description: {
                                kind: "StringValue",
                                value: "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                block: true,
                            },
                            name: {
                                kind: "Name",
                                value: "subgraphError",
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "_SubgraphErrorPolicy_",
                                    },
                                },
                            },
                            defaultValue: {
                                kind: "EnumValue",
                                value: "deny",
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "CollateralToken",
                                    },
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: "Access to subgraph metadata",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "_meta",
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "block",
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Block_height",
                                },
                            },
                            directives: [],
                        },
                    ],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "_Meta_",
                        },
                    },
                    directives: [],
                },
            ],
            interfaces: [],
            directives: [],
        },
        {
            kind: "ObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "Token",
            },
            fields: [
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " token address ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "id",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " token symbol ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "symbol",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " token name ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "name",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " token decimals ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "decimals",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BigInt",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " token total supply ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "totalSupply",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BigInt",
                            },
                        },
                    },
                    directives: [],
                },
            ],
            interfaces: [],
            directives: [],
        },
        {
            kind: "InputObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "Token_filter",
            },
            fields: [
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "symbol",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "symbol_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "symbol_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "symbol_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "symbol_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "symbol_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "symbol_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "symbol_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "symbol_contains",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "symbol_contains_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "symbol_not_contains",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "symbol_not_contains_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "symbol_starts_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "symbol_starts_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "symbol_not_starts_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "symbol_not_starts_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "symbol_ends_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "symbol_ends_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "symbol_not_ends_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "symbol_not_ends_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "name",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "name_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "name_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "name_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "name_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "name_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "name_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "name_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "name_contains",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "name_contains_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "name_not_contains",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "name_not_contains_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "name_starts_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "name_starts_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "name_not_starts_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "name_not_starts_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "name_ends_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "name_ends_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "name_not_ends_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "name_not_ends_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "decimals",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "decimals_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "decimals_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "decimals_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "decimals_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "decimals_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "decimals_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "decimals_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalSupply",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalSupply_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalSupply_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalSupply_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalSupply_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalSupply_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalSupply_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalSupply_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    description: {
                        kind: "StringValue",
                        value: "Filter for the block changed event.",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "_change_block",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BlockChangedFilter",
                        },
                    },
                    directives: [],
                },
            ],
            directives: [],
        },
        {
            kind: "EnumTypeDefinition",
            name: {
                kind: "Name",
                value: "Token_orderBy",
            },
            values: [
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "symbol",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "name",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "decimals",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalSupply",
                    },
                    directives: [],
                },
            ],
            directives: [],
        },
        {
            kind: "ObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "Tranche",
            },
            fields: [
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " tranche token address ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "id",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " reference to the bond in which this tranche belongs ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "bond",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Bond",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " reference to the tranche token contract ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "token",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Token",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " ratio of this tranche, all tranche ratios sum to 1000 ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "ratio",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BigInt",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " index of this tranche, i.e. A-tranche is 0, B is 1 and so on ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "index",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BigInt",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " The amount of collateral in this tranche for redemption ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "totalCollateral",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BigInt",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " The amount of collateral in this tranche for redemption at time bond matured ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "totalCollateralAtMaturity",
                    },
                    arguments: [],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: " token total supply at time bond matured ",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "totalSupplyAtMaturity",
                    },
                    arguments: [],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
            ],
            interfaces: [],
            directives: [],
        },
        {
            kind: "InputObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "Tranche_filter",
            },
            fields: [
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bond",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bond_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bond_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bond_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bond_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bond_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bond_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bond_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bond_contains",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bond_contains_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bond_not_contains",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bond_not_contains_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bond_starts_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bond_starts_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bond_not_starts_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bond_not_starts_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bond_ends_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bond_ends_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bond_not_ends_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bond_not_ends_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bond_",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Bond_filter",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_contains",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_contains_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_not_contains",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_not_contains_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_starts_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_starts_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_not_starts_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_not_starts_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_ends_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_ends_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_not_ends_with",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_not_ends_with_nocase",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token_",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Token_filter",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "ratio",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "ratio_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "ratio_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "ratio_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "ratio_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "ratio_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "ratio_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "ratio_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "index",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "index_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "index_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "index_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "index_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "index_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "index_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "index_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateral",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateral_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateral_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateral_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateral_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateral_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateral_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateral_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateralAtMaturity",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateralAtMaturity_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateralAtMaturity_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateralAtMaturity_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateralAtMaturity_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateralAtMaturity_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateralAtMaturity_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateralAtMaturity_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalSupplyAtMaturity",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalSupplyAtMaturity_not",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalSupplyAtMaturity_gt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalSupplyAtMaturity_lt",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalSupplyAtMaturity_gte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalSupplyAtMaturity_lte",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BigInt",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalSupplyAtMaturity_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalSupplyAtMaturity_not_in",
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BigInt",
                                },
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "InputValueDefinition",
                    description: {
                        kind: "StringValue",
                        value: "Filter for the block changed event.",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "_change_block",
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BlockChangedFilter",
                        },
                    },
                    directives: [],
                },
            ],
            directives: [],
        },
        {
            kind: "EnumTypeDefinition",
            name: {
                kind: "Name",
                value: "Tranche_orderBy",
            },
            values: [
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "id",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "bond",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "token",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "ratio",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "index",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateral",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalCollateralAtMaturity",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "totalSupplyAtMaturity",
                    },
                    directives: [],
                },
            ],
            directives: [],
        },
        {
            kind: "ObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "_Block_",
            },
            fields: [
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: "The hash of the block",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "hash",
                    },
                    arguments: [],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Bytes",
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: "The block number",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "number",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Int",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: "Integer representation of the timestamp stored in blocks for the chain",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "timestamp",
                    },
                    arguments: [],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Int",
                        },
                    },
                    directives: [],
                },
            ],
            interfaces: [],
            directives: [],
        },
        {
            kind: "ObjectTypeDefinition",
            description: {
                kind: "StringValue",
                value: "The type for the top-level _meta field",
                block: true,
            },
            name: {
                kind: "Name",
                value: "_Meta_",
            },
            fields: [
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: "Information about a specific subgraph block. The hash of the block\nwill be null if the _meta field has a block constraint that asks for\na block number. It will be filled if the _meta field has no block constraint\nand therefore asks for the latest  block\n",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "block",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "_Block_",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: "The deployment ID",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "deployment",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                            },
                        },
                    },
                    directives: [],
                },
                {
                    kind: "FieldDefinition",
                    description: {
                        kind: "StringValue",
                        value: "If `true`, the subgraph encountered indexing errors at some past block",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "hasIndexingErrors",
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean",
                            },
                        },
                    },
                    directives: [],
                },
            ],
            interfaces: [],
            directives: [],
        },
        {
            kind: "EnumTypeDefinition",
            name: {
                kind: "Name",
                value: "_SubgraphErrorPolicy_",
            },
            values: [
                {
                    kind: "EnumValueDefinition",
                    description: {
                        kind: "StringValue",
                        value: "Data will be returned even if the subgraph has indexing errors",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "allow",
                    },
                    directives: [],
                },
                {
                    kind: "EnumValueDefinition",
                    description: {
                        kind: "StringValue",
                        value: "If the subgraph has indexing errors, data will be omitted. The default.",
                        block: true,
                    },
                    name: {
                        kind: "Name",
                        value: "deny",
                    },
                    directives: [],
                },
            ],
            directives: [],
        },
    ],
}

export default buildASTSchema(schemaAST, {
    assumeValid: true,
    assumeValidSDL: true,
})
