import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import  "./weather.css"
import {useState} from "react"
import WeatherInfo from "./WeatherInfo"
import Alert from '@mui/material/Alert';


export default function Weather(){
    
    let[input,setInput]=useState("");
    let [data,setData]=useState("");
    let [error,setError]=useState("");

    let url=`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=b7358ae9ce8e17718821e2271dc6014a&units=metric`;

   const handelInput=(e)=>{
    console.log(e.target.value)
    setInput(e.target.value)

   }

   const handleSubmit=async(e)=>{
    e.preventDefault();

    let response=await fetch(url);
    let jsonResponse=await response.json();
    console.log(jsonResponse);
   
    
        if(jsonResponse.cod != 200){
       setError(jsonResponse.message);
       setData("")
        }
        else{
         setData(jsonResponse);
         setError("")
        }

        setInput("")
    

}

    return (
        <div className="container">
            <h1>weather app</h1>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="Enter city" variant="outlined"  value={input} onChange={handelInput}/>
                <br></br><br></br>
                <Button variant="contained" type="submit">Search</Button>
              
                {data && <WeatherInfo detail={data} />}

                
                {error && <p> <Alert severity="error" sx={{ mt: 2,width: 400,mx: "auto",textAlign: "center"}} >{error}.</Alert></p>}

               

            </form>






        </div>
    )
}