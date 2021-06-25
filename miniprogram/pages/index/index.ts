
const indexApp = getApp();
Page({
    data: {
        menu_rect: wx.getMenuButtonBoundingClientRect(),
        gdata: indexApp.globalData,
        config: {},
        list: [
            { name: '张三', img: '../../image/swiper/swiper.png' },
            { name: '李四', img: '../../image/swiper/swiper_1.png' },
            { name: '王五', img: '../../image/swiper/swiper_2.png' },
        ]
    },
    onShow() {
    },
    onReady() {

    },
    onLoad() {
    },

})