import { useQuery } from "@tanstack/react-query";
import {request} from "../../config/request";


export const useGetTodos = (value) => {
  return useQuery ({
    queryKey:[ "todos", value ],
    queryFn:()=>
        request.get("/todos", {params:{ title_like: value}}).then((res)=> res.data)
    
  })
}
