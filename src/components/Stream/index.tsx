import { ResponsiveStream } from "@nivo/stream"
import { BondsAtTimestamp } from "../../types"

export const TotalValueLockedStream = ({
    bondsAtTimestamp,
}: {
    bondsAtTimestamp: BondsAtTimestamp
}) => {
    const timestamps = Object.keys(bondsAtTimestamp)
        .map((t) => parseInt(t))
        .sort()

    const data: any[] = timestamps.map((t) => {
        const tvl = bondsAtTimestamp[t]
            .map((bond) => bond.totalCollateral ?? 0)
            .reduce((total, num) => total + num, 0)
        return { TVL: tvl }
    })

    console.log(data)

    return (
        <div className="App-chart-responsive">
            <ResponsiveStream
                data={data}
                keys={["TVL"]}
                valueFormat=" >-r"
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "",
                    legendOffset: 36,
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "",
                    legendOffset: -40,
                }}
                enableGridX={true}
                enableGridY={false}
                offsetType="silhouette"
                colors={{ scheme: "nivo" }}
                fillOpacity={0.85}
                borderColor={{ theme: "background" }}
                defs={[
                    {
                        id: "dots",
                        type: "patternDots",
                        background: "inherit",
                        color: "#2c998f",
                        size: 4,
                        padding: 2,
                        stagger: true,
                    },
                    {
                        id: "squares",
                        type: "patternSquares",
                        background: "inherit",
                        color: "#e4c912",
                        size: 6,
                        padding: 2,
                        stagger: true,
                    },
                ]}
                dotSize={8}
                dotColor={{ from: "color" }}
                dotBorderWidth={2}
                dotBorderColor={{
                    from: "color",
                    modifiers: [["darker", 0.7]],
                }}
                legends={[
                    {
                        anchor: "bottom-right",
                        direction: "column",
                        translateX: 100,
                        itemWidth: 80,
                        itemHeight: 20,
                        itemTextColor: "#999999",
                        symbolSize: 12,
                        symbolShape: "circle",
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemTextColor: "#000000",
                                },
                            },
                        ],
                    },
                ]}
            />
        </div>
    )
}
