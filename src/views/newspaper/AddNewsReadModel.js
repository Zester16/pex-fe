import {React,useState,useEffect} from "react"
import closeImage from "../../assets/close.svg"


function AddNewsReadModel(props){
    const [selectedValue, setSelectedValue] = useState("");
    const [selectedDate,setSelectedDate]=useState("")
    const [newspaperList,setNewspaperList]= useState([])
    //handle change event for forms
    function closeModel(){
      props.closeModel()
  }
    //handle newsaper dropdown
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };
      //handle date dropdown
      const handleSelectedDateChange = (event)=>{
        setSelectedDate(event.target.value)
      }
      useEffect(()=>{
        setNewaperListFunc()
      },[])
      //get newspaper list for dropdown
      async function setNewaperListFunc(){
          let newspapers = await props.allNewspapers()
          setNewspaperList([...newspapers])
      }
      //to sumbmit what news was read
      async function addNewspaperRead(){
        if(selectedValue.length == 0){
          alert("Newspaper is not selected")
          return
        }
        if(selectedDate.length == 0){
          alert("Date is not selected")
          return
        }
        props.closeModel()
        const response = await props.addNewspaperRead(selectedValue,selectedDate)
        console.log("AddNewsReadModel",response)
        //if(response){
        //  props.closeModel()
        //}
      }
   return(<div>
    <h2>Add Newspaper Read</h2>
    <img src={closeImage} onClick={closeModel} />
    <div><label htmlFor="newspaper-dropdown">Choose an newspaper</label>
    <select id="newspaper-dropdown" value={selectedValue} onChange={handleChange}>
      {newspaperList.map((newspaper)=>{return <option value={newspaper.id}>{newspaper.name}</option>})}
    </select></div>
    <div>
      <label for="news-read-date">News Read Date:</label>
      <input type="date" id="news-read-date" name="news-read-date" value={selectedDate} onChange={handleSelectedDateChange }></input>
    </div>
    <button onClick={addNewspaperRead}>Add News Read</button>
    <p>Selected value: {selectedValue}</p>
    <p>Date Selected: {selectedDate}</p>
  </div>) 
}

export default AddNewsReadModel