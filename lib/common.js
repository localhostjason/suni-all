// local
// BASE_API = 'http://192.168.120.244:2000/';
// _BASE_API = 'http://192.168.120.244:2000';

// remove
BASE_API = 'http://suni88.ctsky.wang/';
_BASE_API = 'http://suni88.ctsky.wang';

/**
 * ajax post提交
 * @param url  请求地址
 * @param param  需要传的数据
 * @param method 提交方法
 * @param callback
 * @param no_token  是否带token
 * @return
 */
function sendAjax(url, param, method, callback, no_token) {
    var url_site = BASE_API;
    var token = sessionStorage.getItem("token");

    var params = param ? JSON.stringify(param) : '';

    var header = no_token ? null : {'Authorization': 'Bearer ' + token};
    $.ajax({
        type: method,
        url: url_site + url,
        data: params,
        headers: header,
        contentType: "application/json",
        dataType: 'json',
        async: false, // 不使用异步
        cache: false,
        success: callback,
        error: function f1(re) {
            console.log(re);
            var resp = {};
            try {
                resp = JSON.parse(re.responseText);
            } catch (e) {
                resp['_error'] = {
                    code: 401
                };
            }
            if (resp._issues) {
                LayerAlert1('请检查是否勾选，是否选择');
                return
            }

            if (resp._error.code === 404) {
                LayerAlert1('不存在数据');
                return
            }

            if (resp._error.code === 401) {
                //需要登录
                LayerAlert1("登录已过期，请登录！");
                setTimeout(function () {
                    window.location.href = "login.html"
                }, 1000);
            } else {
                LayerAlert1(resp._error.message);
            }
        }
    })


}

function LayerAlert(content) {
    layer.open({
        content: content,
        btn: '确定'
    });
}

function LayerAlert1(content) {
    //提示
    layer.open({
        content: content,
        skin: 'msg',
        time: 2 //2秒后自动关闭
    });
}

/**
 *  验证手机号
 */
function checkPhone(phone) {
    return /^1[34578]\d{9}$/.test(phone);
}

/*
* 验证身份证号
* */
function isCardNo(card) {
// 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (reg.test(card) === false) {
        return false;
    }
}

/*
* 验证姓名
* */
/**
 * @return {boolean}
 */
function IsChinese(relname) {
    var reg = /^([\u4e00-\u9fa5]){2,7}$/; //只能是中文，长度为2-7位
    if (!reg.test(relname)) {
        return false;
    }
}

/**
 * 显示密码
 */
$('.see_pass').on('click', function () {
    var type = $(this).attr('type');
    //alert(type);
    if (type == 1) {
        $(this).prev().attr('type', 'text');
        $(this).attr('type', 2)
    } else {
        $(this).prev().attr('type', 'password');
        $(this).attr('type', 1)
    }
})

function setTimeLoad(callback) {
    setTimeout(function () {
        callback();
    }, 1000)
}


//paraName 等找参数的名称
function getUrlParam(paraName) {
    var url = document.location.toString();
    var arrObj = url.split("?");

    if (arrObj.length > 1) {
        var arrPara = arrObj[1].split("&");
        var arr;

        for (var i = 0; i < arrPara.length; i++) {
            arr = arrPara[i].split("=");

            if (arr != null && arr[0] === paraName) {
                return arr[1];
            }
        }
        return "";
    } else {
        return "";
    }
}


function filter_val(data, key, val, return_key) {
    if (!data.length) return false;
    var result = '';
    for (var i = 0; i < data.length; i++) {
        if (data[i][key] === val || !data[i][key]) {
            result = data[i][return_key];
            break
        }
    }
    return result
}

function filter_val_list(data, key, val) {
    if (!data.length) return false;
    var result = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i][key] === val) {
            result.push(data[i])
        }
    }
    return result
}

