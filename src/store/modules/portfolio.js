const state = {
    funds: 10000,
    stocks: []
};
const mutations = {
    'SET_PORTFOLIO'(state, portfolio) {
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    },
    'BUY_STOCK'(state, {stockId, stockPrice, stockQuantity}) {
        const record = state.stocks.find(el => el.id == stockId);
        if(record) {
            record.quantity += stockQuantity
        } else {
            state.stocks.push({
                id: stockId,
                quantity: stockQuantity
            })
        }
        state.funds -= stockPrice * stockQuantity;
    },
    'SELL_STOCK'(state, {stockId, stockPrice, stockQuantity}) {
        const record = state.stocks.find(el => el.id == stockId);
        if(record.quantity > stockQuantity) {
            record.quantity -= stockQuantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1)
        }
        state.funds += stockPrice * stockQuantity;
    }
}

const actions = {
    sellStock: ({ commit }, order) => {
        commit('SELL_STOCK', order)
    }
}

const getters = {
    stockPortfolio: (state, getters) => {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(el => el.id === stock.id );
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        })
    },
    funds: (state) => {
        return state.funds;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}