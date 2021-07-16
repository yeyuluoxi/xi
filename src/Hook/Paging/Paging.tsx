import React, {ChangeEvent, FocusEvent, KeyboardEvent} from "react";
import "./Paging.less";

interface PageProps{
  page: number, //  当前页码
  pageTotal: number,  //  总页数
  changePage: Function,  //   切换页码
  total?: number,  //  总条数
  interval?: number   //  点省略时向前或后跳转页数,默认5
}

const Paging = ({page, changePage, pageTotal, total = 0, interval = 5}: PageProps) => {
  const dealChange = (current: number) => {
    switch (current){
      case -1:
        changePage(Math.max(1, page - interval));
        break;
      case -2:
        changePage(Math.min(pageTotal, page + interval));
        break;
      default:
        changePage(current);
    }
  };

  const setPage = () => {
    const list: number[] = [1];
    if(pageTotal <=7){
      let order = 1;
      while (order < pageTotal){
        list.push(++order);
      }
    }else if(page <= 4){
      list.push(2, 3, 4, 5, 6, -2, pageTotal);
    }else if(page < pageTotal - 3){
      list.push(-1, page - 2, page -1, page, page + 1, page + 2, -2, pageTotal);
    }else{
      list.push(-1, pageTotal - 5, pageTotal - 4, pageTotal - 3, pageTotal - 2, pageTotal - 1, pageTotal);
    }

    return (
      list.map(elem => (
        <li onClick={() => dealChange(elem)} styleName={elem === page ? "active" : ""} key={elem}>{[-1, -2].includes(elem) ? "..." : elem}</li>
      ))
    );
  };

  let val: string = "";
  const initVal = (event: HTMLInputElement) => val = event?.value || "";

  const setVal = (event: ChangeEvent) => val = (event.target as HTMLInputElement).value || "";

  const getVal = (deal: boolean) => {
    return (event: KeyboardEvent | FocusEvent) => {
      if(deal || (event as KeyboardEvent).key === "Enter") {
        // val = (event.target as HTMLInputElement).value || "";
        if(val){
          let result: number = parseInt(val);
          if(result < 1) result = 1;
          if(result > pageTotal) result = pageTotal;
          (event.target as HTMLInputElement).value = String(result);
          if(page !== result) changePage(result);
          return;
        }
        (event.target as HTMLInputElement).value = "";
      }
    };
  };

  //  只有一页则不显示分页
  if(pageTotal <= 1) return null;
  return (
    <div styleName="modePage">
      <div styleName="number">
        {   //  无总条数时不显示
          total ?
            <div
              styleName="total"
            >共{total}条</div>
            : ""
        }
        <ul styleName="page">
          {setPage()}
        </ul>
        <div
          styleName="toPage"
        >
          前往
          <input ref={initVal} type="number" onChange={setVal} onBlur={getVal(true)} onKeyDown={getVal( false)}/>
          页
        </div>
      </div>
    </div>
  );
};

export default Paging;