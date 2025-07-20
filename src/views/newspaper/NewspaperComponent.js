import { React, useEffect, useState } from "react";
import newtwork from "../../network/newspaperNetwork";
import useAuth from "../../hooks/useAuthHook";
import AddNewsPaperModel from "./AddNewsPaperModel";
import ShowAllNewspaperModel from "./newspaperModel/AllNewspaperModel";

export default function NewspaperComponent() {
  const [addNewsState, setAddNewsState] = useState(false);
  const { errorHandler, getToken } = useAuth();
  //open and close model function
  function showAddNewsModel() {
    setAddNewsState(true);
  }
  function closeAddNewsModel() {
    setAddNewsState(false);
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
    } catch (error) {
      const errorStatus = errorHandler(error);

      if (errorStatus) {
      }
    }
  }
  return (
    <div>
      <div>
        <button onClick={showAddNewsModel}>Add Newspaper</button>
        <button>Add News</button>
      </div>
      {addNewsState ? (
        <AddNewsPaperModel
          closeModel={closeAddNewsModel}
          addNewNewspaper={addNewNewspaper}
        />
      ) : (
        <></>
      )}
      <ShowAllNewspaperModel />
    </div>
  );
}
