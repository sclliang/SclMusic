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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.loadMVList();
  },
  async loadMVList() {
    const res = await getMVList({
      limit: this.data.limit,
      offset: this.data.offset,
    });
    console.log(res);
  },
});
