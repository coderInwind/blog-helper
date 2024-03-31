import request from "../utils/request";

export function getBlogList() {
  return request({ method: "post", url: "blog/list" });
}
