import React from 'react';
import NavbarDesign from './components/Navbar'
import { BrowserRouter, Route, Link } from "react-router-dom"
import ImagesWithoutDataa from './components/ImagesWithoutDataa.';
import ImagesWithData from './components/ImagesWithData';


class App extends React.Component{
  render(){
    return(
      <div>
        <BrowserRouter>

          <NavbarDesign />
          <Route path = "/images-without-data" component = {ImagesWithoutDataa} exact = {true} />
          <Route path = "/images-with-data" component = {ImagesWithData} />
        
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
