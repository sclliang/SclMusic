import request from "../utils/request";

export function getMVList(data) {
  return request({
    url: "/top/mv",
    data,
  });
}
