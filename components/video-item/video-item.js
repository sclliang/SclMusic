// components/video-item/video-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemData: {
      type: Object,
      value: {},
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    /*
      item点击事件，跳转mv详情页面
     */
    onItemClick(){
      wx.navigateTo({
        url:'/subpkg/detail-video/detail-video?id='+this.properties.itemData.id
      })
    }
  },
});
