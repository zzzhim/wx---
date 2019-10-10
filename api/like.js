import $request from "../utils/request.js"

export const handleLike = ({ behavior, artID, category }) => {
    const url = behavior === 'like' ? '/like' : '/like/cancel'

    return $request({
        url,
        method: "post",
        data: {
            art_id: artID,
            type: category
        }
    })
}