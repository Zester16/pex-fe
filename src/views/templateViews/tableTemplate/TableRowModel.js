import {React,useState} from "react"



function TableRowModel(props){

    return(<tr>
    {Object.keys(props.row).map(key=>{ 
        if(key != "id"){
            if (key.includes("image")){
                return <img src={props.row[key]} alt={props.row.id} height="50px"width="100px"/>
            }else{
                return <td id ={props.row.id} > {props.row[key]}</td>
            }
            }    
        }
        )}
    </tr>)
}




export default TableRowModel