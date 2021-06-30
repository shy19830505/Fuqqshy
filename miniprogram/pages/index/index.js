"use strict";
var indexApp = getApp();
var getCongig = require('../../utils/http.js');
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
        ],
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
    onShow: function () {
        this.getConfig();
        this.getCategory();
    },
    getConfig: function () {
        getCongig.getServiceCongig("", function (res) {
        });
    },
    getCategory: function () {
        var _this = this;
        getCongig.getCategory(function (res) {
            _this.setData({
                category: res
            });
            console.error('category---', _this.data.category);
        });
    },
    onReady: function () {
    },
    onLoad: function () {
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBTSxRQUFRLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFDMUIsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDakQsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsU0FBUyxFQUFFLEVBQUUsQ0FBQywrQkFBK0IsRUFBRTtRQUMvQyxLQUFLLEVBQUUsUUFBUSxDQUFDLFVBQVU7UUFDMUIsWUFBWSxFQUFFO1lBQ1Y7Z0JBQ0ksR0FBRyxFQUFFLDhEQUE4RDtnQkFDbkUsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsS0FBSyxFQUFFLGdCQUFnQjthQUMxQjtZQUNEO2dCQUNJLEdBQUcsRUFBRSw4REFBOEQ7Z0JBQ25FLEtBQUssRUFBRSxNQUFNO2dCQUNiLElBQUksRUFBRSxVQUFVO2dCQUNoQixLQUFLLEVBQUUsZUFBZTthQUN6QjtTQUNKO1FBRUQsSUFBSSxFQUFFO1lBQ0YsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSwrQkFBK0IsRUFBRTtZQUNwRCxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLGlDQUFpQyxFQUFFO1lBQ3RELEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsaUNBQWlDLEVBQUU7U0FDekQ7UUFDRCxRQUFRLEVBQUU7WUFDTixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLHdCQUF3QixFQUFFO1lBQy9DLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsNEJBQTRCLEVBQUU7WUFDbEQsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSx5QkFBeUIsRUFBRTtZQUM5QyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLDBCQUEwQixFQUFFO1lBQ2pELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUseUJBQXlCLEVBQUU7WUFDaEQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSx5QkFBeUIsRUFBRTtZQUNoRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLHdCQUF3QixFQUFFO1NBQ2xEO1FBQ0QsVUFBVSxFQUFFLENBQUM7Z0JBQ1QsR0FBRyxFQUFFLHVCQUF1QjtnQkFDNUIsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsSUFBSSxFQUFFLElBQUk7YUFDYixFQUFFO2dCQUNDLEdBQUcsRUFBRSx1QkFBdUI7Z0JBQzVCLFFBQVEsRUFBRSxJQUFJO2dCQUNkLElBQUksRUFBRSxJQUFJO2FBQ2IsQ0FBQztRQUNGLFFBQVEsRUFBRSxFQUFFO0tBQ2Y7SUFDRCxNQUFNO1FBRUYsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0QsU0FBUyxFQUFUO1FBQ0ksU0FBUyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsRUFDekIsVUFBQyxHQUFRO1FBTVQsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBQ0QsV0FBVyxFQUFYO1FBQUEsaUJBT0M7UUFORyxTQUFTLENBQUMsV0FBVyxDQUFDLFVBQUMsR0FBUTtZQUMzQixLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNULFFBQVEsRUFBRSxHQUFHO2FBQ2hCLENBQUMsQ0FBQTtZQUNGLE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0QsT0FBTztJQUVQLENBQUM7SUFDRCxNQUFNO0lBQ04sQ0FBQztDQUVKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgaW5kZXhBcHAgPSBnZXRBcHAoKTtcbmNvbnN0IGdldENvbmdpZyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2h0dHAuanMnKTtcblBhZ2Uoe1xuICAgIGRhdGE6IHtcbiAgICAgICAgbWVudV9yZWN0OiB3eC5nZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIGdkYXRhOiBpbmRleEFwcC5nbG9iYWxEYXRhLFxuICAgICAgICBhY3RpdmVDb25maWc6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbWc6ICdodHRwOi8vc2hvcC5lLW5vdGljZS5jbi91cGxvYWRzLzIwMjAtMDctMjcvNWYxZTMyNGQzYjgyNC5wbmcnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAn56eS5p2A5LiT5Yy6JyxcbiAgICAgICAgICAgICAgICBkZXNjOiAn5oqY5omj5Yqb5bqm6Z2e5bi45aSnJyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ2FjdGl2ZV9taWFvc2hhJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbWc6ICdodHRwOi8vc2hvcC5lLW5vdGljZS5jbi91cGxvYWRzLzIwMjAtMDctMjcvNWYxZTMyNjM2ZmU4NC5wbmcnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAn56CN5Lu35rS75YqoJyxcbiAgICAgICAgICAgICAgICBkZXNjOiAn5b+r5ZaK5pyL5Y+L5p2l56CN5Lu35ZCnJyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ2FjdGl2ZV9rYW5qaWEnXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgICAgLFxuICAgICAgICBsaXN0OiBbXG4gICAgICAgICAgICB7IG5hbWU6ICflvKDkuIknLCBpbWc6ICcuLi8uLi9pbWFnZS9zd2lwZXIvc3dpcGVyLnBuZycgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ+adjuWbmycsIGltZzogJy4uLy4uL2ltYWdlL3N3aXBlci9zd2lwZXJfMS5wbmcnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICfnjovkupQnLCBpbWc6ICcuLi8uLi9pbWFnZS9zd2lwZXIvc3dpcGVyXzIucG5nJyB9LFxuICAgICAgICBdLFxuICAgICAgICBtZW51TGlzdDogW1xuICAgICAgICAgICAgeyBuYW1lOiAn5ZWG5ZOB5YiG57G7JywgaW1nOiAnLi4vLi4vaW1hZ2UvZGlhbnB1LnBuZycgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ+S8mOaDoOWIuCcsIGltZzogJy4uLy4uL2ltYWdlL3lvdWh1aXF1YW4ucG5nJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAn562+5YiwJywgaW1nOiAnLi4vLi4vaW1hZ2UvcWlhbmRhby5wbmcnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICfmiJHnmoTmlLbol48nLCBpbWc6ICcuLi8uLi9pbWFnZS9zaG91Y2FuZy5wbmcnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICflm6LotK3mtLvliqgnLCBpbWc6ICcuLi8uLi9pbWFnZS90dWFuZ291LnBuZycgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ+enkuadgOa0u+WKqCcsIGltZzogJy4uLy4uL2ltYWdlL21pYW9zaGEucG5nJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAn56CN5Lu35rS75YqoJywgaW1nOiAnLi4vLi4vaW1hZ2Uva2FuamlhLnBuZycgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc2Nyb2xsTGlzdDogW3tcbiAgICAgICAgICAgIGltZzogJy4uLy4uL2ltYWdlL3dvZGUyLnBuZycsXG4gICAgICAgICAgICBuaWNrTmFtZTogJ+WkqeepuicsXG4gICAgICAgICAgICBuYW1lOiAn5qOJ6KKrJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBpbWc6ICcuLi8uLi9pbWFnZS93b2RlMi5wbmcnLFxuICAgICAgICAgICAgbmlja05hbWU6ICflpKflnLAnLFxuICAgICAgICAgICAgbmFtZTogJ+S4iuihoydcbiAgICAgICAgfV0sXG4gICAgICAgIGNhdGVnb3J5OiBbXVxuICAgIH0sXG4gICAgb25TaG93KCkge1xuXG4gICAgICAgIHRoaXMuZ2V0Q29uZmlnKCk7XG4gICAgICAgIHRoaXMuZ2V0Q2F0ZWdvcnkoKTtcbiAgICB9LFxuICAgIGdldENvbmZpZygpIHtcbiAgICAgICAgZ2V0Q29uZ2lnLmdldFNlcnZpY2VDb25naWcoXCJcIixcbiAgICAgICAgICAgIChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2V0RGF0YShcbiAgICAgICAgICAgICAgICAvLyAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uZmlnOiByZXMuZGF0YS5kYXRhLFxuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9LFxuICAgIGdldENhdGVnb3J5KCkge1xuICAgICAgICBnZXRDb25naWcuZ2V0Q2F0ZWdvcnkoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiByZXNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdjYXRlZ29yeS0tLScsIHRoaXMuZGF0YS5jYXRlZ29yeSk7XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBvblJlYWR5KCkge1xuXG4gICAgfSxcbiAgICBvbkxvYWQoKSB7XG4gICAgfSxcblxufSkiXX0=