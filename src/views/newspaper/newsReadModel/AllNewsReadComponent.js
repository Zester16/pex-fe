import NewsReadIndividualModel from "./NewsReadIndividualModel"
import {React,useState} from "react"
import NewsReadUpdateReadModel from "./updateModel/NewsReadUpdateReadModel"


function NewsReadComponent(props){
const [modalView,setModalView] = useState("table")
const [newsReadForModal,setNewsReadForModal]=useState({})
function displayModal(newsread){
  //console.log(newsread)
  setNewsReadForModal(newsread)
  setModalView("modal")
  
}

function closeModal(){
  
  setModalView("table")

}
return(<div>
{modalView==="table"?<table>
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
                newsread={read}
                id={read.Id}
                read_at={read.read_at}
                name={read.name}
                image_url={read.image_url}
                read_status={read.read_status}
                displayModal={displayModal}
            />)})}
            </tbody>
    </table>:<NewsReadUpdateReadModel newsread={newsReadForModal} closeModal={closeModal} updateNewsReadStatus={props.updateNewsReadStatus}/>}    
    </div>)
}

export default NewsReadComponent