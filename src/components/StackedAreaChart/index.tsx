import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts"
import { dateToString, formatNumber } from "../../helpers"
import { BondsAtTimestamp } from "../../types"

const colors = [
    "#237130",
    "#2a4a51",
    "#302371",
    "#6a2f5a",
    "#a43a43",
    "#3aa49b",
    "#9b3aa4",
    "#a49b3a",
]

export const CollateralAreaChart = ({
    bondsAtTimestamp,
}: {
    bondsAtTimestamp: BondsAtTimestamp
}) => {
    const timestamps = Object.keys(bondsAtTimestamp)
        .map((t) => parseInt(t))
        .sort()
    const lastTimestamp = timestamps[timestamps.length - 1]

    const tokenValueBase: { [key: string]: number } = {}
    bondsAtTimestamp[lastTimestamp].forEach((b) => {
        tokenValueBase[b.collateral.symbol] = 0
    })

    const data: any[] = timestamps.map((t) => {
        const tokenValues = { ...tokenValueBase }
        bondsAtTimestamp[t].forEach((b) => {
            tokenValues[b.collateral.symbol] += b.totalCollateral
        })
        return {
            date: dateToString(new Date(t)),
            ...tokenValues,
        }
    })

    return (
        <div className="App-chart-responsive">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    margin={{
                        top: 30,
                        right: 30,
                        left: 80,
                        bottom: 30,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" interval={2} />
                    <YAxis />
                    <Tooltip formatter={(v: any) => formatNumber(v)} />
                    {Object.keys(tokenValueBase).map((token, index) => (
                        <Area
                            type="monotone"
                            dataKey={token}
                            stackId={index}
                            stroke={colors[index % colors.length]}
                            fill={colors[index % colors.length]}
                            key={token + index}
                        />
                    ))}
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
