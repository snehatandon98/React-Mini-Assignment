import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react'
import Electric_Car from './Components/Electric_Car';
import Footer from './Components/Footer';
import Header from './Components/Header';
import My_Bookings from './Components/My_Bookings';
import {BrowserRouter as Router, Switch, Route,Routes} from 'react-router-dom'

class App extends Component {
  render(){
    return(
      <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/electric_car' element={<Electric_Car/>}/>
          <Route path='/my_bookings' element={<My_Bookings/>}/>
      </Routes>
      <Footer/>
    </Router>
    </div>
    )
  }
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
