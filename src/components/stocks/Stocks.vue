<template>
    <div>
        <app-stock v-for = "stock in getStocks"
                   :key = "stock.id"
                   :stock = "stock"></app-stock>
    </div>
</template>

<script>
    import Stock from './Stock.vue'
    export default {
        components: {
            appStock: Stock
        },
        computed: {
            getStocks() {
                return this.$store.getters.stocks;
            }
        }
    }
</script>