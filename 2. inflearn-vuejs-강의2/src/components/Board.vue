<template>
    <div>
        Board {{bid}}
        <router-link :to="`/b/${bid}/c/1`"> Card1 </router-link>
        <router-link :to="`/b/${bid}/c/2`"> Card2 </router-link>
        <hr />
        <router-view> </router-view> <!-- 중첩라우팅 view -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            bid: 0
        }
    },
    created() {
        // console.log(this.$route)
        // console.log(this.$route.params.bid)
        this.bid = this.$route.params.bid
    }
}
</script>

<style>

</style>
