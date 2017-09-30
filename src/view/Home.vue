<template>
    <div id="home" class="clearfix">  
        <headerBar>
        <div slot="home" class="home-header-bar">
            <Icon type="ios-email" size="30" color="#fff" class="fl homeEmail"></Icon>
            <span class="logo">
            今日头条
            <Icon type="ios-refresh-empty" size="30"></Icon>
          </span>
            <Icon type="ios-search" size="30" color="#fff" class="fr homeSearch"></Icon>
        </div>
    </headerBar>
    <Icon type="ios-refresh-empty" size="30" color="#d43d3d" class="pulldownbtn"></Icon>
    <ul class="homeNav">
        <li v-for="(item,index) in navbar" :key="index" class="navBarLi">
            <router-link :to="{path:item.url,query:{type:item.type}}">{{item.text}}</router-link>
        </li>
    </ul>

        <span>hi stark</span>

   <ul class="newsContent animated">

        <div  class="newsDetaile"  v-for="(val,index) in listCon" :key="index" >
            <p class="title">{{val.title}}</p>

                    <div class="bottomInfo clearfix">
                        <Icon type="fireball" size="10" color="#d43d3d" v-show="val.hot===1"></Icon>
                        <span class="avIcon" v-show="val.label==='广告'">广告</span>
                        <span class="writer">{{val.media_name}}</span> &nbsp;&nbsp;
                        <span class="comment_count">评论&nbsp;{{val.comment_count}}</span>
                        <span class="datetime">{{val.datetime|date}}</span>
                    </div>
        </div>

    </ul>


    </div>
</template>
<script>
import * as type from '../store/mutation-types.js'
import headerBar from '../components/Header-bar.vue'


    import {
    mapActions,
    mapState,
    mapGetters
} from 'vuex'

export default {
    created(){
        // console.log(this.list['news_hot']);
        // console.log(this.listCon);
    },
    components: {
        headerBar,
        // bottomNav,
        // toTop
    },
    computed: {
        ...mapGetters([
            // 'newsList',
            'list',
            'routerChange'
        ]),
        listCon: function() {
            if (this.$route.query.type) {
                console.log(this.list[this.$route.query.type]);
                return this.list[this.$route.query.type];
            } else {
                   console.log(this.list['news_hot']);
                return this.list[this.first]
            }
        },
    },
    mounted() {

        // console.log(this.listCon);
        this.getNews({
            kind: this.first,
            flag: this.routerChange
        });
        // this.loading = true;
        // const _this = this;
        // window.addEventListener('scroll', this.handleScroll);
    },
    watch: {
        '$route': function() {
            console.log(1111111);
            this.getNews({
                kind: this.$route.query.type,
                flag: this.routerChange
            });
            if (this.routerChange) {
                this.$store.commit(type.CHANGE_LOADING_STATE, true)
            } else {
                this.$store.commit(type.CHANGE_LOADING_STATE, false)
            }
            this.first = window.location.search.substring(6);
            this.$store.commit(type.ROUTERCHANGE, true);
            this.$store.commit(type.PULLDOWNBTN, false);
        },
    },
    methods: {
        ...mapActions([
            'getNews',
            // 'pulldownloadmore'
        ]),
    },
    data() {
        return {
            navbar: [{
                    text: '推荐',
                    url: '/home/all',
                    type: '__all__'
                },
                {
                    text: '热点',
                    url: '/home/hot',
                    type: 'news_hot'
                },
                {
                    text: '社会',
                    url: '/home/society',
                    type: 'news_society'
                },
                {
                    text: '娱乐',
                    url: '/home/entertainment',
                    type: 'news_entertainment'
                },
                {
                    text: '科技',
                    url: '/home/tech',
                    type: 'news_tech'
                },
                {
                    text: '汽车',
                    url: '/home/car',
                    type: 'news_car'
                },
                {
                    text: '体育',
                    url: '/home/sports',
                    type: 'news_sports'
                },
                {
                    text: '财经',
                    url: '/home/finance',
                    type: 'news_finance'
                },
                {
                    text: '军事',
                    url: '/home/military',
                    type: 'news_military'
                },
                {
                    text: '国际',
                    url: '/home/world',
                    type: 'news_world'
                },
                {
                    text: '时尚',
                    url: '/home/fashion',
                    type: 'news_fashion'
                },
            ],
            top: false,
            first: window.location.search.substring(6),
        }
    }
}
</script>
<style lang="less" scoped rel="styleheet/less">@import "../assets/css/transtion.less";
@import '../assets/css/border.less';
.home-header-bar {
    & > i {
        margin-top: 0.2rem;
    }
    .logo {
        color: #fff;
        font-size: 18px;
        vertical-align: middle;
        i {
            vertical-align: middle;
        }
    }
    .homeEmail {
        margin-left: 0.22rem;
    }
    .homeSearch {
        margin-right: 0.22rem;
    }
}
.homeNav {
    width: 100%;
    overflow: hidden;
    overflow-x: auto;
    text-align: center;
    position: fixed;
    left: 0;
    font-size: 0;
    top: 3.2rem;
    background: #f4f5f6;
    font-family: '微软雅黑';
    white-space: nowrap;
    z-index: 999;
    .navBarLi {
        display: inline-block;
        height: 3rem;
        line-height: 3rem;
        width: 3.4rem;
        font-size: 16px;
        a {
            color: #000;
        }
        .router-link-active {
            color: #d43d3d;
        }
    }
}
::-webkit-scrollbar {
    display: none;
}
.newsContent {
    margin-top: 2.3rem;
    // margin-bottom: 1.5rem;
    width: 100%;
    .newsDetaile {
        width: 94%;
        display: block;
        position: relative;
        margin: 0 auto;
        padding-bottom: 0.15rem;
        .borderBottom(1px,#d43d3d);
        .title {
            font-size: 16px;
            font-weight: bold;
            color: #000;
            padding-top: 0.2rem;
            padding-bottom: 0.15rem;
        }
        img {
            width: 31.1%;
            margin-right: 0.21rem;
            height: 2.3rem;
        }
        .bottomInfo {
            font-size: 10px;
            margin-top: 0.15rem;
            .writer {}
            .comment_count {}
            .datetime {
                float: right;
            }
            .avIcon {
                display: inline-block;
                height: 0.4rem;
                width: 0.9rem;
                text-align: center;
                line-height: 0.4rem;
                border-radius: 4px;
                border: 1px solid #39f;
                font-size: 10px;
                margin-right: 0.1rem;
            }
        }
    }
}
.loading {
    margin-top: 3.4rem;
}
.newsLoadError {
    margin: 2.3rem auto;
    font-size: 25px;
    width: 90%;
}
.pulldownload {
    margin-bottom: 1.3rem;
    width: 100%;
    height: 1.5rem;
    line-height: 1.5rem;
    color: #000;
    font-size: 18px;
    text-align: center;
}
.top {
    position: absolute;
    bottom: 2rem;
    right: 0.15rem;
    background: #d43d3d;
    color: #fff;
    text-align: center;
    border-radius: 50%;
}
.pulldownbtn {
    position: absolute;
    margin: 0 auto;
    left: 50%;
    top: 0.5rem;
    z-index: 1000000;
}
</style>