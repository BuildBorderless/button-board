import { ResponsiveTreeMap } from "@nivo/treemap"
import { dateToString } from "../../helpers"
import { Bond } from "../../types"

export const BondsTreeMap = ({ bonds }: { bonds: Bond[] }) => {
    const raw: any = {}
    bonds.forEach((b) => {
        if (b.isMature) return
        if (b.totalCollateral === 0 && b.totalDebt === 0) return

        if (!(b.collateral.id in raw)) {
            raw[b.collateral.id] = {
                collateral: b.collateral,
                bonds: [],
            }
        }

        raw[b.collateral.id].bonds.push(b)
    })

    const data = {
        name: "Button Bonds Collateral to Debt Ratios",
        children: Object.keys(raw).map((k) => {
            return {
                id: raw[k].collateral.id,
                name: raw[k].collateral.symbol,
                children: raw[k].bonds.map((b: Bond) => {
                    return {
                        id: b.id,
                        // +{id} suffix required to avoid duplicate key error
                        name: `${raw[k].collateral.symbol} (Maturity:
                            ${dateToString(b.maturityDate)})+${b.id}`,
                        cdr: b.totalCollateral / b.totalDebt,
                    }
                }),
            }
        }),
    }

    return (
        <div className="App-chart-responsive">
            <ResponsiveTreeMap
                data={data}
                identity="name"
                value="cdr"
                valueFormat=" >-.2%"
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                tooltip={({ node }) => <>{node.data.name.split("+")[0]}</>}
                labelSkipSize={12}
                labelTextColor={{
                    from: "color",
                    modifiers: [["darker", 1.2]],
                }}
                parentLabelPosition="left"
                parentLabelTextColor={{
                    from: "color",
                    modifiers: [["darker", 2]],
                }}
                borderColor={{
                    from: "color",
                    modifiers: [["darker", 0.1]],
                }}
            />
        </div>
    )
}
