import $request from "../utils/request.js"

export const getLatest = () => {
    return $request({
        url: '/classic/latest'
    })
}