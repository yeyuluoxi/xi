import "./Home.less";
import React, {useState, useEffect} from "react";
import {connect, MapDispatchToPropsFunction} from "react-redux";
import Request from "../../Axios/request";
import {DatePicker, Table} from "antd";
import {ColumnType} from "antd/lib/table/interface";
import Paging from "../../Hook/Component/Paging/Paging";
import {linkTo, setTime} from "../../Hook/Method";
import {HomeItem, HomeProp} from "../../Type/Home";
import {Moment} from "moment";
import {YStore} from "../../Type/TStore";

function Home(props: HomeProp) {
// function Home(props: HomeProp) {
  console.log(props, "params");
  const [page, setPage] = useState<number>(5);
  const [list, setList] = useState<HomeItem[]>([]);
  const [date, setDate] = useState<Moment | null>(null);
  const getList = (page?: number) => {
    if(page) setPage(page);
    Request.HomeReq.getList<{list: HomeItem[]}>({
      page: page || 1,
      size: 15
    }).then((result) => {
      setList(result.data.list);
    });
  };
  const changePage = (val: number) => getList(val);

  const getTime = (date: any, val: string) => {
    if(val) setDate(setTime(val));
    else setDate(null);
    props.setVal(Math.floor(Math.random() * 100));
  };

  const columns: ColumnType<HomeItem>[] = [
    {title: "名称", dataIndex: "projectname"},
    {
      title: "来源",
      dataIndex: "source",
      render: (a) => {
        return (
          <div>{a}</div>
        );
      }
    }
  ];
  useEffect(() => {
    document.title = "主页";
    getList();
  }, []);

  const toDetail = () => {
    linkTo(props, "Detail", true);
  };
  const toText = () => {
    props.history.push("/Text");
  };

  return (
    <div styleName="modeHome">
      <div className="yButton" onClick={toDetail}>详情</div>
      <div>{props.val}</div>
      <div className="yButton" onClick={toText}>其他</div>
      <DatePicker value={date} onChange={getTime}/>
      <Table
        dataSource={list}
        rowKey="id"
        columns={columns}
      />
      <Paging  page={page} changePage={changePage} pageTotal={20} total={100}/>
    </div>
  );
}

const mapStateToProps = (state: YStore) => {
  return {
    val: state.val
  };
};

const mapDispatchToProps: MapDispatchToPropsFunction<any ,any> = (dispatch) => {
  return {
    setVal: (val: number) => dispatch({type: "Home", val})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
