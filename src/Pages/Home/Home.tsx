import "./Home.less";
import React, {useState, useEffect} from "react";
import {connect, MapDispatchToPropsFunction} from "react-redux";
import Request from "../../Axios/request";
import {DatePicker, Table} from "antd";
import {RouterProps} from "react-router-dom";
import {ColumnType} from "antd/lib/table/interface";
import Paging from "../../Hook/Paging/Paging";
import {linkTo, dealTime} from "../../Hook/Method";
import {Moment, YStore, HomeItem} from "../../Type/TBoth";

function Home(props: RouterProps) {
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
    if(val) setDate(dealTime(val));
    else setDate(null);
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
  const val = Math.floor(Math.random() * 100);
  return {
    setVal: () => dispatch({type: "Home", val})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
