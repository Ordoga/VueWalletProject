import axios from "axios"

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
    getMarketPriceHistorySync,
}

async function getRate() {
    const { data: currRate } = await axios.get(
        "https://blockchain.info/tobtc?currency=USD&value=1"
    )
    return currRate
}

const marketPriceHistory = {
    status: "ok",
    name: "Market Price (USD)",
    unit: "USD",
    period: "day",
    description: "Average USD market price across major bitcoin exchanges.",
    values: [
        {
            x: 1721865600,
            y: 65357.71,
        },
        {
            x: 1721952000,
            y: 65790.91,
        },
        {
            x: 1722038400,
            y: 67914.86,
        },
        {
            x: 1722124800,
            y: 67826.14,
        },
        {
            x: 1722211200,
            y: 68257.42,
        },
        {
            x: 1722297600,
            y: 66777.36,
        },
        {
            x: 1722384000,
            y: 66180,
        },
        {
            x: 1722470400,
            y: 64621.73,
        },
        {
            x: 1722556800,
            y: 65297.77,
        },
        {
            x: 1722643200,
            y: 61410.11,
        },
        {
            x: 1722729600,
            y: 60676.68,
        },
        {
            x: 1722816000,
            y: 58116.46,
        },
        {
            x: 1722902400,
            y: 53978.78,
        },
        {
            x: 1722988800,
            y: 56082.71,
        },
        {
            x: 1723075200,
            y: 55033.47,
        },
        {
            x: 1723161600,
            y: 61698.9,
        },
        {
            x: 1723248000,
            y: 60879.41,
        },
        {
            x: 1723334400,
            y: 60943.19,
        },
        {
            x: 1723420800,
            y: 58717,
        },
        {
            x: 1723507200,
            y: 59350.07,
        },
        {
            x: 1723593600,
            y: 60600.35,
        },
        {
            x: 1723680000,
            y: 58727.43,
        },
        {
            x: 1723766400,
            y: 57523.47,
        },
        {
            x: 1723852800,
            y: 58886.74,
        },
        {
            x: 1723939200,
            y: 59483.03,
        },
        {
            x: 1724025600,
            y: 58445.98,
        },
        {
            x: 1724112000,
            y: 59475.91,
        },
        {
            x: 1724198400,
            y: 59024.54,
        },
        {
            x: 1724284800,
            y: 61170.43,
        },
        {
            x: 1724371200,
            y: 60382.01,
        },
        {
            x: 1724457600,
            y: 64082.05,
        },
    ],
}

async function getMarketPriceHistory() {
    return Promise.resolve(marketPriceHistory)
}

function getMarketPriceHistorySync() {
    return marketPriceHistory
}

async function getAvgBlockSize() {}
