import {React,useEffect} from "react"
import{formatLocalDateFromEpoch} from "../../../utils/timeFormat"
import NewsReadUpdateReadModel from "./updateModel/NewsReadUpdateReadModel"

import {newsReadToFeEnum} from "../../../utils/newsreadConverters"
export default function NewsReadIndividualModel(props){

    return(
     <tr>
      <td> <img src={props.image_url} alt={props.name} height="50px"width="100px"/></td>
      <td>{formatLocalDateFromEpoch(props.read_at)}</td>
      <td>{props.name}</td>
      <td onClick={()=>{props.displayModal(props.newsread)}}>{newsReadToFeEnum(props.read_status)}</td>
    </tr>
    )
}