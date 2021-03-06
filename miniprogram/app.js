"use strict";
App({
    data: {
        deviceInfo: {}
    },
    onLaunch: function () {
        var _this = this;
        var storage_item = wx.getStorageSync('save-item');
        if (storage_item) {
            this.globalData = storage_item;
        }
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (res) {
                            _this.globalData.userInfo = res.userInfo;
                        }
                    });
                }
            }
        });
        var that = this;
        wx.getSystemInfo({
            success: function (res) {
                wx.setStorageSync('systemInfo', res);
                that.globalData.statusBarHeight = res.statusBarHeight;
                that.globalData.screenHeight = res.screenHeight;
                _this.globalData.systeminfo = res;
            }
        });
    },
    saveItem: function () {
        wx.setStorageSync('save-item', this.globalData);
    },
    globalData: {
        userInfo: {
            nikename: '点我登录',
            username: '点击登录',
            avatar: 'http://lucky-icon.meiweiyuxian.com/hio/default_avatar_big.png'
        },
        token: '',
        statusBarHeight: 0,
        screenHeight: 0,
        domain: 'https://shop.e-notice.cn',
        host: "https://shop.e-notice.cn/admin.php",
        systeminfo: {}
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxHQUFHLENBQUM7SUFDQSxJQUFJLEVBQUU7UUFDRixVQUFVLEVBQUUsRUFBRTtLQUNqQjtJQUVELFFBQVEsRUFBUjtRQUFBLGlCQXFDQztRQXBDRyxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xELElBQUksWUFBWSxFQUFFO1lBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUE7U0FDakM7UUFFRCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRWhDLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDVixPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNULElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO29CQUVuQyxFQUFFLENBQUMsV0FBVyxDQUFDO3dCQUNYLE9BQU8sRUFBRSxVQUFDLEdBQVE7NEJBQ2QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQzt3QkFLNUMsQ0FBQztxQkFDSixDQUFDLENBQUE7aUJBQ0w7WUFDTCxDQUFDO1NBQ0osQ0FBQyxDQUFBO1FBRUYsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDYixPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNULEVBQUUsQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDO2dCQUN0RCxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDO2dCQUNoRCxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7WUFDckMsQ0FBQztTQUNKLENBQUMsQ0FBQTtJQUVOLENBQUM7SUFDRCxRQUFRO1FBQ0osRUFBRSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ25ELENBQUM7SUFDRCxVQUFVLEVBQUU7UUFDUixRQUFRLEVBQUU7WUFDTixRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTTtZQUNoQixNQUFNLEVBQUUsK0RBQStEO1NBQzFFO1FBQ0QsS0FBSyxFQUFFLEVBQUU7UUFDVCxlQUFlLEVBQUUsQ0FBQztRQUNsQixZQUFZLEVBQUUsQ0FBQztRQUNmLE1BQU0sRUFBRSwwQkFBMEI7UUFDbEMsSUFBSSxFQUFFLG9DQUFvQztRQUMxQyxVQUFVLEVBQUUsRUFBRTtLQUNqQjtDQUVKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIkFwcCh7XG4gICAgZGF0YToge1xuICAgICAgICBkZXZpY2VJbmZvOiB7fVxuICAgIH0sXG5cbiAgICBvbkxhdW5jaCgpIHtcbiAgICAgICAgbGV0IHN0b3JhZ2VfaXRlbSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdzYXZlLWl0ZW0nKTtcbiAgICAgICAgaWYgKHN0b3JhZ2VfaXRlbSkge1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxEYXRhID0gc3RvcmFnZV9pdGVtXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbG9ncyA9IHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dzJykgfHwgW107XG4gICAgICAgIGxvZ3MudW5zaGlmdChEYXRlLm5vdygpKTtcbiAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ2xvZ3MnLCBsb2dzKTtcbiAgICAgICAgLy/ojrflj5bnlKjmiLfkv6Hmga9cbiAgICAgICAgd3guZ2V0U2V0dGluZyh7XG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xuICAgICAgICAgICAgICAgICAgICAvL+WmguaenOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqGdldFVzZXJJbmZvIOiOt+WPluWktOWDj+aYteensO+8jOS4jeS8muW8ueahhlxuICAgICAgICAgICAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm87XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2socmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgd3guZ2V0U3lzdGVtSW5mbyh7IC8v6I635Y+W6aG16Z2i5L+h5oGvXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3N5c3RlbUluZm8nLCByZXMpO1xuICAgICAgICAgICAgICAgIHRoYXQuZ2xvYmFsRGF0YS5zdGF0dXNCYXJIZWlnaHQgPSByZXMuc3RhdHVzQmFySGVpZ2h0O1xuICAgICAgICAgICAgICAgIHRoYXQuZ2xvYmFsRGF0YS5zY3JlZW5IZWlnaHQgPSByZXMuc2NyZWVuSGVpZ2h0O1xuICAgICAgICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS5zeXN0ZW1pbmZvID0gcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfSxcbiAgICBzYXZlSXRlbSgpIHtcbiAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3NhdmUtaXRlbScsIHRoaXMuZ2xvYmFsRGF0YSlcbiAgICB9LFxuICAgIGdsb2JhbERhdGE6IHtcbiAgICAgICAgdXNlckluZm86IHtcbiAgICAgICAgICAgIG5pa2VuYW1lOiAn54K55oiR55m75b2VJyxcbiAgICAgICAgICAgIHVzZXJuYW1lOiAn54K55Ye755m75b2VJyxcbiAgICAgICAgICAgIGF2YXRhcjogJ2h0dHA6Ly9sdWNreS1pY29uLm1laXdlaXl1eGlhbi5jb20vaGlvL2RlZmF1bHRfYXZhdGFyX2JpZy5wbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHRva2VuOiAnJyxcbiAgICAgICAgc3RhdHVzQmFySGVpZ2h0OiAwLFxuICAgICAgICBzY3JlZW5IZWlnaHQ6IDAsXG4gICAgICAgIGRvbWFpbjogJ2h0dHBzOi8vc2hvcC5lLW5vdGljZS5jbicsXG4gICAgICAgIGhvc3Q6IFwiaHR0cHM6Ly9zaG9wLmUtbm90aWNlLmNuL2FkbWluLnBocFwiLFxuICAgICAgICBzeXN0ZW1pbmZvOiB7fVxuICAgIH1cblxufSkiXX0=