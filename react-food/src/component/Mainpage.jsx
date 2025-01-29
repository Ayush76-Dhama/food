import { useState } from "react"
import Mealcards from "./Mealcards";


const Mainpage = () => {

    const [data, setdata] = useState();
    const [search, setsearch] = useState();
    const [msg, setmsg] = useState("")


    const handleInput = (e) => {
        setsearch(e.target.value)
    }

    const Myfun = async () => {
        if (search == "") {
            setmsg("Please Enter Something")
        }
        else {
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            const jsondata = await get.json()
            // console.log(jsondata.meals)
            setdata(jsondata.meals)
            setmsg("")
        }


    }
    // console.log(data);






    return (
        <>
            <h1 className="head">Food Recipe App</h1>
            <div className="container">
                <div className="searchBar">
                    <input type=" text" placeholder="Enter any Dish " onChange={handleInput} />
                    <button onClick={Myfun}>Search</button>
                </div>
                <h4 className="error">{msg}</h4>
                <div>
                    <Mealcards detail={data} />
                </div>

            </div>
        </>
    )
}

export default Mainpage