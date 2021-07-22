import React, {useState} from "react";
import YuSlider from "@/Hook/Component/YuSlider/YuSlider";

const Slider = () => {
  const list: string[] = [
    "淅淅沥沥", "郁郁葱葱", "星星点点", "兢兢业业", "熙熙攘攘", "坎坎坷坷", "平平淡淡", "花花草草"
  ];
  const [val, setVal] = useState<string>(list[0]);
  return (
    <YuSlider list={list} val={val} sVal={setVal}/>
  );
};
export default Slider;