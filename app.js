import $request from './utils/request.js'


//app.js
App({
    onLaunch() {
        wx.$request = $request
    }
})