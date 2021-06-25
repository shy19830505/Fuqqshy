"use strict";
Page({
    data: {
        motto: 'Hello World1',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        canIUseGetUserProfile: false,
        canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName')
    },
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs',
        });
    },
    onLoad: function () {
        if (wx.getUserProfile) {
            this.setData({
                canIUseGetUserProfile: true
            });
        }
    },
    getUserProfile: function () {
        var _this = this;
        wx.getUserProfile({
            desc: '展示用户信息',
            success: function (res) {
                console.log(res);
                _this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                });
            }
        });
    },
    getUserInfo: function (e) {
        console.log(e);
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsS0FBSyxFQUFFLGNBQWM7UUFDckIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUNuRCxxQkFBcUIsRUFBRSxLQUFLO1FBQzVCLGVBQWUsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQztLQUMzRztJQUVELFdBQVc7UUFDUCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1YsR0FBRyxFQUFFLGNBQWM7U0FDdEIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELE1BQU07UUFFRixJQUFJLEVBQUUsQ0FBQyxjQUFjLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDVCxxQkFBcUIsRUFBRSxJQUFJO2FBQzlCLENBQUMsQ0FBQTtTQUNMO0lBQ0wsQ0FBQztJQUNELGNBQWM7UUFBZCxpQkFZQztRQVZHLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxVQUFDLEdBQUc7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDaEIsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDVCxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7b0JBQ3RCLFdBQVcsRUFBRSxJQUFJO2lCQUNwQixDQUFDLENBQUE7WUFDTixDQUFDO1NBQ0osQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELFdBQVcsRUFBWCxVQUFZLENBQU07UUFFZCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDM0IsV0FBVyxFQUFFLElBQUk7U0FDcEIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXG4vLyDojrflj5blupTnlKjlrp7kvotcblxuUGFnZSh7XG4gICAgZGF0YToge1xuICAgICAgICBtb3R0bzogJ0hlbGxvIFdvcmxkMScsXG4gICAgICAgIHVzZXJJbmZvOiB7fSxcbiAgICAgICAgaGFzVXNlckluZm86IGZhbHNlLFxuICAgICAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXG4gICAgICAgIGNhbklVc2VHZXRVc2VyUHJvZmlsZTogZmFsc2UsXG4gICAgICAgIGNhbklVc2VPcGVuRGF0YTogd3guY2FuSVVzZSgnb3Blbi1kYXRhLnR5cGUudXNlckF2YXRhclVybCcpICYmIHd4LmNhbklVc2UoJ29wZW4tZGF0YS50eXBlLnVzZXJOaWNrTmFtZScpIC8vIOWmgumcgOWwneivleiOt+WPlueUqOaIt+S/oeaBr+WPr+aUueS4umZhbHNlXG4gICAgfSxcbiAgICAvLyDkuovku7blpITnkIblh73mlbBcbiAgICBiaW5kVmlld1RhcCgpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICB1cmw6ICcuLi9sb2dzL2xvZ3MnLFxuICAgICAgICB9KVxuICAgIH0sXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmICh3eC5nZXRVc2VyUHJvZmlsZSkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBjYW5JVXNlR2V0VXNlclByb2ZpbGU6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldFVzZXJQcm9maWxlKCkge1xuICAgICAgICAvLyDmjqjojZDkvb/nlKh3eC5nZXRVc2VyUHJvZmlsZeiOt+WPlueUqOaIt+S/oeaBr++8jOW8gOWPkeiAheavj+asoemAmui/h+ivpeaOpeWPo+iOt+WPlueUqOaIt+S4quS6uuS/oeaBr+Wdh+mcgOeUqOaIt+ehruiupO+8jOW8gOWPkeiAheWmpeWWhOS/neeuoeeUqOaIt+W/q+mAn+Whq+WGmeeahOWktOWDj+aYteensO+8jOmBv+WFjemHjeWkjeW8ueeql1xuICAgICAgICB3eC5nZXRVc2VyUHJvZmlsZSh7XG4gICAgICAgICAgICBkZXNjOiAn5bGV56S655So5oi35L+h5oGvJywgLy8g5aOw5piO6I635Y+W55So5oi35Liq5Lq65L+h5oGv5ZCO55qE55So6YCU77yM5ZCO57ut5Lya5bGV56S65Zyo5by556qX5Lit77yM6K+36LCo5oWO5aGr5YaZXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXG4gICAgICAgICAgICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGdldFVzZXJJbmZvKGU6IGFueSkge1xuICAgICAgICAvLyDkuI3mjqjojZDkvb/nlKhnZXRVc2VySW5mb+iOt+WPlueUqOaIt+S/oeaBr++8jOmihOiuoeiHqjIwMjHlubQ05pyIMTPml6XotbfvvIxnZXRVc2VySW5mb+WwhuS4jeWGjeW8ueWHuuW8ueeql++8jOW5tuebtOaOpei/lOWbnuWMv+WQjeeahOeUqOaIt+S4quS6uuS/oeaBr1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgdXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxuICAgICAgICAgICAgaGFzVXNlckluZm86IHRydWVcbiAgICAgICAgfSlcbiAgICB9XG59KVxuIl19