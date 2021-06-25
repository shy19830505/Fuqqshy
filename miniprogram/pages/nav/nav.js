"use strict";
var app = getApp();
Component({
    options: {
        multipleSlots: true
    },
    properties: {
        backgroundColor: {
            type: String,
            value: 'rgba(0,0,0,0)'
        }
    },
    data: {},
    ready: function () {
        var _a = app.globalData, statusBarHeight = _a.statusBarHeight, navBarHeight = _a.navBarHeight;
        this.setData({
            statusBarHeight: statusBarHeight,
            navBarHeight: navBarHeight
        });
    },
    methods: {
        back: function () {
            wx.navigateBack({
                delta: 1
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQTtBQUNwQixTQUFTLENBQUM7SUFDTixPQUFPLEVBQUU7UUFDTCxhQUFhLEVBQUUsSUFBSTtLQUN0QjtJQUNELFVBQVUsRUFBRTtRQUNSLGVBQWUsRUFBRTtZQUNiLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLGVBQWU7U0FDekI7S0FDSjtJQUNELElBQUksRUFBRSxFQUFFO0lBQ1IsS0FBSztRQUNHLElBQUEsS0FHQSxHQUFHLENBQUMsVUFBVSxFQUZkLGVBQWUscUJBQUEsRUFDZixZQUFZLGtCQUNFLENBQUM7UUFFbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULGVBQWUsaUJBQUE7WUFDZixZQUFZLGNBQUE7U0FDZixDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsSUFBSTtZQUNBLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ1osS0FBSyxFQUFFLENBQUM7YUFDWCxDQUFDLENBQUE7UUFDTixDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcHAgPSBnZXRBcHAoKVxuQ29tcG9uZW50KHtcbiAgICBvcHRpb25zOiB7XG4gICAgICAgIG11bHRpcGxlU2xvdHM6IHRydWVcbiAgICB9LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ3JnYmEoMCwwLDAsMCknXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6IHt9LFxuICAgIHJlYWR5KCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgc3RhdHVzQmFySGVpZ2h0LFxuICAgICAgICAgICAgbmF2QmFySGVpZ2h0XG4gICAgICAgIH0gPSBhcHAuZ2xvYmFsRGF0YTtcblxuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgc3RhdHVzQmFySGVpZ2h0LFxuICAgICAgICAgICAgbmF2QmFySGVpZ2h0XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGJhY2soKSB7XG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgIGRlbHRhOiAxXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufSkiXX0=