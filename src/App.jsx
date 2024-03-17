import { Card } from "./components/card"
import { useGetTodos } from "./service/query/useGetTodos"
import React from "react"
import useDebounce from "./hook/useDebounce"



function App() {
const [input, setInput] = React.useState('')
const value = useDebounce(input)
const {data, isLoading } = useGetTodos(value)
console.log(value);
  return (
    <div className="container">
      <div className=" w-[800px] mr-auto ml-auto mb-4">
        <input className="w-[800px] outline-none border-2 border-violet-300 px-6 py-2" onChange={(e)=> setInput(e.target.value)} value={input} placeholder="Search..." type="text" />
      </div>
      <div className="just gap-3">
      {data?.map((item)=> <Card key={item.id} {...item}/>)}
      </div>
    </div>
  )
}

export default App
