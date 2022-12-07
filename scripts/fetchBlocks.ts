import axios from "axios"

const sleep = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

enum Interval {
    day="day",
    month="month",
    year="year",
}
    
const getTimestamps = (args: {interval: Interval, start: Date, end?: Date}) => {
    let date = args.start
    const end = args.end ?? new Date()
    let increase

    switch(args.interval) {
        case Interval.day:
            increase = (date: Date) => date.setDate(date.getDate() + 1)
            break
        case Interval.month:
            increase = (date: Date) => date.setMonth(date.getMonth() + 1)
            break
        case Interval.year:
            increase = (date: Date) => date.setFullYear(date.getFullYear() + 1)
            break
    }

    const timestamps: number[] = []
    while (date <= end) {
        timestamps.push(date.valueOf())
        increase(date)
    }
    
    return timestamps
}

type Block = {
    height: number,
    timestamp: number,
}

const main = async () => {
    const timestamps = getTimestamps({interval: Interval.month, start: new Date(2021, 12)})
    const blocks: Block[] = []

    for (let t of timestamps) {
        // https://ethereum.stackexchange.com/questions/49486/how-to-get-the-block-number-which-is-the-closest-to-a-given-timestamp
        const r = await axios.get(`https://coins.llama.fi/block/ethereum/${t/1000}`)
        blocks.push(r.data)
        await sleep(1000)
    }
    console.log(blocks)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })