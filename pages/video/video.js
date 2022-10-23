// pages/video/video.js
import { getMVList } from "../../api/video";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    mvListData: [],
    offset: 0,
    limit: 20,
    hasMore: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.loadMVList();
  },
  async loadMVList() {
    const { data, hasMore } = await getMVList({
      limit: this.data.limit,
      offset: this.data.offset,
    });
    this.setData({
      mvListData: [...this.data.mvListData, ...data],
      hasMore,
    });
  },
  onPullDownRefresh() {
    this.setData({
      mvListData:[],
      offset:0
    })
    this.loadMVList().then(
      wx.stopPullDownRefresh()
    )


  },
  onReachBottom() {
    if (!this.data.hasMore){
      wx.showToast({
        title:'没有更多数据了',
        icon:'none',
        mask:true,
        duration:1000
      })
      return
    }
    this.setData({
      offset:this.data.offset+this.data.limit
    })
    this.loadMVList()
  }

});
