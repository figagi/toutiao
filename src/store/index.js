import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import jsonp from 'jsonp'
import * as type from './mutation-types.js'
import mutations from './mutations.js'



Vue.use(Vuex)

let selectModule = {
  state:{
    title:'hello123',
    list: []
  },
  mutations:{
    changeTitle(state, payload){
      state.title = payload.title
    },
    changeList(state, list){
      state.list = list;
    }
  },
  actions:{
    getListAction({commit}){
      // 发送请求
      axios.get('http://easy-mock.com/mock/594f5d4b9adc231f3569be76/list/list')
        .then((data)=>{
          commit("changeList", data.data);  // 拿到数据后，提交mutations，改变状态
        })
        .catch((error)=>{
          conso.log(error)
        })
    }
  }
};

// this.$store.state.title
// this.$store.state.selectModule.title

// 定义一个容器

let store = new Vuex.Store({
    state: {
      routerChange:true,
      count: 100,
          list: {                //首页所有新闻栏目内容
        __all__: [],
        news_hot: [],
        news_society: [],
        news_entertainment: [],
        news_tech: [],
        news_car: [],
        news_sports: [],
        news_finance: [],
        news_military: [],
        news_world: [],
        news_fashion: []
    },
    },
    getters: {
      filterCount(state){
        return state.count >= 120 ? 120 : state.count;
      },
      list: state => state.list,
      list: state => state.list,
    newsList: state => state.newsList,

    loading: state => state.loading,

    list: state => state.list,

    ifReturnMsg: state => state.ifReturnMsg,

    userName: state => state.userName,

    vitality: state => state.vitality,

    Sharebox: state => state.Sharebox,

    logined: state => state.logined,

    showLog_off: state => state.showLog_off,

    oneDetail: state => state.oneDetail,

    collectList: state => state.collectList,

    routerChange: state => state.routerChange,

    downLoadMore: state => state.downLoadMore,

    hasIntroduce: state => state.hasIntroduce,

    introduce: state => state.introduce

    },
    mutations: {
       addIncrement(state, payload){
         state.count += payload.n;
       },
      deIncrement(state, payload){
        state.count -= payload.de;
      },
          [type.GET_NEWSLIST](state, payload) {
        for (var item in payload.data) {
            state.list[payload.kind].push(payload.data[item]);
        }
        state.downLoadMore = true;
    },
     //将首页发送的请求数据添加到list各项中去，进行渲染页面
    [type.GET_NEWSLIST](state, payload) {
        for (var item in payload.data) {
            state.list[payload.kind].push(payload.data[item]);
        }
        state.downLoadMore = true;
    },
    //新闻切换时loading图片的展示
    [type.CHANGE_LOADING_STATE](state, flag) {
        state.loading = flag;
    },
    //判断是否有请求数据返回
    [type.RETURN](state, flag) {
        state.ifReturnMsg = flag;
    },
    //shareBox分享框是否展示
    [type.SHOWSHAREBOX](state, sign) {
        state.Sharebox = sign;
    },
    //登录和退出
    [type.LOGINING](state, payload) {
        state.logined = payload;
    },
    //是否展示退出登录按钮
    [type.LOGOFF](state, sign) {
        state.showLog_off = sign;
    },
    //判断路有变化
    [type.ROUTERCHANGE](state, sign){
        state.routerChange = sign;
    },
    //渲染用户名
    [type.GETUSERDATA](state, res){
        state.userName = res;
    },
    //控制下拉加载数据的按钮
    [type.PULLDOWNBTN](state, sign){
        state.downLoadMore = sign;
    },
    //更改个人简介
    [type.CHANGEINTRODUCE](state, introduce){
        state.introduce = introduce;
        state.hasIntroduce = true;
    }
    },
   actions: {
      addAction({commit,dispatch}){
        setTimeout(()=>{
            // 改变状态，提交mutations
            commit("addIncrement", {n:5})
            dispatch("textAction", {test: '测试'})
        },1000)
      },
    textAction(context, obj){
        console.log(obj)
    },
     getNews({commit, state }, pay) {

      console.log(pay);
        if (pay.kind && pay.flag) {

            jsonp('http://m.toutiao.com/list/?tag=' + pay.kind + '&ac=wap&count=20&format=json_raw&as=A125A8CEDCF8987&cp=58EC18F948F79E1&min_behot_time=' + parseInt((new Date().getTime()) / 1000),
                function(err, res) {
                  console.log(res);
                    commit(type.GET_NEWSLIST, {
                        data: res.data,
                        kind: pay.kind
                    });
                    // commit(type.CHANGE_LOADING_STATE, false);
                    // if (res.return_count) {
                    //     commit(type.RETURN, true);
                    // } else {
                    //     commit(type.RETURN, false);
                    // }
                })
        }
    }
  },
    modules:{
      selectModule
    }
})

export default store

