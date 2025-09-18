import { React, useEffect, useState } from "react";
import closeImage from "../../assets/close.svg"


/**
 * Modal handeling FE displays
 * @param {*} props 
 * @returns 
 */
export default function AddNewsPaperModel(props){
    const [newspaperName,setNewspaperName] = useState("")
    const [newspaperUrl,setNewspaperUrl]=useState("")
    const [newspaperImageUrl,setNewspaperImageUrl]=useState("")

    function closeModel(){
        props.closeModel()
    }

    function checkAndAddNews(evt){
        evt.preventDefault();
        
        if (newspaperImageUrl === "" || newspaperName===""|newspaperUrl==="" ){
            alert("Kindly fill all details")
        }else{
            if(!newspaperImageUrl.includes("https://")){
              alert("Image url is not a url")
            }
            else{
              props.addNewNewspaper(newspaperName,newspaperUrl,newspaperImageUrl)
            }
            
        }
    }
    return(<div>
        <img src={closeImage} onClick={closeModel} />
        <form onSubmit={checkAndAddNews}>
        <label htmlFor="newspapername">Newspaper Name: </label>
        <input
        name="newspapername"
            input={newspaperName}
            onChange={(e) => {
              setNewspaperName(e.target.value);
            }}
          />
          <div>
          <label htmlFor="newspaperurl">Newspaper Url: </label>
           <input
           name="newspaperurl"
            input={newspaperUrl}
            onChange={(e) => {
              setNewspaperUrl(e.target.value);
            }}
          />
          </div>
          
          <label htmlFor="newspaperimageurl">Newspaper Logo Url: </label>
            <input
            name="newspaperimageurl"
            input={newspaperImageUrl}
            onChange={(e) => {
              setNewspaperImageUrl(e.target.value);
            }}
          />
          <div>
            <button>submit</button>
          </div>
           
        </form>
    </div>)
}