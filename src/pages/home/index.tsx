import { useEffect } from "react"


const home =()=>{
    useEffect(()=>{
const regex =  /<([A-Z\s,]+)>/g;
console.log('<tr>asdasd<R>asdasd<Inter<T,AT,T>> <Acc>  aa </tr>'.replace(regex,'').replace(/<Inter>|<Acc>/g,''))
    },[])
    return <div>111</div>
}

export default home