import axios from 'axios';
import { API_URL } from '../Constants/const';

export function getProduct(){
    const prom =  new Promise((res,rej)=>{
        try{
            axios.get(API_URL)
            .then((response)=>{
                let FirstTen = [];
                if(response.data) {
                    FirstTen = response.data.slice(0,10);
                }
                res(FirstTen);
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

