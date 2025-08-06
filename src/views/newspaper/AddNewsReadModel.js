import {React,useState,useEffect} from "react"



function AddNewsReadModel(props){
    const [selectedValue, setSelectedValue] = useState("");
    const [selectedDate,setSelectedDate]=useState("")
    const [newspaperList,setNewspaperList]= useState([])
    //handle change event for forms
    //handle newsaper dropdown
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };
      //handle date dropdown
      const handleSelectedDateChange = (event)=>{
        setSelectedDate(event.target.vlaue)
      }
      useEffect(()=>{
        setNewaperListFunc()
      },[])
      //get newspaper list for dropdown
      async function setNewaperListFunc(){
          let newspapers = await props.allNewspapers()
          setNewspaperList([...newspapers])
      }
   return(<div>
    <h2>Add Newspaper Read</h2>
    <div><label htmlFor="newspaper-dropdown">Choose an newspaper</label>
    <select id="newspaper-dropdown" value={selectedValue} onChange={handleChange}>
      {newspaperList.map((newspaper)=>{return <option value={newspaper.id}>{newspaper.name}</option>})}
    </select></div>
    <div>
      <label for="news-read-date">News Read Date:</label>
      <input type="date" id="news-read-date" name="news-read-date" value={selectedDate} onChange={handleSelectedDateChange }></input>
    </div>

    <p>Selected value: {selectedValue}</p>
  </div>) 
}

export default AddNewsReadModel