<template>
    <div>
        Board 

        <div v-if="loading"> loading board... </div>
        <div v-else>
            <div> bid: {{bid}} </div>
            <router-link :to="`/b/${bid}/c/1`"> Card1 </router-link>
            <router-link :to="`/b/${bid}/c/2`"> Card2 </router-link>
        </div>
        <hr />
        <router-view> </router-view> <!-- 중첩라우팅 view -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            bid: 0,
            loading: false
        }
    },
    created() {
        // console.log(this.$route)
        // console.log(this.$route.params.bid)
        this.fetchData()
    },
    methods: {
        fetchData() {
            this.loading = true
            setTimeout(() => {
                this.bid = this.$route.params.bid
                this.loading = false
            }, 500)
        }
    }
}
</script>

<style>

</style>
