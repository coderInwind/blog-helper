import { SearchBox } from "@fluentui/react/lib/SearchBox";
import { FocusZone } from "@fluentui/react-focus";
import { Nav } from "@fluentui/react/lib/Nav";
import "../style/menu.scss";
import { Icon } from "@fluentui/react/lib/Icon";
import { useSelector, useDispatch } from "react-redux";
import { changePlaneState } from "../store/appSlice";
import { RootStore } from "../store/index";

export default function menu() {
  const { planeOn } = useSelector((state: RootStore) => state.appReduce);

  const dispatch = useDispatch();
  const closeLeftPlane = () => {
    dispatch(changePlaneState(false));
  };

  const blogGroup = [
    {
      links: [
        {
          name: "我的啊啊啊",
          url: "http://msn.com",
          key: "key1",
          target: "_blank",
        },
        {
          name: "我的啊啊啊",
          url: "http://msn.com",
          key: "key1",
          target: "_blank",
        },
      ],
    },
  ];

  return (
    <div className={["menu-wrapper", planeOn ? "show-plane" : ""].join(" ")}>
      <div className="btn-group">
        <a className="btn" onClick={closeLeftPlane}>
          <Icon iconName="Back" />
        </a>
      </div>

      <SearchBox
        className="article-search"
        placeholder="搜索"
        onSearch={(newValue) => console.log("value is " + newValue)}
      />

      <div className="list-wrapper">
        <p className="title">
          <Icon iconName="KnowledgeArticle" />
          <span>全部文章</span>
        </p>

        <FocusZone>
          <Nav groups={blogGroup} />
        </FocusZone>
      </div>
    </div>
  );
}
