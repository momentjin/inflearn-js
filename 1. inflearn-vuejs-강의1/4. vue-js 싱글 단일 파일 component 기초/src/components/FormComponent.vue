<template>
  <form v-on:submit.prevent="onSubmit">
    <input type="text" v-on:keyup="onKeyup" v-model="inputValue" placeholder="검색어를 입력하세요" autofocus>
    <button v-on:click="onReset" v-show="inputValue.length" type="reset" class="btn-reset"></button>
  </form>
</template>

<script>
export default {
    // template: "#search-form",
    props: ['value'],
    data() {
        return {
            inputValue: this.value
        }
    },
    watch: {
        value(newVal, oldVal) {
            this.inputValue = newVal
        }
    },
    methods: {
        onSubmit(query) {
            this.$emit('@submit', this.inputValue.trim())
        },
        onKeyup() {
            if (!this.inputValue.length) this.onReset()
        },
        onReset() {
            this.inputValue= '';
            this.$emit('@reset');
        }
    }
}
</script>


