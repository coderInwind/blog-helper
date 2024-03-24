import { useEffect, useState } from "react";
import "../style/nav.scss";
import { WindowStateListenerType } from "../schema-types";
import {useDispatch} from "react-redux"
import {changePlaneState} from "../store/appSlice"

export default function Navbar() {
  const [isMaximized, setIsMaximized] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    setIsMaximized(window.utils.isMaximized());
    window.utils.addWindowStateListener(WindowStateListencer);
  }, []);

  // 最小化
  const minimize = () => {
    window.utils.minimize();
  };

  const maximize = () => {
    window.utils.maximize();
    setIsMaximized(!isMaximized);
  };

  const close = () => {
    window.utils.close();
  };

  const WindowStateListencer = (
    type: WindowStateListenerType,
    state: boolean
  ) => {
    switch (type) {
      case WindowStateListenerType.Maximized:
        setIsMaximized(state);
        break

      case WindowStateListenerType.Minimiaed:
        setIsMaximized(state)
        break

      case WindowStateListenerType.Unmaximized:
        setIsMaximized(state)
     }
  };


  const openPlane = ()=>{
    dispatch(changePlaneState(true))
  }

  return (
    <div className="nav-wrapper">
      <div className="left-bar">
        <div className="btn" onClick={openPlane}>
          <i className="iconfont icon-hanbaobao"></i>
        </div>

        <span className="title"> <span>最新文章</span> </span>
      </div>

      <div className="right-bar">
        <div className="btn">
          <i className="iconfont icon-baocun"></i>
        </div>

        <div className="btn">
          <i className="iconfont icon-shezhi"></i>
        </div>

        <div className="line">|</div>

        <div className="btn" onClick={minimize}>
          <i className="iconfont icon-24gl-minimization"></i>
        </div>

        <div className="btn" onClick={maximize}>
          {isMaximized ? (
            <i className="iconfont icon-chuangkouhua1"></i>
          ) : (
            <i className="iconfont icon-chuangkouhua"></i>
          )}
        </div>

        <div className="btn" onClick={close}>
          <i className="iconfont icon-guanbi"></i>
        </div>
      </div>
    </div>
  );
}
