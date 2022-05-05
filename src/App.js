import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

const Result = (props) => {
  console.log("<Result>がレンダリングされました");
  return (
    <div className="result">
      {props.selectArea ? `選択したのは${props.selectArea}です。` : ""}
    </div>
  );
};

export default function App() {
  const areaData = [
    { name: "地域を選択してください", value: "" },
    { name: "東京", value: "東京" },
    { name: "神奈川", value: "神奈川" },
    { name: "埼玉", value: "埼玉" },
    { name: "千葉", value: "千葉" }
  ];

  // selectの初期値を指定
  const [selectArea, setSelectArea] = useState("東京");

  useEffect(() => {
    axios
      .get("https://m-kenomemo.com/sample/jparea.json")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  });

  // selectを変更した時
  const onChangeArea = (e) => {
    setSelectArea(e.target.value);
  };
  console.log("<ContentArea>がレンダリングされました");

  return (
    <div className="container">
      <section>
        <select onChange={onChangeArea} value={selectArea}>
          {areaData.map((area, index) => {
            return (
              <option key={index} value={area.value}>
                {area.name}
              </option>
            );
          })}
        </select>
      </section>
      <Result selectArea={selectArea} />
    </div>
  );
}
