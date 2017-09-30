import axios from 'axios'
import jsonp from 'jsonp'

import * as type from './mutation-types.js'

export default {
    getNews({commit, state }, pay) {
        // if (pay.kind && pay.flag) {

            // console.log(pay);
        //     jsonp('http://m.toutiao.com/list/?tag=' + pay.kind + '&ac=wap&count=20&format=json_raw&as=A125A8CEDCF8987&cp=58EC18F948F79E1&min_behot_time=' + parseInt((new Date().getTime()) / 1000),
        //         function(err, res) {
        //             commit(type.GET_NEWSLIST, {
        //                 data: res.data,
        //                 kind: pay.kind
        //             });
        //             // commit(type.CHANGE_LOADING_STATE, false);
        //             // if (res.return_count) {
        //             //     commit(type.RETURN, true);
        //             // } else {
        //             //     commit(type.RETURN, false);
        //             // }
        //         })
        // }
    }
}
