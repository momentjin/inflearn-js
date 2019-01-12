<template>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <header>
      <h2 class="container">검색</h2>
    </header>
    <div class="container">
      <search-form v-bind:value="query" v-on:@submit="onSubmit" v-on:@reset="onReset"></search-form>

      <div class="contents">
        <div v-if="submitted">
          <search-result v-bind:data="searchResult" v-bind:query="query"></search-result>
        </div>
      </div>

      <tabs v-bind:tabs="tabs" v-bind:selected-tab="selectedTab" v-on:@change="onClickTab"></tabs>

      <div v-if="selectedTab === tabs[0]">
        <list v-bind:data="keywords" type="keywords" v-on:@click="onClickKeyword"></list>
      </div>
      <div v-else>
        <list
          v-bind:data="history"
          type="history"
          v-on:@click="onClickKeyword"
          v-on:@remove="removeHistory"
        ></list>
      </div>
      
    </div>
  </body>
</html>
</template>

<script>
import SearchModel from "./models/SearchModel.js";
import KeywordModel from "./models/KeywordModel.js";
import HistoryModel from "./models/HistoryModel.js";

import FormComponent from "./components/FormComponent.vue";
import ResultComponent from "./components/ResultComponent.vue";
import ListComponent from "./components/ListComponent.vue";
import TabComponent from "./components/TabComponent.vue";

export default {
  name: "app",
  data() {
    return {
      query: "",
      submitted: false,
      searchResult: [],
      selectedTab: "",
      keywords: [],
      history: [],
      tabs: ["추천검색어", "최근검색어"]
    };
  },
  // life cycle
  created() {
    this.selectedTab = this.tabs[0];
    this.fetchKeyword();
    this.fetchHistory();
  },
  components: {
    "search-form": FormComponent,
    "search-result": ResultComponent,
    "list": ListComponent,
    "tabs": TabComponent
  },
  methods: {
    onSubmit(query) {
      this.query = query;
      this.search();
    },
    onReset() {
      this.resetForm();
    },
    search() {
      SearchModel.list().then(data => {
        this.submitted = true;
        this.searchResult = data;
      });

      HistoryModel.add(this.query);
      this.fetchHistory();
    },
    resetForm() {
      this.query = "";
      this.searchResult = [];
      this.submitted = false;
    },
    onClickTab(tab) {
      this.selectedTab = tab;
    },
    fetchKeyword() {
      KeywordModel.list().then(data => {
        this.keywords = data;
      });
    },
    fetchHistory() {
      HistoryModel.list().then(data => {
        this.history = data;
      });
    },
    onClickKeyword(keyword) {
      this.query = keyword;
      this.search();
    },
    onClickHistory(history) {
      this.query = history;
      this.search();
    },
    removeHistory(history) {
      HistoryModel.remove(history);
      this.fetchHistory();
    }
  }
};
</script>
