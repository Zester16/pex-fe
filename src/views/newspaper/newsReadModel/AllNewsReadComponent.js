import NewsReadIndividualModel from "./NewsReadIndividualModel"
import {React,useState} from "react"


function NewsReadComponent(props){
    return(<div>

<table>
        <thead>
          <tr>
            <th scope = "col"> Logo</th>
            <th scope = "col">Name</th>
            <th scope="col">Read At</th>
            <th scope="col">status</th>
        </tr>
        </thead>
        <tbody>
          {props.newsRead.map((read) => {
            return (<NewsReadIndividualModel 
                id={read.Id}
                read_at={read.read_at}
                name={read.name}
                image_url={read.image_url}
            />)})}
            </tbody>
    </table>    
    </div>)
}

export default NewsReadComponent