function group_type(data, key, re_val) {
    if (!data.length) return false;

    var result = {};
    data.forEach(function (val, index) {
        var r = result[val[key]];
        if (!r) {
            result[val[key]] = r = []
        }
        if (index <= data.length - 2) {
            if (val[key] === data[index + 1][key]) {
                r.push(val[re_val]);
            }
        }
    });
    return result
}


//在Jquery里格式化Date日期时间数据
function timeStamp2String(time) {
    var datetime = new Date();
    datetime.setTime(time);
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
    var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
    var hour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
    var minute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
    var second = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
    return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
}

function pay_action(t) {
    /*
    获取支付方式
    * */
    var result;
    switch (t) {
        case 'alipay':
            result = '支付宝支付';
            break;
        case 'we_chart':
            result = '微信支付';
            break;
        case 'bank_card':
            result = '银行卡支付';
            break;
        default:
            result = '支付宝支付';
            break;
    }
    return result
}


function order_status(t) {
    /*
    获取支付方式
    * */
    var result;
    switch (t) {
        case 'to_pay':
            result = '待支付';
            break;
        case 'to_deliver':
            result = '待发货';
            break;
        case 'is_deliver':
            result = '待收货';
            break;
        case 'delivered':
            result = '已签收';
            break;
        case 'is_refund':
            result = '退款申请';
            break;
        default:
            result = '退款完成';
            break;
    }
    return result
}

function onBridgeReady(appId, timeStamp, nonceStr, _package, signType, paySign) {
    WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
            "appId": appId,     //公众号名称，由商户传入
            "timeStamp": timeStamp,         //时间戳，自1970年以来的秒数
            "nonceStr": nonceStr, //随机串
            "package": _package,
            "signType": signType,         //微信签名方式：
            "paySign": paySign, //微信签名
        },
        function (res) {
            // alert(res.err_msg);
            // alert(111);
            if (res.err_msg === "get_brand_wcpay_request:ok") {
                // 使用以上方式判断前端返回,微信团队郑重提示：
                //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                window.location.href = 'home.html'
            }
        });
}


function jf_status(t) {
    /*
    获取支付方式
    * */
    var result;
    switch (t) {
        case 'profit':
            result = '积分';
            break;
        case 'withdrawing':
            result = '申请兑换数';
            break;
        case 'withdrawed':
            result = '成功兑换数';
            break;
        default:
            result = '拒绝兑换数';
            break;
    }
    return result
}


//对url进行编码
var localUrl = encodeURIComponent(location.href.split('#')[0]);
var url_params = {
    url: localUrl
};
sendAjax('api/ticket', url_params, 'post', function (response) {
    var appId = response.appId;
    var timestamp = response.timestamp;

    if (!appId || !timestamp) {
        return false;
    }

    var nonceStr = response.nonceStr;
    var signature = response.signature;
    var shareUrl = response.url;

    console.log(response);

    //通过微信config接口注入配置
    wx.config({
        debug: false, // 默认为false  为true的时候是调试模式，会打印出日志
        appId: appId,
        timestamp: timestamp,
        nonceStr: nonceStr,
        signature: signature,
        jsApiList: [
            'checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo'
        ]
    });

    //配置自定义分享内容
    window.share_config = {
        'share': {
            'imgUrl': 'http://suni88.ctsky.wang/static/app/images/login.png',
            'desc': '您值得拥有', // 这是分享展示的摘要
            'title': '塑妮', // 这是分享展示卡片的标题
            'link': shareUrl, // 这里是分享的网址
            'success': function (rr) {
                console.log('成功' + JSON.stringify(rr))
            },
            'cancel': function (tt) {
                console.log('失败' + JSON.stringify(tt));
            }
        }
    };
    wx.ready(function () {
        wx.onMenuShareAppMessage(share_config.share); // 微信好友
        wx.onMenuShareTimeline(share_config.share); // 微信朋友圈
        wx.onMenuShareQQ(share_config.share); // QQ
    });
    wx.error(function (res) {
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    });
});
