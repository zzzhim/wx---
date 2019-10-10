Component({
    /**
     * 组件的属性列表
     */
    properties: {
        like: {
            type: Boolean,
            value: false,
            observer() {

            }
        },
        count: {
            type: Number,
            value: 0,
            observer() {

            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        yesSrc: "../images/like.png",
        noSrc: "../images/like1.png"
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onLike(event) {
            let count = this.properties.count
            let like = !this.properties.like
            count = this.properties.like ? count - 1 : count + 1

            this.setData({
                like,
                count
            })

            let behavior = this.properties.like ? 'like' : 'cancel'

            this.triggerEvent('like', {
                behavior
            }, {})
        }
    }
})
