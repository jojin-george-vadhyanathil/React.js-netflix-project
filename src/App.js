import React from 'react'
import Navabar from './Components/Navbar/Navabar'
import {orginals,actions,comedy,romance,horror,documentary,trending} from './urls'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import './Components/Login/Login'
import './App.css'
import Banner from './Components/Banner/Banner'
import Rawpost from './Components/Rawpost/Rawpost'
import Login from './Components/Login/Login'
function App() {
  return (
    <div>
      <Router>
        <Route  path="/signup">
          <Login/>
        </Route>
     
      <Route exact path="/" >
      <Navabar/>
      <Banner/>
      <Rawpost url={orginals} title="Netflix Orginals" />
      <Rawpost url={actions} title="Action" isSmall/>
      <Rawpost url={trending} title="Trending" isSmall/>
      <Rawpost url={romance} title="Romance" isSmall/> 
      <Rawpost url={comedy} title="Comedy" isSmall/> 
      <Rawpost url={horror} title="Horror" isSmall/> 
      <Rawpost url={documentary} title="Documentary" isSmall/> 
      <Rawpost url={actions} title="Action" isSmall/>
      <Rawpost url={trending} title="Trending" isSmall/>
      <Rawpost url={romance} title="Romance" isSmall/> 
      <Rawpost url={comedy} title="Comedy" isSmall/> 
      <Rawpost url={horror} title="Horror" isSmall/> 
      <Rawpost url={documentary} title="Documentary" isSmall/> 
      <Rawpost url={actions} title="Action" isSmall/>
      <Rawpost url={trending} title="Trending" isSmall/>
      <Rawpost url={romance} title="Romance" isSmall/> 
      <Rawpost url={comedy} title="Comedy" isSmall/> 
      <Rawpost url={horror} title="Horror" isSmall/> 
      <Rawpost url={documentary} title="Documentary" isSmall/> 
      <Rawpost url={actions} title="Action" isSmall/>
      <Rawpost url={trending} title="Trending" isSmall/>
      <Rawpost url={romance} title="Romance" isSmall/> 
      <Rawpost url={comedy} title="Comedy" isSmall/> 
      <Rawpost url={horror} title="Horror" isSmall/> 
      <Rawpost url={documentary} title="Documentary" isSmall/> 
      <Rawpost url={actions} title="Action" isSmall/>
      <Rawpost url={trending} title="Trending" isSmall/>
      <Rawpost url={romance} title="Romance" isSmall/> 
      <Rawpost url={comedy} title="Comedy" isSmall/> 
      <Rawpost url={horror} title="Horror" isSmall/> 
      <Rawpost url={documentary} title="Documentary" isSmall/> 
      <Rawpost url={actions} title="Action" isSmall/>
      <Rawpost url={trending} title="Trending" isSmall/>
      <Rawpost url={romance} title="Romance" isSmall/> 
      <Rawpost url={comedy} title="Comedy" isSmall/> 
      <Rawpost url={horror} title="Horror" isSmall/> 
      <Rawpost url={documentary} title="Documentary" isSmall/> 
      <Rawpost url={actions} title="Action" isSmall/>
      <Rawpost url={trending} title="Trending" isSmall/>
      <Rawpost url={romance} title="Romance" isSmall/> 
      <Rawpost url={comedy} title="Comedy" isSmall/> 
      <Rawpost url={horror} title="Horror" isSmall/> 
      <Rawpost url={documentary} title="Documentary" isSmall/> 
      <Rawpost url={actions} title="Action" isSmall/>
      <Rawpost url={trending} title="Trending" isSmall/>
      <Rawpost url={romance} title="Romance" isSmall/> 
      <Rawpost url={comedy} title="Comedy" isSmall/> 
      <Rawpost url={horror} title="Horror" isSmall/> 
      <Rawpost url={documentary} title="Documentary" isSmall/> 
      <Rawpost url={actions} title="Action" isSmall/>
      <Rawpost url={trending} title="Trending" isSmall/>
      <Rawpost url={romance} title="Romance" isSmall/> 
      <Rawpost url={comedy} title="Comedy" isSmall/> 
      <Rawpost url={horror} title="Horror" isSmall/> 
      <Rawpost url={documentary} title="Documentary" isSmall/> 
      <Rawpost url={actions} title="Action" isSmall/>
      <Rawpost url={trending} title="Trending" isSmall/>
      <Rawpost url={romance} title="Romance" isSmall/> 
      <Rawpost url={comedy} title="Comedy" isSmall/> 
      <Rawpost url={horror} title="Horror" isSmall/> 
      <Rawpost url={documentary} title="Documentary" isSmall/> 
      <Rawpost url={actions} title="Action" isSmall/>
      <Rawpost url={trending} title="Trending" isSmall/>
      <Rawpost url={romance} title="Romance" isSmall/> 
      <Rawpost url={comedy} title="Comedy" isSmall/> 
      <Rawpost url={horror} title="Horror" isSmall/> 
      <Rawpost url={documentary} title="DOcumentary" isSmall/> 
      <Rawpost url={actions} title="Action" isSmall/>
      <Rawpost url={trending} title="Trending" isSmall/>
      <Rawpost url={romance} title="Romance" isSmall/> 
      <Rawpost url={comedy} title="Comedy" isSmall/> 
      <Rawpost url={horror} title="Horror" isSmall/> 
      <Rawpost url={documentary} title="Documentary" isSmall/> 
      </Route>
    </Router>  
    
    </div>
  )
}

export default App
