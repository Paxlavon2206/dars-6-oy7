import React from "react";
import { Card } from "../../components/card";
import { useGetTodos } from "../../service/query/useGetTodos";
import useDebounce from "../../hook/useDebounce";
import Pakhlavon_logo from "/hercules_logo.png";
import search from "/research.png";
import Skeleton from "react-loading-skeleton";

export const Homework = () => {
  const [input, setInput] = React.useState("");
  const value = useDebounce(input);
  const { data, isLoading } = useGetTodos(value);

  return (
    <div className=" bg-violet-100">
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
        {isLoading ? (
          <Skeleton count={5} />
        ) : (
          <div className="just gap-3">
            {data?.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
