import React, {useState} from "react";
import {Moment} from "moment";
import {setTime} from "../../Hook/Method";
import {DatePicker} from "antd";
import YuDate from "../../Hook/Component/YuDate/YuDate";

function Date() {
  const [date, setDate] = useState<Moment | null>(null);
  const getTime = (date: any, val: string) => {
    if(val) setDate(setTime(val));
    else setDate(null);
  };

  const [dateVal, setDateVal] = useState<string>("2021-7-20");

  const getDate = (...val: number[]) => {
    setDateVal(val.join("-"));
  };

  return (
    <div className="modeDetail">
      <DatePicker value={date} onChange={getTime} showToday={false} inputReadOnly={true}/>
      <div className="br">分隔</div>
      <YuDate date={dateVal} gDate={getDate} />
    </div>
  );
}

export default Date;