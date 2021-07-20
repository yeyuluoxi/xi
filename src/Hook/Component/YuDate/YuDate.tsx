import React, {useState} from "react";
import "./YuDate.less";

import rightIcon from "../../../Assets/image/right.png";
import dateList from "./DateList";
import {DateProps} from "../../../Type/THook";

const YuDate = ({date, gDate = () => {}}: DateProps) => {
  if(!date){
    const now = new Date();
    date = `${now.getFullYear()}-${now.getMonth() + 1}`;
  }
  const [year, month, day = 0] = date.split("-").map(elem => parseInt(elem));
  const [yearVal, setYear] = useState<number>(year);
  const [monthVal, setMonth] = useState<number>(month);

  const setActive = (dayVal: number, type: boolean) =>{ //判断是否被选中
    if(type && yearVal === year && monthVal === month && dayVal === day) return "active";
    return "";
  };

  const fDay = (dayVal: number, type: "before" | "now" | "after") => {
    let newYear = yearVal, newMonth = monthVal;
    if(type === "before"){
      if(newMonth === 1){
        newYear--;
        newMonth = 12;
      } else newMonth--;
    }
    if(type === "after"){
      if(newMonth === 12){
        newYear++;
        newMonth = 1;
      } else newMonth++;
    }
    gDate(`${newYear}-${newMonth < 10 ? "0" : ""}${newMonth}-${dayVal < 10 ? "0" : ""}${dayVal}`);
    setYear(newYear);
    setMonth(newMonth);
  };

  const getDayList = () => {
    const list = dateList(yearVal, monthVal);
    return list.map(elem => (
      <div
        styleName={`item ${elem.type}`}
        className={setActive(elem.day, elem.type === "now")}
        key={`${elem.type}_${elem.day}`}
        onClick={() => fDay(elem.day, elem.type)}
      >{elem.day}</div>
    ));
  };

  return (
    <div styleName="modeDate">
      <div styleName="title">
        <div
          styleName="left"
          onClick={() => setYear(yearVal - 1)}
        ><img src={rightIcon} alt=""/></div>
        <div styleName="info">{yearVal} 年</div>
        <div
          styleName="right"
          onClick={() => setYear(yearVal + 1)}
        ><img src={rightIcon} alt=""/></div>
        <div
          styleName="left"
          onClick={() => setMonth(monthVal - 1)}
        ><img src={rightIcon} alt=""/></div>
        <div styleName="info">{monthVal} 月</div>
        <div
          styleName="right"
          onClick={() => setMonth(monthVal + 1)}
        ><img src={rightIcon} alt=""/></div>
      </div>
      <div styleName="day">
        {["日", "一", "二", "三", "四", "五", "六"].map(elem => (
          <div
            styleName="item"
            key={elem}
          >{elem}</div>
        ))}
        {getDayList()}
      </div>
    </div>
  );
};

export default YuDate;