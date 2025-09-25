import { React, useEffect, useState } from "react";
import newtwork from "../../../network/newspaperNetwork";
import useAuth from "../../../hooks/useAuthHook";
import TableView from "../../templateViews/TableView";
export default function ShowAllNewspaperModel() {
  const { errorHandler, getToken } = useAuth();
  const [lastId, setLastId] = useState("");
  const [totalNewspaperCount, setTotalNewspaperCount] = useState(0);
  //const [currentCount, setCurrentCount] = useState(0);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [newspapers, setNewspapers] = useState([]);

  useEffect(() => {getAllNewspapers()}, []);

  //function handles newspaper loading logic for pagination
  async function setMoreNewsLogic(newspaperList,currentCount,total,notFirstLoad=false){
    const lastElement = newspaperList.at(-1)
    setLastId(lastElement.id)
    if(!notFirstLoad){
      setTotalNewspaperCount(total)
    }
    if(currentCount===total){
      setButtonVisible(false)
    }else{
      setButtonVisible(true)
    }
    
  }

  async function getAllNewspapers(id,notFirstRun) {
    try{
      //console.log("lets get paginated newspapers")
        const token = getToken()
        let currentLength
        let response
        if(id){
          response = await newtwork.getAllNewspaper(token,id)
          const updatedNewspaperList = [...newspapers,...response.data] 
          currentLength = updatedNewspaperList.length
          setNewspapers([...updatedNewspaperList])
       
        }else{
          response = await newtwork.getAllNewspaper(token)
          setNewspapers([...response.data])
          currentLength=response.data.length
        }
        
       //console.log(newspapers) 
       setMoreNewsLogic(response.data,currentLength,response.total,notFirstRun)
        //:setMoreNewsLogic(response.data,response.total,false)

    }catch(error){
      console.log("AllNewspaperModel error",error)
        alert(error)
    }  

  }

  function loadMoreButton(){
    if (newspapers.length >=totalNewspaperCount){
      alert("There are no more newspapers")
      setButtonVisible(false)
    }else{
      setButtonVisible(false)
      const id = lastId
      //console.log(lastId)
      getAllNewspapers(id,true)
    }

  }
const  headers = ["Name","Image Url","Total Read"]
  return(<div>
<h1>Newspapers </h1>
<TableView headers={headers} rows={newspapers.map((news)=>{return {id:news.id,name:news.name,imageUrl:news.image_url,totalRead:news.total_read}})}/>
{/* {newspapers.map((news)=>{return <div key={news.id}>{news.name}</div>})} */}
    <button style={{ display: buttonVisible ?  'block' :'none'}}onClick={()=>{loadMoreButton()}}>Load More</button>
  </div>)
}
