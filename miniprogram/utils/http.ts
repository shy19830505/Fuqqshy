const app = getApp();
export function getServiceCongig(config: any, func: Function) {
    {
        wx.request({
            url: app.globalData.host + "/Service/get_config",
            data: {
                config: config,
            },
            method: 'POST',
            dataType: 'json',
            success: (res) => {
                func(res);
            }
        })
    }
}

export function getCategory(func: Function) {
    // wx.request({
    //     url: app.globalData.host + "/Service/get_category",
    //     data: {
    //     },
    //     method: 'POST',
    //     dataType: 'json',
    //     success: (res) => {
    //         func(res);
    //     }
    // })
    let o = [
        {
            deleted: "0",
            id: "2",
            img: "http://shop.e-notice.cn/uploads/2020-07-29/5f2129f24fecb.jpg",
            name: "智能手机",
            path: "0/12/2",
            pid: "12",
            sort: "1",
            state: "1",
        },
        {
            deleted: "0",
            id: "25",
            img: "https://shop.e-notice.cn/uploads/2021-05-19/60a4aeaac0150.jpg",
            name: "333",
            path: "0/12/25",
            pid: "12",
            sort: "1",
            state: "1",
        }
    ]
    func(o);
}