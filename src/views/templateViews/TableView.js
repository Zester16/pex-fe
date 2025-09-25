import {React,useState} from "react"
import TableRowModel from "./TableRowModel"


/**
 * 
 * @param {*} props 
 * @returns props has two parts props:{header:[],rows:[] } 
 */
export default function TableView(props){

    return(<div>
        <table>
            <thead>
                <tr>
                    {props.headers.map((header)=>{return (<th scope = "col"> {header}</th>)})}
            </tr>
            </thead>
        <tbody>
        {props.rows.map(row=>{return  <TableRowModel row={row} />})}
        </tbody>
        </table>
        
    </div>)

}