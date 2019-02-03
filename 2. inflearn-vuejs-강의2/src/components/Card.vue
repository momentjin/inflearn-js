<template>
  <Modal class="modal-card">
    <div slot="header" class="modal-card-header">
      <div class="modal-card-header-title">
        <input
          class="form-control"
          type="text"
          :value="card.title"
          :readonly="!toggleTitle"
          @click="toggleTitle=true"
          @blur="onBlurTitle"
          ref="inputTitle"
        >
      </div>
      <a class="modal-close-btn" href @click.prevent="onClose">&times;</a>
    </div>
    <div slot="body">
      <h3>Description</h3>
      <textarea
        class="form-control"
        cols="30"
        rows="3"
        placeholder="Add a more detailed description..."
        :readonly="!toggleDesc"
        @click="toggleDesc=true"
        @blur="onBlurDesc"
        v-model="card.description"
        ref="inputDesc"
      ></textarea>
    </div>
    <div slot="footer"></div>
  </Modal>
</template>

<script>
import Modal from "./Modal.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    Modal
  },
  computed: {
    ...mapState({
      card: "card"
    })
  },
  created() {
    const id = this.$route.params.cid;
    this.FETCH_CARD({ id });
  },
  watch: {
    // 라우팅에 따른 처리
    // $route: {
    //   handler: "fetchData",
    //   immediate: true
    // }
  },
  methods: {
    ...mapActions(["FETCH_CARD"]),
    onClose() {
      this.$router.push(`/b/${this.board.id}`);
    }
  }
};
</script>

<style>
.modal-card .modal-container {
  min-width: 300px;
  max-width: 800px;
  width: 60%;
}
.modal-card-header-title {
  padding-right: 30px;
}
.modal-close-btn {
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 24px;
  text-decoration: none;
}
.modal-card-header {
  position: relative;
}
</style>
