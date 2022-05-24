import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react'
import Electric_Car from './Components/Electric_Car';
import Footer from './Components/Footer';
import Header from './Components/Header';
import My_Bookings from './Components/My_Bookings';
import {Link} from 'react-router-dom'

class App extends Component {
  render(){
    return(
      <div className="App">
        <Header />
        <Electric_Car />
        <router>
        
        </router>
      <Footer/>
    </div>
    )
  }
}

export default App;
