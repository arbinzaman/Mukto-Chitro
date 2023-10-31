import { useEffect } from "react"

const UseTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - Mukto-Chitro`
    },[title])
}
 export default UseTitle