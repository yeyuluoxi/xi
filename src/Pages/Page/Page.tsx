import React, {useState} from "react";
import YuPage from "../../Hook/Component/YuPage/YuPage";

const Page = () => {
  const [page, setPage] = useState<number>(1);
  return (
    <div className="modeDate">
      <div className="title">分页</div>
      <div className="date">{page}</div>
      <YuPage page={page} pageTotal={20} changePage={setPage} />
    </div>
  );
};

export default Page;