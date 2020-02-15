import React from 'react';
import NavbarDesign from './components/Navbar'
import { BrowserRouter, Route, Link } from "react-router-dom"
// import ImagesWithData from './components/images-with-data/ImagesWithData';
// import ImagesWitouthData from './components/images-without-data/ImagesWithoutData';
// import ModalDesign from './components/temp/ModalDesign';
// import ImageEdit from './components/images-without-data/ImageEdit';
import MultipleImageShow from './components/MultipleImageShow'
import ImageInfo from './components/ImageInfo';
import ImagesWithoutDataa from './components/ImagesWithoutDataa.';
import ImagesWithData from './components/ImagesWithData';


class App extends React.Component{
  render(){
    return(
      <div>
        <BrowserRouter>

          <NavbarDesign />


          <Route path = "/images-without-data" component = {ImagesWithoutDataa} exact = {true} />
          {/* <Route path = "/images-without-data/:image" component = {ImageEdit} /> */}
          <Route path = "/images-with-data" component = {ImagesWithData} />
          <Route path = "/temp" component = {ImageInfo} />
        
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
