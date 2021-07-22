import React, {useState} from "react";
import YuDate from "@/Hook/Component/YuDate/YuDate";
import "./Date.less";

const Date = () => {
  const [date, setDate] = useState<string>("");
  const getDate = (val: string) => {
    setDate(val);
  };
  return (
    <div styleName="modeDate">
      <div styleName="title">日期选择</div>
      <div styleName="date">{date}</div>
      <YuDate date={date} gDate={getDate} />
    </div>
  );
};

export default Date;