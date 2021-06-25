"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getServiceCongig(config, func) {
    wx.request({
        url: "",
        data: {
            config: config
        },
        method: 'POST',
        dataType: 'json',
        success: function (res) {
            func(res);
        }
    });
}
exports.default = getServiceCongig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZ2lnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ29uZ2lnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBd0IsZ0JBQWdCLENBQUMsTUFBVyxFQUFFLElBQWM7SUFDaEUsRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUNQLEdBQUcsRUFBRSxFQUFFO1FBQ1AsSUFBSSxFQUFFO1lBQ0YsTUFBTSxFQUFFLE1BQU07U0FDakI7UUFDRCxNQUFNLEVBQUUsTUFBTTtRQUNkLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLE9BQU8sRUFBRSxVQUFDLEdBQUc7WUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDYixDQUFDO0tBQ0osQ0FBQyxDQUFBO0FBQ04sQ0FBQztBQVpELG1DQVlDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U2VydmljZUNvbmdpZyhjb25maWc6IGFueSwgZnVuYzogRnVuY3Rpb24pIHtcbiAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBgYCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgY29uZmlnOiBjb25maWdcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgIGZ1bmMocmVzKVxuICAgICAgICB9XG4gICAgfSlcbn0iXX0=