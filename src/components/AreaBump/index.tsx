import { ResponsiveAreaBump } from "@nivo/bump"
import { dateToString } from "../../helpers"
import { BondsAtTimestamp } from "../../types"

export const BondsAreaBump = ({
    bondsAtTimestamp,
}: {
    bondsAtTimestamp: BondsAtTimestamp
}) => {
    const timestamps = Object.keys(bondsAtTimestamp)
        .map((t) => parseInt(t))
        .sort()
    const lastTimestamp = timestamps[timestamps.length - 1]

    const data: any[] = bondsAtTimestamp[lastTimestamp].map((bond) => {
        return {
            id: bond.id,
            name: bond.collateral.symbol,
            startDateString: dateToString(bond.startDate),
            maturityDateString: dateToString(bond.maturityDate),
            data: timestamps.map((t) => {
                return {
                    x: dateToString(new Date(t)),
                    y:
                        bondsAtTimestamp[t].find((b) => b.id === bond.id)
                            ?.totalCollateral ?? 0,
                }
            }),
        }
    })

    return (
        <div className="App-chart-responsive">
            <ResponsiveAreaBump
                data={data}
                startLabel={(s) => s.name}
                endLabel={(s) => s.maturityDateString}
                tooltip={(s) => (
                    <>
                        {s.serie.data.name}
                        <br />
                        Start: {s.serie.data.startDateString}
                        <br />
                        Mature: {s.serie.data.maturityDateString}
                    </>
                )}
                margin={{ top: 40, right: 100, bottom: 80, left: 100 }}
                spacing={8}
                colors={{ scheme: "nivo" }}
                blendMode="multiply"
                defs={[
                    {
                        id: "dots",
                        type: "patternDots",
                        background: "inherit",
                        color: "#38bcb2",
                        size: 4,
                        padding: 1,
                        stagger: true,
                    },
                    {
                        id: "lines",
                        type: "patternLines",
                        background: "inherit",
                        color: "#eed312",
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10,
                    },
                ]}
                axisTop={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 90,
                    legend: "Date",
                    legendPosition: "middle",
                    legendOffset: 32,
                }}
            />
        </div>
    )
}
