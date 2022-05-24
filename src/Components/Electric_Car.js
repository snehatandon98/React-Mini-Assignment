import React,{useState, useEffect} from 'react'
import '../App.css'

function Electric_Car(){
    useEffect(() => {
            FetchItems();
        },[]);
    
    const [items, setItems] = useState()

    const FetchItems=async()=>{

        const data = await fetch('https://private-anon-f3930cb735-carsapi1.apiary-mock.com/manufacturers');
        const items = await data.json();
        console.log(items)
        setItems(items)

       
    }
    return(
        <div>
            {items?.map(item =>
                <h1 key={item.id}>{item.name}</h1>
                )}
        </div>
    ) 
}

/*https://private-anon-f3930cb735-carsapi1.apiary-mock.com/manufacturers*/
export default Electric_Car;