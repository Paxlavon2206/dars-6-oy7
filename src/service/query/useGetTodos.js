import { useQuery } from "@tanstack/react-query";
import {request} from "../../config/request";


export const useGetTodos = (id) => {
  return useQuery ({
    queryKey:[ "todos", id ],
    queryFn:()=>{
      return  request.get("/todos").then((res)=> res.data)
    },
  })
}
