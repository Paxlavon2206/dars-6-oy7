import { useQuery } from "@tanstack/react-query";
import {request} from "../../config/request";


export const useGetTodos2 = (page = 1) => {
  return useQuery ({
    queryKey:[ "todos", page ],
    queryFn:()=>
        request.get("/todos", {params:{ _page: page, _limit: 4}}).then((res)=> 
        {
          return {
            limit: res.config.params._limit,
            data:res.data,
            dataSize: res.headers.get("X-Total-Count"),
        };
        }
        )
    
  })
}
