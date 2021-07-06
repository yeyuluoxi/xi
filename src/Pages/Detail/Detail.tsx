import React from "react";

function Detail(params: any) {
  console.log(params, "params");
  return (
    <div className="App">
      <div>Detail</div>
      <div
        className="link"
        onClick={() => params.history.push("Text")}
      >
        主页
      </div>
    </div>
  );
}

export default Detail;