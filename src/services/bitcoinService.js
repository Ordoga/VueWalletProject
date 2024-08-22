import axios from "axios"

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
}

async function getRate() {
    const currRate = await axios.get(
        "https://blockchain.info/tobtc?currency=USD&value=1"
    )
}

function getMarketPriceHistory() {}

function getAvgBlockSize() {}
