import React, { Component } from 'react';
// import photo from '';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Experiences from './components/Experiences';



class App extends Component {

  state = {
    skillIcons : [
      {image : 'https://png.icons8.com/color/1600/css3.png', skill : 'CSS'},
      {image : 'http://infoforall.fr/web/images_web/accueil_HTML5.png', skill : 'HTML'},
      {image : 'http://pluspng.com/img-png/bootstrap-png-bootstrap-512.png', skill : 'Bootstrap'},  
      {image : 'http://fortimelp.fr/273-large_default/formation-javascript-3-jours.jpg', skill : 'Java-Script'},
      {image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2000px-Node.js_logo.svg.png', skill : 'Node-JS'},  
      {image : 'https://www.acseo.fr/wp-content/uploads/2016/01/react-logo.png', skill : 'React'}
    ]
}

  render() {
    return (
      <div className="App">
        <Header/>
        <div className='Main'>
          <Profile/>
          <Experiences/>
        </div>
      </div>
    );
  }
}

export default App;


