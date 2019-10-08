import { baseUrl } from "../config.js"

const tips = {
    1005: 'appkey无效',
    3000: '期刊无效'
}

function _show_error(error_code) {
    wx.showToast({
        title: tips[error_code] || '未知错误',
        icon: 'none',
        duration: 2000
    })
}

// 封装一个自定义请求
// url: 请求地址
// data: 请求参数
// method: 请求方式
function $request({
    url = "",
    data = {},
    method = "get",
    header = {
        "content-type": "application/json",
        "appkey": "o5AWsnnl36o8SDE4"
    }
}) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: baseUrl + url,
            method: method,
            data: data,
            header: header,
            success(res) {
                let code = res.statusCode.toString()
                if(code.startsWith('2')) {
                    resolve(res.data)
                }else {
                    const error_code = res.data.error_code

                    _show_error(error_code)
                    reject(res)
                }
            },
            fail(err) {
                _show_error(0)

                reject(err)
            }
        })
    })
}

export default $request