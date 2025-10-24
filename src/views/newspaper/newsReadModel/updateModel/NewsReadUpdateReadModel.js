import {React,useEffect, useState} from "react"
import "../../../../css/modal.css"
import { newsReadEnum, newsReadToFeEnum } from "../../../../utils/newsreadConverters"

function NewsReadUpdateReadModel(props){
 const[newsread,setNewsread] = useState(props.newsread)
 const newsreadKeys=Object.keys(newsReadEnum).map((x)=> {return Number(x)})

function closeModal(){
    props.closeModal()
}
function updateNewsRead(newVal){
    alert(newVal)
    closeModal()
    props.updateNewsReadStatus(props.newsread.Id,newVal)

}
 return(<div className="modal-overlay">
 {console.log(newsreadKeys)}   
    <button onClick={
        closeModal}>Close</button>
    <div className="modal-content">
    <div>Update Read Status</div>
       {newsreadKeys.map((key)=>{return <div onClick={()=>{updateNewsRead(key)}}>{newsReadToFeEnum(key)}</div>})}
    </div>

 </div>)

}


export default NewsReadUpdateReadModel
