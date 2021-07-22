import React, {MouseEventHandler, useEffect, useState} from "react";
import "./YuSlider.less";

const YuSlider = () => {
  const list = [
    "企业资质", "财务指标", "备案评价", "企业荣誉", "历史业绩", "人员信息", "近期中标", "法律诉讼"
  ];
  const [move, setMove] = useState<number>(0);  // 偏移量
  const itemWidth: number = 150;
  const [status, setStatus] = useState<boolean>(false); //  鼠标状态
  const [start, setStart] = useState<number>(0);  //  开始位置
  const [max, setMax] = useState<number>(0);  //  可移动的最大值
  const [width, setWidth] = useState<number>(0); //  父元素宽度
  // const width = 750;  // 父元素宽度
  const [current, setCurrent] = useState<string>(""); // 当前选择
  const [totalLength] = useState<number>(itemWidth * list.length); // 子元素宽度

  const judge = (num: number) => {
    num = Math.min(num, max);   //  不能超过可移动的最大值
    num = Math.max(0, num);   //  不能小于0
    return num;
  };

  const rightRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    if(rightRef && rightRef.current){
      setWidth(rightRef.current.clientWidth);
      setMax(totalLength - width);
    }
  }, []);

  const selectItem = (val: string, index?: number) => {
    if (index === undefined) index = list.indexOf(val);
    if ((index + 2) * itemWidth > width) {
      setMove(judge((index + 2) * itemWidth - width));
    } else  setMove(0);
    setCurrent(val);
  };

  const startMove: MouseEventHandler<HTMLElement> = (even) => {
    setStart(even.clientX);
    setStatus(true);
  };

  const moveFor: MouseEventHandler<HTMLElement> = (event) => {
    if (status) {
      let num = move + start - event.clientX;
      setMove(judge(num));
      setStart(event.clientX);
    }
  };

  const startEnd = () => setStatus(false);

  return (
    <div
      styleName="list"
      ref={rightRef}
    >
      <div
        styleName="tab"
        style={{transform: `translateX(${-move}px)`}}
        onMouseDown={startMove}
        onMouseOver={moveFor}
        onMouseUp={startEnd}
        onMouseLeave={startEnd}
      >
        {
          list.map(item => (
            <div
              styleName={`item ${current === item ? "active" : ""}`}
              key={item}
              onClick={() => selectItem(item)}
            >{item}</div>
          ))
        }
      </div>
    </div>
  );
};


export default YuSlider;
// <template>
//   <div class="list">
//     <div
//       class="right"
//       ref="rightRef"
//     >
//       <div
//         class="tab"
//       :style="`transform: translateX(${-move}px)`"
//       @mousedown="startMove"
//       @mousemove="moveFor"
//       @mouseup="startEnd"
//       @mouseleave="startEnd"
//     >
//       <div
//         v-for="item in list"
//       :key="item"
//       :class="{active: current === item}"
//       class="item"
//       @click="selectItem(item)"
//     >
//       {{ item }}
//     </div>
//   </div>
// </div>
// </div>
// </template>
//   const rightRef = ref<HTMLElement | null>(null);