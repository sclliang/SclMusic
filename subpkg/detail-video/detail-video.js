import { getVideoUrl,getVideoDetail,getRelatedVideoData } from '../../api/video'

Page({
	data: {
		id:0,
		mvUrl:'',
		mvData:{},
		RelatedVideoList:[]
	},
	onLoad: function (options) {
		const id = options.id
		this.setData({
			id
		})
		this.loadVideoData()
		this.loadVideoDetail()
		this.loadRelatedVideoData()
	},
	/*
	获取视频地址
	 */
	async loadVideoData(){
		const res = await getVideoUrl(this.data.id)
		console.log(res)
		this.setData({
			mvUrl:res.data.url
		})
	},
	/*
	获取视频详情
	 */
	async loadVideoDetail(){
		const res = await getVideoDetail(this.data.id)
		console.log(res)
		this.setData({
			mvData:res.data
		})
	},
//	获取相关视频信息
	async loadRelatedVideoData(){
		const res = await getRelatedVideoData(this.data.id)
		console.log(res.data)
		this.setData({
			RelatedVideoList:res.data
		})
	}
});
