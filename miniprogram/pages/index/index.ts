
const indexApp = getApp();
const getCongig = require('../../utils/http.js');
Page({
    data: {
        menu_rect: wx.getMenuButtonBoundingClientRect(),
        gdata: indexApp.globalData,
        activeConfig: [
            {
                img: 'http://shop.e-notice.cn/uploads/2020-07-27/5f1e324d3b824.png',
                title: '秒杀专区',
                desc: '折扣力度非常大',
                class: 'active_miaosha'
            },
            {
                img: 'http://shop.e-notice.cn/uploads/2020-07-27/5f1e32636fe84.png',
                title: '砍价活动',
                desc: '快喊朋友来砍价吧',
                class: 'active_kanjia'
            }
        ]
        ,
        list: [
            { name: '张三', img: '../../image/swiper/swiper.png' },
            { name: '李四', img: '../../image/swiper/swiper_1.png' },
            { name: '王五', img: '../../image/swiper/swiper_2.png' },
        ],
        menuList: [
            { name: '商品分类', img: '../../image/dianpu.png' },
            { name: '优惠券', img: '../../image/youhuiquan.png' },
            { name: '签到', img: '../../image/qiandao.png' },
            { name: '我的收藏', img: '../../image/shoucang.png' },
            { name: '团购活动', img: '../../image/tuangou.png' },
            { name: '秒杀活动', img: '../../image/miaosha.png' },
            { name: '砍价活动', img: '../../image/kanjia.png' },
        ],
        scrollList: [{
            img: '../../image/wode2.png',
            nickName: '天空',
            name: '棉被'
        }, {
            img: '../../image/wode2.png',
            nickName: '大地',
            name: '上衣'
        }],
        category: []
    },
    onShow() {

        this.getConfig();
        this.getCategory();
    },
    getConfig() {
        getCongig.getServiceCongig("",
            (res: any) => {
                // this.setData(
                //     {
                //         config: res.data.data,
                //     }
                // );
            }
        );
    },
    getCategory() {
        getCongig.getCategory((res: any) => {
            this.setData({
                category: res
            })
            console.error('category---', this.data.category);
        })
    },
    onReady() {

    },
    onLoad() {
    },

})