import {YDateItem, YDateList} from "../../../Type/THook";

const maxList: number[] = [1, 3, 5, 7, 8, 10, 12];  //  31天月份
const minList: number[] = [4, 6, 9, 11];   //  30天月份

const getDays = (year: number, month: number) => {  //  求月份天数
  if(maxList.includes(month)) return 31;
  else if(minList.includes(month)) return 30;
  //  2月, 判断闰年
  return year % 400 === 0 || (year % 4 ===0 && year % 100 !== 0) ? 29 : 28;
};

const dateList: YDateList = (year, month) => {
  //  当前月份天数
  const now: number = getDays(year, month);
  //  上月天数
  const before: number = getDays(year, month - 1);
  //  月份减一
  month--;  
  const date: Date = new Date(year, month, 1);
  //  周几
  let weekDay: number = date.getDay();
  const result: YDateItem[] = [];
  while (weekDay > 0){
    weekDay--;
    result.push({
      type: "before",
      day: before - weekDay
    });
  }
  while (weekDay < now){
    weekDay++;
    result.push({
      type: "now",
      day: weekDay
    });
  }
  weekDay = 0;
  while (result.length < 42){
    weekDay++;
    result.push({
      type: "after",
      day: weekDay
    });
  }
  return result;
};
export default dateList;