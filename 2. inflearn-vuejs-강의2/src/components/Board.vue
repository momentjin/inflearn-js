<template>
  <div>Board
    <div v-if="loading">loading board...</div>
    <div v-else>
      <div>bid: {{bid}}</div>
      <pre> {{board}} </pre>
      <router-link :to="`/b/${bid}/c/1`">Card1</router-link>
      <router-link :to="`/b/${bid}/c/2`">Card2</router-link>
    </div>
    <hr>
    <router-view></router-view>
    <!-- 중첩라우팅 view -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      bid: 0,
      loading: false
    };
  },
  computed: {
    ...mapState({ board: "board" }) // state 중 board를 가져옴
  },
  created() {
    this.fetchData();
  },
  methods: {
    ...mapActions(["FETCH_BOARD"]),
    fetchData() {
      this.loading = true;
      this.FETCH_BOARD({ id: this.$route.params.bid })
      .then(() => (this.loading = false));
    }
  }
};
</script>

<style>
</style>
