import React, {useState} from "react";
import Paging from "../../Hook/Component/Paging/Paging";

const Page = () => {
  const [page, setPage] = useState<number>(1);
  return (
    <div className="modeDate">
      <div className="title">分页</div>
      <div className="date">{page}</div>
      <Paging page={page} pageTotal={20} changePage={setPage} />
    </div>
  );
};

export default Page;