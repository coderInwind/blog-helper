import "../style/nav.scss";

export default function Navbar() {


  // 最小化
  const minimize = () => {

  };

  return (
    <div className="nav-wrapper">
      <div className="left-bar">
        <div className="btn">
          <i className="iconfont icon-hanbaobao"></i>
        </div>
        <span className="title">最新文章</span>
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

        <div className="btn" onClick={minimize}>
          <i className="iconfont icon-chuangkouhua"></i>
        </div>

        <div className="btn" onClick={minimize}>
          <i className="iconfont icon-guanbi"></i>
        </div>
      </div>
    </div>
  );
}
