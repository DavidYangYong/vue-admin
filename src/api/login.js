import request from '@/utils/request'
import ssoconfig from '@/config/config.js'
import qs from 'qs'

export function login(username, password) {
  let  queryData= {
            "grant_type": 'password',
            "username": username,
            "password": password
        };
    return request({
        url: ssoconfig.userAuthorizationUri,
        method: 'post',
        　headers: {　　　　
            'Content-Type': 'application/x-www-form-urlencoded'　　　
        },
        auth: {
            username: 'wlm',
            password: '18cf69f1ce412a0416740b917a33d853'
        },
        data:qs.stringify(queryData)
    })
}
export function getInfo(token) {
    return request({
        url: ssoconfig.userInfoUri,
        method: 'get',
        params: {
            access_token:token
        }
    })
}
export function logout() {
    return request({
        url: ssoconfig.logoutUri,
        method: 'post'
    })
}