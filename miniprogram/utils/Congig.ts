export default function getServiceCongig(config: any, func: Function) {
    wx.request({
        url: ``,
        data: {
            config: config
        },
        method: 'POST',
        dataType: 'json',
        success: (res) => {
            func(res)
        }
    })
}