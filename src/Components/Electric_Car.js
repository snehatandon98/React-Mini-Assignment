import React,{useState, useEffect} from 'react'
import '../App.css'

function Electric_Car(){
    useEffect(() => {
            FetchItems();
        },[]);
    
    const FetchItems=async()=>{

        const data = await fetch('https://private-anon-f3930cb735-carsapi1.apiary-mock.com/manufacturers');
        const jsondata = await data.json();
        console.log(jsondata)
    }
    return(
        <div>
            <h1>Electric Cars</h1>
        </div>
    ) 
}

/*https://private-anon-f3930cb735-carsapi1.apiary-mock.com/manufacturers*/
export default Electric_Car;