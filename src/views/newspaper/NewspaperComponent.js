import { React, useEffect, useState } from "react";
import newtwork, { updateNewsRead } from "../../network/newspaperNetwork";
import useAuth from "../../hooks/useAuthHook";
import AddNewsPaperModel from "./AddNewsPaperModel";
import ShowAllNewspaperModel from "./newspaperModel/AllNewspaperModel";
import AddNewsReadModel from "./AddNewsReadModel";
import AllNewsReadComponnent from "./newsReadModel/AllNewsReadComponent";


//Main Dashboard Showing newspapers and other data
export default function NewspaperComponent() {
  //const [addNewsState, setAddNewsState] = useState(false); //for displaying add newspaper model
  //const [addNewsReadState,setAddNewsReadState] = useState(false); //for displaying add newsread component
  const [newsRead,setNewsread]=useState([])
  const { errorHandler, getToken } = useAuth();
  const [currentDashView,setCurrentDashView] = useState("null")

  const currentViewConstants={addNewspaper:"add-news-paper",addNewsRead:"add-newspaper-read",close:"null",newspaperList:"news-paper-list"}
  useEffect(()=>{setNewsReadInit()},[])
  //open and close model function
  function showAddNewsModel() {
    //setAddNewsState(true);
    setCurrentDashView(currentViewConstants.addNewspaper)
  }
  function closeCurrentView() {
    setCurrentDashView(currentViewConstants.close)
  }

    //open and close AddNewsRead model function
    function showAddNewsReadModel() {
      //setAddNewsReadState(true);
      setCurrentDashView(currentViewConstants.addNewsRead)
    }

    function showAllNewspapers(){
      setCurrentDashView(currentViewConstants.newspaperList)
    }

    //sets dashboard view as per selection
  function setMainView(){
    switch(currentDashView){
      case currentViewConstants.newspaperList:
        return <ShowAllNewspaperModel closeModel={closeCurrentView}/>
      case currentViewConstants.addNewsRead:
        return <AddNewsReadModel closeModel={closeCurrentView} allNewspapers={getAllNewspapers} addNewspaperRead={addNewspaperRead}/>
      case currentViewConstants.addNewspaper:
        return <AddNewsPaperModel
          closeModel={closeCurrentView}
          addNewNewspaper={addNewNewspaper}
        />
      default: return <AllNewsReadComponnent newsRead={newsRead} updateNewsReadStatus={updateNewsreadStatus}/>
    }
   
  }
    //***NETWORK HANDLE *****/
  //handle create new newspaper
  async function addNewNewspaper(newsName, newsUrl, newsImage) {
    try {
      const token = getToken();
      const response = await newtwork.addNewspaper(
        token,
        newsName,
        newsUrl,
        newsImage,
      );
    } catch (error) {
      const errorStatus = errorHandler(error);

      if (errorStatus) {
      return  addNewNewspaper(newsName, newsUrl, newsImage)
      }else{
        alert(JSON.stringify(error.data))
        console.log("error",error)
      }
    }
  
  }
  //add newspaper read
  async function addNewspaperRead(newspaperId,dateSelected){
      try{
        const token = getToken()
        //console.log(dateSelected)
        let dateTounix = Math.floor(new Date(dateSelected).getTime() / 1000)
        //console.log(dateTounix)
        const result = await newtwork.addNewsRead(token,newspaperId,dateTounix)
        //setAddNewsReadState(false)
        await setNewsReadInit()
        closeCurrentView()
        
      }
      catch(error){
        console.log("addNewsreadError:",error)
        //alert(JSON.stringify(error))
        if(error.statusCode ===1){
          alert(error.statusMessage)
        }
        //console.log(error)
        return null
      }
  }
  async function updateNewsreadStatus(newsreadId,status){
    try{
      const token = getToken()
      //console.log(dateSelected)
    
      //console.log(dateTounix)
      const result = await newtwork.updateNewsRead(token,newsreadId,status)
      //setAddNewsReadState(false)
      await setNewsReadInit()
      closeCurrentView()
      
    }
    catch(error){
      console.log("addNewsreadError:",error)
      //alert(JSON.stringify(error))
      if(error.statusCode ===1){
        alert(error.statusMessage)
      }
      //console.log(error)
      return null
    }
  }
//get newspapers list
async function getAllNewspapers(){
  try {
    const token = getToken();
    const response = await newtwork.getAllNewspapersNonPaginated(token)

    return response.data
    
  } catch (error) {
    const errorStatus = errorHandler(error);

    if (errorStatus) {
      return getAllNewspapers()
    }else{
      return []
    }
  }
}
//get all newsread list
async function getAllNewsRead(){
  try {
    const token = getToken();
    const response = await newtwork.getAllNewsReadNonPaginated(token)

    return response.data
    
  } catch (error) {
    const errorStatus = errorHandler(error);

    if (errorStatus) {
      return getAllNewsRead()
    }else{
      return []
    }
  }
}
async function setNewsReadInit(){
  const response = await getAllNewsRead()
  console.log("newsread response: ",response)
  setNewsread([...response])
}
//<ShowAllNewspaperModel />
  return (
    <div>                   
      <div>
        <button onClick={showAddNewsModel}>Add Newspaper</button>
        <button onClick={showAddNewsReadModel}>Add Newsread</button> 
        <button onClick={showAllNewspapers}>Show All Newspapers</button>
      </div>
      {setMainView()}
      
    </div>
  );
}
