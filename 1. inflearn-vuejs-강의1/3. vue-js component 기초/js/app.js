import SearchModel from './models/SearchModel.js'
import KeywordModel from './models/KeywordModel.js'
import HistoryModel from './models/HistoryModel.js';

import FormComponent from '../components/FormComponent.js';
import ResultComponent from '../components/ResultComponent.js';
import ListComponent from '../components/ListComponent.js';
import TabComponent from '../components/TabComponents.js';

new Vue({
  el: '#app',
  data: {
    query: '',
    submitted: false,
    searchResult: [],
    selectedTab: '',
    keywords: [],
    history: [],
    tabs: ['추천검색어', '최근검색어']
  },
  components: {
    'search-form': FormComponent,
    'search-result': ResultComponent,
    'List': ListComponent,
    'tabs': TabComponent
  },

  // life cycle
  created() {
    this.selectedTab = this.tabs[0]
    this.fetchKeyword();
    this.fetchHistory();
  },

  methods: {
    onSubmit(query) {
      this.query = query;
      this.search();
    },
    onReset() {      
      this.resetForm()
    },
    search() {
      SearchModel.list().then(data => {
        this.submitted = true
        this.searchResult = data;
      })

      HistoryModel.add(this.query);
      this.fetchHistory();
    },
    resetForm() {
      this.query = '';
      this.searchResult = []
      this.submitted = false;
    },
    onClickTab(tab) {
      this.selectedTab = tab;
    },
    fetchKeyword() {
      KeywordModel.list().then(data => {
        this.keywords = data
      })
    },
    fetchHistory() {
      HistoryModel.list().then(data => {
        this.history = data;
      })
    },
    onClickKeyword(keyword) {
      this.query = keyword;
      this.search()
    },
    onClickHistory(history) {
       this.query = history;
       this.search()
    },
    removeHistory(history) {
     HistoryModel.remove(history);
     this.fetchHistory()
    }
  }
})