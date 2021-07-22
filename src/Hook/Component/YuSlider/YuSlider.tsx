import React, {MouseEventHandler, useEffect, useState} from "react";
import "./YuSlider.less";

interface SList{
  list: string[], //  列表
  val: string,  //  选中项
  sVal: Function  //  回调事件
}

const YuSlider = ({list, val, sVal}: SList) => {
  const itemWidth: number = 150;  //  选项宽度
  const [status, setStatus] = useState<boolean>(false); //  鼠标状态
  const [start, setStart] = useState<number>(0);  //  开始位置
  const [move, setMove] = useState<number>(0);  // 偏移量
  const [width, setWidth] = useState<number>(0); //  父元素宽度
  const totalLength = itemWidth * list.length; // 子元素宽度
  const [max, setMax] = useState<number>(0);  //  可移动的最大值

  const judge = (num: number) => {
    num = Math.min(num, max);   //  不能超过可移动的最大值
    num = Math.max(0, num);   //  不能小于0
    return num;
  };

  const rightRef = React.createRef<HTMLDivElement>();
  useEffect(() => {
    if(rightRef && rightRef.current){
      const pWidth = rightRef.current.clientWidth;
      setWidth(pWidth);
      setMax(totalLength - pWidth);
    }
  }, []);

  const selectItem = (val: string, index?: number) => {
    if(status) return;
    if (index === undefined) index = list.indexOf(val);
    if ((index + 2) * itemWidth > width) {
      setMove(judge((index + 2) * itemWidth - width));
    } else  setMove(0);
    sVal(val);
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
              styleName={`item ${val === item ? "active" : ""}`}
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