<template>
    <div>
        Home
        <div>
            Board List:
            <div v-if="loading"> Loading ... </div>
            <div v-else> 
                <div v-for="b in boards" :key="b.id"> 
                    {{b}}
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            loading: false,
            boards: [],
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            this.loading = true;
            axios.get('http://localhost:3000/boards')
                .then(res => {
                    this.boards = res.data
                })
                .catch(res => {
                    // if res.statue 401
                    this.$router.replace('/login')
                })
                .finally(_=> {
                    this.loading = false
                })
        }
    }
}
</script>

<style>

</style>


