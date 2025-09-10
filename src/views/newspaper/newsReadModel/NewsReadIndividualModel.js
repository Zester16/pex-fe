import {React,useEffect} from "react"
import{formatLocalDateFromEpoch} from "../../../utils/timeFormat"

export default function NewsReadIndividualModel(props){

    return(
     <tr>
      <td> <img src={props.image_url} alt={props.name} height="50px"width="100px"/></td>
      <td>{formatLocalDateFromEpoch(props.read_at)}</td>
      <td>{props.name}</td>
      <td></td>
    </tr>
    )
}