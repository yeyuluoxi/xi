import React, {useState} from "react";
import YuDate from "../../Hook/Component/YuDate/YuDate";
import "./Date.less";

function Date() {

  const [dateVal, setDateVal] = useState<string>("");

  const getDate = (val: string) => {
    setDateVal(val);
  };

  return (
    <div styleName="modeDate">
      <div styleName="title">日期选择</div>
      <div styleName="date">
        {dateVal}
      </div>
      <YuDate date={dateVal} gDate={getDate} />
    </div>
  );
}

export default Date;