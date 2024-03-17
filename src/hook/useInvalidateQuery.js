import React from 'react'
import { client } from '../main'


export const useInvalidateQuery = () => {
    const invalidate = (keyword) =>{
        client.invalidateQueries({
            queryKey:[...keyword]
        })
    }
  return {invalidate}
}
