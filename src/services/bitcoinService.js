import axios from "axios"

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
    getTransactionRate,
}

async function getRate() {
    const { data: currRate } = await axios.get(
        "https://blockchain.info/tobtc?currency=USD&value=1"
    )
    return currRate
}

async function getMarketPriceHistory() {
    return Promise.resolve(marketPriceHistory)
}

async function getAvgBlockSize() {
    return Promise.resolve(avgBlockSize)
}

async function getTransactionRate() {
    return Promise.resolve(transactionsRate)
}

const avgBlockSize = {
    status: "ok",
    name: "Average Block Size",
    unit: "MB",
    period: "day",
    description: "The average block size in MB.",
    values: [
        {
            x: 1721865600,
            y: 1.5924451963190178,
        },
        {
            x: 1721952000,
            y: 1.7724345937500001,
        },
        {
            x: 1722038400,
            y: 1.7683435324675314,
        },
        {
            x: 1722124800,
            y: 1.628477418918919,
        },
        {
            x: 1722211200,
            y: 1.62134443258427,
        },
        {
            x: 1722297600,
            y: 1.7270328400000001,
        },
        {
            x: 1722384000,
            y: 1.6711334255319155,
        },
        {
            x: 1722470400,
            y: 1.647649085714286,
        },
        {
            x: 1722556800,
            y: 1.623253176,
        },
        {
            x: 1722643200,
            y: 1.6300105629629633,
        },
        {
            x: 1722729600,
            y: 1.5864102167832166,
        },
        {
            x: 1722816000,
            y: 1.6355677692307693,
        },
        {
            x: 1722902400,
            y: 1.6217257785714287,
        },
        {
            x: 1722988800,
            y: 1.6427921721311478,
        },
        {
            x: 1723075200,
            y: 1.585968031007752,
        },
        {
            x: 1723161600,
            y: 1.8428254230769232,
        },
        {
            x: 1723248000,
            y: 1.6057187596899232,
        },
        {
            x: 1723334400,
            y: 1.5411615900621116,
        },
        {
            x: 1723420800,
            y: 1.6727004306569342,
        },
        {
            x: 1723507200,
            y: 1.6035235436241613,
        },
        {
            x: 1723593600,
            y: 1.626691075757575,
        },
        {
            x: 1723680000,
            y: 1.571723850000001,
        },
        {
            x: 1723766400,
            y: 1.61170576056338,
        },
        {
            x: 1723852800,
            y: 1.565858899328859,
        },
        {
            x: 1723939200,
            y: 1.6788531410256415,
        },
        {
            x: 1724025600,
            y: 1.6723899615384612,
        },
        {
            x: 1724112000,
            y: 1.6206142000000001,
        },
        {
            x: 1724198400,
            y: 1.6009967414965989,
        },
        {
            x: 1724284800,
            y: 1.5881395374999996,
        },
        {
            x: 1724371200,
            y: 1.641721115853659,
        },
    ],
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

const transactionsRate = {
    status: "ok",
    name: "Transaction Rate",
    unit: "Transactions Per Second",
    period: "minute",
    description:
        "The number of Bitcoin transactions added to the mempool per second.",
    values: [
        {
            x: 1721922300,
            y: 3.6333333333333333,
        },
        {
            x: 1721924100,
            y: 3.8333333333333335,
        },
        {
            x: 1721925900,
            y: 3.1666666666666665,
        },
        {
            x: 1721927700,
            y: 3.0833333333333335,
        },
        {
            x: 1721929500,
            y: 3.8333333333333335,
        },
        {
            x: 1721931300,
            y: 2.783333333333333,
        },
        {
            x: 1721933100,
            y: 2.6333333333333333,
        },
        {
            x: 1721934900,
            y: 3.7333333333333334,
        },
        {
            x: 1721936700,
            y: 3.65,
        },
        {
            x: 1721938500,
            y: 10.383333333333333,
        },
        {
            x: 1721940300,
            y: 2.966666666666667,
        },
        {
            x: 1721942100,
            y: 4.133333333333334,
        },
        {
            x: 1721943900,
            y: 3.216666666666667,
        },
        {
            x: 1721945700,
            y: 18.533333333333335,
        },
        {
            x: 1721947500,
            y: 9.65,
        },
        {
            x: 1721949300,
            y: 9.766666666666667,
        },
        {
            x: 1721951100,
            y: 17.283333333333335,
        },
        {
            x: 1721952900,
            y: 1.9666666666666666,
        },
        {
            x: 1721954700,
            y: 4.4,
        },
        {
            x: 1721956500,
            y: 13.883333333333333,
        },
        {
            x: 1721958300,
            y: 4.433333333333334,
        },
        {
            x: 1721960100,
            y: 2.7666666666666666,
        },
        {
            x: 1721961900,
            y: 2.6333333333333333,
        },
        {
            x: 1721963700,
            y: 2.7,
        },
        {
            x: 1721965500,
            y: 3.466666666666667,
        },
        {
            x: 1721967300,
            y: 2.966666666666667,
        },
        {
            x: 1721969100,
            y: 2.3666666666666667,
        },
        {
            x: 1721970900,
            y: 13.25,
        },
        {
            x: 1721972700,
            y: 21.55,
        },
        {
            x: 1721974500,
            y: 3.183333333333333,
        },
        {
            x: 1721976300,
            y: 4.366666666666666,
        },
        {
            x: 1721978100,
            y: 4.666666666666667,
        },
        {
            x: 1721979900,
            y: 3.8833333333333333,
        },
        {
            x: 1721981700,
            y: 4.433333333333334,
        },
        {
            x: 1721983500,
            y: 3.533333333333333,
        },
        {
            x: 1721985300,
            y: 4,
        },
        {
            x: 1721987100,
            y: 3.2666666666666666,
        },
        {
            x: 1721988900,
            y: 2.683333333333333,
        },
        {
            x: 1721990700,
            y: 3.1,
        },
        {
            x: 1721992500,
            y: 2.7666666666666666,
        },
        {
            x: 1721994300,
            y: 3.283333333333333,
        },
        {
            x: 1721996100,
            y: 4.133333333333334,
        },
        {
            x: 1721997900,
            y: 3,
        },
        {
            x: 1721999700,
            y: 4,
        },
        {
            x: 1722001500,
            y: 4.05,
        },
        {
            x: 1722003300,
            y: 3.6333333333333333,
        },
        {
            x: 1722005100,
            y: 3.8833333333333333,
        },
        {
            x: 1722006900,
            y: 4.6,
        },
        {
            x: 1722008700,
            y: 4.05,
        },
        {
            x: 1722010500,
            y: 3.5,
        },
        {
            x: 1722012300,
            y: 4.05,
        },
        {
            x: 1722014100,
            y: 3.65,
        },
        {
            x: 1722015900,
            y: 3.2,
        },
        {
            x: 1722017700,
            y: 3.533333333333333,
        },
        {
            x: 1722019500,
            y: 3.25,
        },
        {
            x: 1722021300,
            y: 3.1666666666666665,
        },
        {
            x: 1722023100,
            y: 4.216666666666667,
        },
        {
            x: 1722024900,
            y: 2.716666666666667,
        },
        {
            x: 1722026700,
            y: 5.816666666666666,
        },
        {
            x: 1722028500,
            y: 3.316666666666667,
        },
        {
            x: 1722030300,
            y: 23.016666666666666,
        },
        {
            x: 1722032100,
            y: 19.15,
        },
        {
            x: 1722033900,
            y: 2.566666666666667,
        },
        {
            x: 1722035700,
            y: 2.2666666666666666,
        },
        {
            x: 1722037500,
            y: 1.95,
        },
        {
            x: 1722039300,
            y: 2.4833333333333334,
        },
        {
            x: 1722041100,
            y: 2.9833333333333334,
        },
        {
            x: 1722042900,
            y: 2.316666666666667,
        },
        {
            x: 1722044700,
            y: 1.9666666666666666,
        },
        {
            x: 1722046500,
            y: 4.216666666666667,
        },
        {
            x: 1722048300,
            y: 6.216666666666667,
        },
        {
            x: 1722050100,
            y: 5.583333333333333,
        },
        {
            x: 1722051900,
            y: 4.733333333333333,
        },
        {
            x: 1722053700,
            y: 2.1666666666666665,
        },
        {
            x: 1722055500,
            y: 3.316666666666667,
        },
        {
            x: 1722057300,
            y: 3.3666666666666667,
        },
        {
            x: 1722059100,
            y: 3.8333333333333335,
        },
        {
            x: 1722060900,
            y: 4.983333333333333,
        },
        {
            x: 1722062700,
            y: 3.0833333333333335,
        },
        {
            x: 1722064500,
            y: 2.966666666666667,
        },
        {
            x: 1722066300,
            y: 4.216666666666667,
        },
        {
            x: 1722068100,
            y: 4.016666666666667,
        },
        {
            x: 1722069900,
            y: 2.9,
        },
        {
            x: 1722071700,
            y: 4.466666666666667,
        },
        {
            x: 1722073500,
            y: 2.9833333333333334,
        },
        {
            x: 1722075300,
            y: 3.0166666666666666,
        },
        {
            x: 1722077100,
            y: 2.9166666666666665,
        },
        {
            x: 1722078900,
            y: 3.4833333333333334,
        },
        {
            x: 1722080700,
            y: 4.033333333333333,
        },
        {
            x: 1722082500,
            y: 4.066666666666666,
        },
        {
            x: 1722084300,
            y: 2.6333333333333333,
        },
        {
            x: 1722086100,
            y: 2.783333333333333,
        },
        {
            x: 1722087900,
            y: 4.566666666666666,
        },
        {
            x: 1722089700,
            y: 4.216666666666667,
        },
        {
            x: 1722091500,
            y: 3.3,
        },
        {
            x: 1722093300,
            y: 3.6,
        },
        {
            x: 1722095100,
            y: 2.8,
        },
        {
            x: 1722096900,
            y: 3.7,
        },
        {
            x: 1722098700,
            y: 3.3833333333333333,
        },
        {
            x: 1722100500,
            y: 4.033333333333333,
        },
        {
            x: 1722102300,
            y: 4.5,
        },
        {
            x: 1722104100,
            y: 3.5833333333333335,
        },
        {
            x: 1722105900,
            y: 15.133333333333333,
        },
        {
            x: 1722107700,
            y: 4.7,
        },
        {
            x: 1722109500,
            y: 2.3,
        },
        {
            x: 1722111300,
            y: 3.2,
        },
        {
            x: 1722113100,
            y: 13.816666666666666,
        },
        {
            x: 1722114900,
            y: 9.366666666666667,
        },
        {
            x: 1722116700,
            y: 2.566666666666667,
        },
        {
            x: 1722118500,
            y: 13.133333333333333,
        },
        {
            x: 1722120300,
            y: 2.283333333333333,
        },
        {
            x: 1722122100,
            y: 2.2333333333333334,
        },
        {
            x: 1722123900,
            y: 18.916666666666668,
        },
        {
            x: 1722125700,
            y: 7.333333333333333,
        },
        {
            x: 1722127500,
            y: 2.1,
        },
        {
            x: 1722129300,
            y: 10.5,
        },
        {
            x: 1722131100,
            y: 15.25,
        },
        {
            x: 1722132900,
            y: 4.233333333333333,
        },
        {
            x: 1722134700,
            y: 1.9166666666666667,
        },
        {
            x: 1722136500,
            y: 2.45,
        },
        {
            x: 1722138300,
            y: 4.05,
        },
        {
            x: 1722140100,
            y: 2,
        },
        {
            x: 1722141900,
            y: 10.15,
        },
        {
            x: 1722143700,
            y: 8.266666666666667,
        },
        {
            x: 1722145500,
            y: 12.283333333333333,
        },
        {
            x: 1722147300,
            y: 2.9833333333333334,
        },
        {
            x: 1722149100,
            y: 2.6166666666666667,
        },
        {
            x: 1722150900,
            y: 3.3666666666666667,
        },
        {
            x: 1722152700,
            y: 3.6166666666666667,
        },
        {
            x: 1722154500,
            y: 3.0166666666666666,
        },
        {
            x: 1722156300,
            y: 9.566666666666666,
        },
        {
            x: 1722158100,
            y: 5.366666666666666,
        },
        {
            x: 1722159900,
            y: 3.8833333333333333,
        },
        {
            x: 1722161700,
            y: 11.833333333333334,
        },
        {
            x: 1722163500,
            y: 14.733333333333333,
        },
        {
            x: 1722165300,
            y: 2.183333333333333,
        },
        {
            x: 1722167100,
            y: 2.3,
        },
        {
            x: 1722168900,
            y: 5.9,
        },
        {
            x: 1722170700,
            y: 18.116666666666667,
        },
        {
            x: 1722172500,
            y: 4.516666666666667,
        },
        {
            x: 1722174300,
            y: 7.866666666666666,
        },
        {
            x: 1722176100,
            y: 3.1,
        },
        {
            x: 1722177900,
            y: 4.083333333333333,
        },
        {
            x: 1722179700,
            y: 3.95,
        },
        {
            x: 1722181500,
            y: 3.716666666666667,
        },
        {
            x: 1722183300,
            y: 10.966666666666667,
        },
        {
            x: 1722185100,
            y: 11.316666666666666,
        },
        {
            x: 1722186900,
            y: 6.866666666666666,
        },
        {
            x: 1722188700,
            y: 15.2,
        },
        {
            x: 1722190500,
            y: 2.533333333333333,
        },
        {
            x: 1722192300,
            y: 10.233333333333333,
        },
        {
            x: 1722194100,
            y: 2.1666666666666665,
        },
        {
            x: 1722195900,
            y: 2.4166666666666665,
        },
        {
            x: 1722197700,
            y: 3.5166666666666666,
        },
        {
            x: 1722199500,
            y: 2.2333333333333334,
        },
        {
            x: 1722201300,
            y: 2.3,
        },
        {
            x: 1722203100,
            y: 2.533333333333333,
        },
        {
            x: 1722204900,
            y: 18.016666666666666,
        },
        {
            x: 1722206700,
            y: 2.0833333333333335,
        },
        {
            x: 1722208500,
            y: 5.466666666666667,
        },
        {
            x: 1722210300,
            y: 17.933333333333334,
        },
        {
            x: 1722212100,
            y: 3.066666666666667,
        },
        {
            x: 1722213900,
            y: 18.783333333333335,
        },
        {
            x: 1722215700,
            y: 2.8666666666666667,
        },
        {
            x: 1722217500,
            y: 4.166666666666667,
        },
        {
            x: 1722219300,
            y: 12.7,
        },
        {
            x: 1722221100,
            y: 20.566666666666666,
        },
        {
            x: 1722222900,
            y: 10.533333333333333,
        },
        {
            x: 1722224700,
            y: 2.6166666666666667,
        },
        {
            x: 1722226500,
            y: 22.083333333333332,
        },
        {
            x: 1722228300,
            y: 18.85,
        },
        {
            x: 1722230100,
            y: 20.1,
        },
        {
            x: 1722231900,
            y: 4.116666666666666,
        },
        {
            x: 1722233700,
            y: 3.783333333333333,
        },
        {
            x: 1722235500,
            y: 3.0833333333333335,
        },
        {
            x: 1722237300,
            y: 7.95,
        },
        {
            x: 1722239100,
            y: 3.7,
        },
        {
            x: 1722240900,
            y: 21.066666666666666,
        },
        {
            x: 1722242700,
            y: 6.016666666666667,
        },
        {
            x: 1722244500,
            y: 17.75,
        },
        {
            x: 1722246300,
            y: 6.083333333333333,
        },
        {
            x: 1722248100,
            y: 3.6,
        },
    ],
}
