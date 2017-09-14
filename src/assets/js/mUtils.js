import Lib from 'assets/js/Lib';
import axios from 'axios';
import {myinitGeetest} from 'assets/js/geetest';

export const setStore = (name,content) => {
    if(!name) return;
    // content 只能是json 或者字符串
    if(typeof content !== 'string'){
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name,content);
}

/**
 * 获取localStorage
 */

 export const getStore = name => {
     if(!name) return;
     return window.localStorage.getItem(name);
 }

 /**
  * 删除localStorage
  */

  export const removeStore = name => {
    if(!name) return;
    window.localStorage.removeItem(name);
  }


//   极验验证码

export const validate_code = function(handler){
    // return  axios({
    //     url: "http://localhost:9978/gt/register-slide?t=" + (new Date()).getTime(),
    //     type:"get",
    //     headers: {'Content-Type':'application/x-www-form-urlencoded'},
    //     timeout: 10*1000,
    //     responseType:'json'
    // });
    Lib.M.ajax({
        url: "http://localhost:9978/gt/register-slide?t=" + (new Date()).getTime(), // 加随机数防止缓存
        type: "get",
        dataType: "json",
        success: function (data) {
            myinitGeetest({
                // 以下 4 个配置参数为必须，不能缺少
                gt: data.gt,
                challenge: data.challenge,
                offline: !data.success, // 表示用户后台检测极验服务器是否宕机
                new_captcha: data.new_captcha, // 用于宕机时表示是新验证码的宕机
                product: "float", // 产品形式，包括：float，popup
                width: "280px"
                // 更多配置参数说明请参见：http://docs.geetest.com/install/client/web-front/
            },handler);
        }
    });
}
