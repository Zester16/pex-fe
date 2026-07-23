import { React, useState } from "react";
import { searchBooks} from "../../network/booksNetwork"
import useAuth from "../../hooks/useAuthHook";
function BooksComponent(){

    const [searchResult,setSearchResult]=useState([])
    const [query,setQuery] = useState("")
  const { errorHandler, getToken } = useAuth();
async function searchTitle(evt){
    const token=getToken()
    try{
        const queryResult = await searchBooks(token,query)
    setSearchResult(queryResult.data)
    }

    catch(error){
        const errorStatus = errorHandler(error);

        if (errorStatus) {
        return  searchBooks(token,query)
        }else{
          alert(JSON.stringify(error.data))
          console.log("error",error)
        }
    }

}

    return(<div>
<div>Search A Book</div>
<div>
    <input vaule={query} onChange={(evt)=>{setQuery(evt.target.value)}} />
    <button onClick={searchTitle}>Search Book</button>
    {searchResult.map((book)=>{return <div>
        <img src={book.coverImage} />
        <div> title: {book.title}</div>
    </div>})}
</div>
    </div>)
}


export default BooksComponent