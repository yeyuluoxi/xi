import "./Home.scss";
import React, {useState, useEffect} from "react";
import {connect, MapDispatchToPropsFunction} from "react-redux";
import {YStore} from "../../Type/TStore";
import Request from "../../Axios/request";
import {Table} from "antd";
import {RouterProps} from "react-router-dom";
import {ColumnType} from "antd/lib/table/interface";
import {HomeItem} from "../../Type/Home";
import Paging from "../../Hook/Paging/Paging";

function Home(props: RouterProps) {
  const [page, setPage] = useState(5);
  const [list, setList] = useState([]);
  const getList = (page?: number) => {
    Request.HomeReq.getList({
      page: page || 1,
      size: 15
    }).then((result) => {
      setList(result.data.list)
    })
  }
  const changePage = (val: number) => {
    setPage(val);
    getList(val)
  }
  const columns: ColumnType<HomeItem>[] = [
    {title: "名称", dataIndex: "RowKey"},
    {
      title: "合同价",
      dataIndex: "source",
      render: (a) => {
        return (
          <div>{a}</div>
        )
      }
    }
  ];
  useEffect(() => {
    document.title = "主页";
    getList()
  }, [])

  const toDetail = () => {
    props.history.push({
      pathname: "/Detail",
      state: {
        alive: true
      }
    })
  }
  const toText = () => {
    props.history.push("/Text");
  }

  return (
    <div className="modeHome">
      <div className="yButton" onClick={toDetail}>详情</div>
      <div className="yButton" onClick={toText}>其他</div>
      <Table
        dataSource={list}
        rowKey="RowKey"
        columns={columns}
      />
      <Paging  page={page} changePage={changePage} pageTotal={20} total={100}/>
    </div>
  );
}

const mapStateToProps = (state: YStore) => {
  return {
    val: state.val
  }
}

const mapDispatchToProps: MapDispatchToPropsFunction<any ,any> = (dispatch) => {
  const val = Math.floor(Math.random() * 100);
  return {
    setVal: () => dispatch({type: "Home", val})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
