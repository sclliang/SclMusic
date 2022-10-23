import request from "../utils/request";

//获取全部视频
export function getMVList(data) {
  return request({
    url: "/top/mv",
    data,
  });
}

//获取视频url
export function getVideoUrl(id){
  return request({
    url:'/mv/url',
    data:{
      id
    }
  })
}

//获取视频详情
export function getVideoDetail(mvid){
  return request({
    url:'/mv/detail',
    data:{
      mvid
    }
  })
}

//获取相关视频信息
export function getRelatedVideoData(id){
  return request({
    url:'/related/allvideo',
    data:{
      id
    }
  })
}

