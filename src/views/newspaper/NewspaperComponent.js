import { React, useEffect, useState } from "react";
import newtwork from "../../network/newspaperNetwork";
import useAuth from "../../hooks/useAuthHook";
import AddNewsPaperModel from "./AddNewsPaperModel";
import ShowAllNewspaperModel from "./newspaperModel/AllNewspaperModel";
import AddNewsReadModel from "./AddNewsReadModel";

//Main Dashboard Showing newspapers and other data
export default function NewspaperComponent() {
  const [addNewsState, setAddNewsState] = useState(false); //for displaying add newspaper model
  const [addNewsReadState,setAddNewsReadState] = useState(false); //for displaying add newsread component
  const { errorHandler, getToken } = useAuth();
  //open and close model function
  function showAddNewsModel() {
    setAddNewsState(true);
  }
  function closeAddNewsModel() {
    setAddNewsState(false);
  }

    //open and close AddNewsRead model function
    function showAddNewsReadModel() {
      setAddNewsReadState(true);
    }
    function closeAddNewsReadModel() {
      setAddNewsReadState(false);
    }
  //handle create new newspaper
  async function addNewNewspaper(newsName, newsUrl, newsImage) {
    try {
      const token = getToken();
      const response = newtwork.addNewspaper(
        token,
        newsName,
        newsUrl,
        newsImage,
      );
      closeAddNewsModel()
    } catch (error) {
      const errorStatus = errorHandler(error);

      if (errorStatus) {
        addNewNewspaper(newsName, newsUrl, newsImage)
      }else{
        alert(error.data)
      }
    }
  }
  //add newspaper read

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
  return (
    <div>
      <div>
        <button onClick={showAddNewsModel}>Add Newspaper</button>
        <button onClick={showAddNewsReadModel}>Add News</button>
      </div>
      {addNewsState ? (
        <AddNewsPaperModel
          closeModel={closeAddNewsModel}
          addNewNewspaper={addNewNewspaper}
        />
      ) : (
        <></>
      )}
      {addNewsReadState?(<AddNewsReadModel closeModel={closeAddNewsReadModel} allNewspapers={getAllNewspapers}/>):(<></>)}
      <ShowAllNewspaperModel />
    </div>
  );
}
