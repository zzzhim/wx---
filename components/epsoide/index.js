// components/epsoide/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        index: {
            type: Number,
            // 当 index 改变时会自动调用，不要在 observer 中改变自身
            // observer(newVal, oldVal, changedPath) {
            //     const num = newVal < 10 ? `0${newVal}` : newVal

            //     this.setData({
            //         num
            //     })
            // }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        year: 2019,
        month: '',
        // num: 0
    },

    attached() {
    },

    ready() {
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
