import { useState } from "react";
import Navbar from "./component/nav";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "./store/index";
import { increment } from "./store/appSlice";

function App() {
  const { count } = useSelector((store: RootStore) => store.appReduce);

  const dispatch = useDispatch();

  const incrementHandl = () => {
    dispatch(increment());
  };

  return (
    <div>
      <Navbar />
      <p>{count}</p>
      <button onClick={incrementHandl}>点击+1</button>
    </div>
  );
}

export default App;
