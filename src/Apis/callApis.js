import axios from 'axios';
import { API_URL } from '../Constants/const';

export function getBlog(page,limit){
    const prom =  new Promise((res,rej)=>{
        try{
            axios.get(API_URL+'?_page='+page+'&_limit='+limit)
            .then((response)=>{
                if(response.data) {
                    res(response.data);
                }
            }).catch((response)=>{
                rej(response);
            });
        }
        catch(err){
            rej(err);
        }
    })
    return prom;
}

export function deleteBlog(id) {
    const prom =  new Promise((res,rej)=>{
        try{
            axios.delete(API_URL+'/'+id)
            .then((response)=>{
                console.log('console for delete' ,response);
                res(response);
            }).catch((response)=>{
                rej(response);
            });
        }
        catch(err){
            rej(err);
        }
    })
    return prom;    
}

