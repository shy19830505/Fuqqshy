App({
    data: {
        deviceInfo: {}
    },

    onLaunch() {
        let storage_item = wx.getStorageSync('save-item');
        if (storage_item) {
            this.globalData = storage_item
        }

        let logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        //获取用户信息
        wx.getSetting({
            success: (res) => {
                if (res.authSetting['scope.userInfo']) {
                    //如果已经授权，可以直接调用getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: (res: any) => {
                            this.globalData.userInfo = res.userInfo;

                            // if (this.userInfoReadyCallback) {
                            //     this.userInfoReadyCallback(res);
                            // }
                        }
                    })
                }
            }
        })

        let that = this;
        wx.getSystemInfo({ //获取页面信息
            success: (res) => {
                wx.setStorageSync('systemInfo', res);
                that.globalData.statusBarHeight = res.statusBarHeight;
                that.globalData.screenHeight = res.screenHeight;
                this.globalData.systeminfo = res;
            }
        })

    },
    saveItem() {
        wx.setStorageSync('save-item', this.globalData)
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

})