import React from 'react'
import { useGetTodos2 } from '../../service/query/useGetTodos2'

export const Pagination = () => {
    const [page, setPage]= React.useState(1)
    const {data, isLoading} = useGetTodos2(page)
    const buttons = Math.ceil(Number(data?.dataSize)/Number(data?.limit));
   
  return (
    <div>
        {Array(buttons ? buttons : 0).fill(null).map((_,i) => 
        <button key={i} onClick={()=> setPage(i+1)} className={`px-3 ${page === i+1 ? "bg-red-300" : "bg-green-400"}`}>{i+1}</button>
        )}
    </div>
  )
}
