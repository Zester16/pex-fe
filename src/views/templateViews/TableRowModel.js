import {React,useState} from "react"



function TableRowModel(props){

    return(<tr>
    {Object.values(props.row).map(val=>{ return <td> {val}</td>})}
    </tr>)
}




export default TableRowModel