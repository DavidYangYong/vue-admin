var config = {
    baseOAuthUrl: "",
    //请求授权地址
    userAuthorizationUri: "/api/authorization/oauth/token",
    //accessToken请求地址
    accessTokenUri: "",
    //用户信息请求地址
    userInfoUri: "/api/authorization/userinfo",
    //登出请求地址
    logoutUri: "/api/authorization/logout",
    //项目地址
    localuri: "",
    redirect_uri: "",
    //案例资源服务器地址
    resUri: "",
    //客户端相关标识，请从认证服务器申请
    clientId: "",
    client_secret: "",
    //申请的权限范围
    scope: "",
    //可选参数，客户端的当前状态，可以指定任意值，用于校验，此次案例不做相关认证
    state: "",
    //一些固定的请求参数
    response_type: "",
    grant_type: "password",
    code: ""
}
export default config;