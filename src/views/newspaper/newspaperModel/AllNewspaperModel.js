import { React, useEffect, useState } from "react";
import newtwork from "../../../network/newspaperNetwork";
import useAuth from "../../../hooks/useAuthHook";
export default function ShowAllNewspaperModel() {
  const { errorHandler, getToken } = useAuth();
  const [lastId, setLastId] = useState("");
  const [totalNewspaperCount, setTotalNewspaperCount] = useState(0);
  const [currentCount, setCurrentCount] = useState(0);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [newspapers, setNewspapers] = useState([]);

  useEffect(() => {getAllNewspapers()}, []);
  async function setMoreNewsLogic(newspaperList,total,notFirstLoad=false){
    const lastElement = newspaperList.at(-1)
    setLastId(lastElement.id)
    setTotalNewspaperCount(total)
    if(!notFirstLoad){
      setTotalNewspaperCount(total)
      setCurrentCount(2)
      //setCurrentCount(0)
    }
    // if(!notFirstLoad){
    //   setCurrentCount(0)
    // }
    
    setCurrentCount(currentCount+newspaperList.length)
    //console.log("cc:",newspapers.length,"tnc",totalNewspaperCount,"total",total)
    console.log(newspapers)
    if(newspapers.length>=total){
      setButtonVisible(false)
    }else{
      setButtonVisible(true)
    }
    
  }

  async function getAllNewspapers(id,notFirstRun) {
    try{
      console.log("lets get paginated newspapers")
        const token = getToken()
        let response
        if(id){
          response = await newtwork.getAllNewspaper(token,id)
          
          setNewspapers([...newspapers,...response.data])
       
        }else{
          response = await newtwork.getAllNewspaper(token)
          setNewspapers(response.data)
          setCurrentCount(response.data.length)
        }
        
       console.log(newspapers) 
        setMoreNewsLogic(response.data,response.total,notFirstRun)
        //:setMoreNewsLogic(response.data,response.total,false)

    }catch(error){
      console.log("AllNewspaperModel error",error)
        alert(error)
    }  

  }

  function loadMoreButton(){
    setButtonVisible(false)
    const id = lastId
    console.log(lastId)
    getAllNewspapers(id,true)
  }

  return(<div>
<div>This is newspaper component</div>
{newspapers.map((news)=>{return <div key={news.id}>{news.name}</div>})}
    <button style={{ display: buttonVisible ?  'block' :'none'}}onClick={()=>{loadMoreButton()}}>Load More</button>
  </div>)
}
