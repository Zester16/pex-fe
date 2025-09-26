import {React,useState} from "react"
import TableRowModel from "./TableRowModel"
import closeImage from "../../assets/close.svg"


/**
 * 
 * @param {*} props 
 * @returns props has three parts props:{header:[],rows:[],closeModel:funcToClose } 
 */
export default function TableView(props){

    return(<div>
        {props.closeModel? <img src={closeImage} onClick={props.closeModel} />:<></>}
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