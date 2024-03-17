import React from "react";
import { Card } from "../../components/card";
import { useGetTodos } from "../../service/query/useGetTodos";
import useDebounce from "../../hook/useDebounce";
import Pakhlavon_logo from "/hercules_logo.png";
import search from "/research.png";
import Skeleton from "react-loading-skeleton";
import { useGetTodos2 } from "../../service/query/useGetTodos2";

export const Homework = () => {
  const [input, setInput] = React.useState("");
  const [page, setPage]= React.useState(1)
  const value = useDebounce(input);
  const {data:paginationData} = useGetTodos2(page);
  const { data:searchData, isLoading } = useGetTodos(value);
  const buttons = Math.ceil(Number(paginationData?.dataSize)/Number(paginationData?.limit));

  
  return (
    <div className=" bg-blue-100">
      <div className="container pt-[20px] pb-[20px]">
        <div className="flex mr-auto ml-auto mb-4 justify-between">
          <div className=" w-[200px]">
            <a href="/">
              <img src={Pakhlavon_logo} alt="img" /> {/*This is my new LOGO*/}
            </a>
          </div>
          <input
            className="w-[900px] outline-violet-500 border-2 border-violet-300 px-6 py-2"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Search..."
            type="text"
          />
          <div className=" w-11 flex items-center align-middle hover:scale-110">
            <button>
              <img src={search} alt="icon" />
            </button>
          </div>
        </div>
        <div className="mb-4">
        {Array(buttons ? buttons : 0).fill(null).map((_,i) => 
        <button key={i} onClick={()=> setPage(i+1)} className={`px-3 ${page === i+1 ? " bg-purple-500" : " bg-blue-400"}`}>{i+1}</button>
        )}
        </div>
        {isLoading ? (
          <Skeleton count={30} />
        ) : (
          <div className="just gap-3">
            {input == '' ? paginationData?.data.map((item) => (
                <Card 
                key={item.id}
                {...item}
                />
            )) : searchData?.map((item) => (
                <Card 
                key={item.id}
                {...item}
                />
            )) }
          </div>
        )}
      </div>
    </div>
  );
};
