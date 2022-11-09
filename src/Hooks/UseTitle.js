import { useEffect } from "react"

const UseTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - Chitro-Golpo`
    },[title])
}
 export default UseTitle