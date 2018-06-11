import React, {Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import './Profile.css';

const Category = ({ header, children }) => 
  <Card>
    <Card.Content>
      <Card.Header content={header}/>
        <Card.Description>
          {children}
        </Card.Description>  
    </Card.Content>
  </Card>


class Profile extends Component {
  
  state = {
    skillIcons : [
      {image : 'https://www.acseo.fr/wp-content/uploads/2016/01/react-logo.png', alt: 'React'},
      {image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2000px-Node.js_logo.svg.png', alt : 'Node-JS'},  
      {image : 'http://fortimelp.fr/273-large_default/formation-javascript-3-jours.jpg', alt : 'Java-Script'},
      {image : 'http://react.semantic-ui.com/logo.png', alt : 'Semantic UI'},
      {image : 'https://cdn-images-1.medium.com/max/1600/1*yqSYIZNfRPHeF-tCTrRrIw.png', alt : 'Material UI'},
      {image : 'http://www.trucsweb.com/documents/images/2017/bootstrap4-stack.png', alt : 'Bootstrap'},  
      {image : 'http://creersonsiteweb.net/images/html.png', alt : 'HTML'},
      {image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/730px-CSS.3.svg.png', alt : 'CSS'},      
      {image : 'https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/MySQL.svg/1280px-MySQL.svg.png', alt : 'mySQL'},  
      {image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Antu_bash.svg/2000px-Antu_bash.svg.png', alt : 'Bash'}            
    ],
    educationDiplomas : [
      {title : 'Wild Code School Paris', 
      year : 'feb - Jul 2018', 
      description : 'Intensive Web Developer program with challenging professional projects, relation with clients, workshops and hackathons focused on Javascript,  NodeJS and ReactJS.'},
      {title : 'Saint-Honoré Training Centre', 
      year : '2014-2015', 
      description : 'State Diploma in Specialized Education and Social Work'},
      {title : 'Descartes University', 
      year : '2012-2013', 
      description : '3rd year in Human and Social Sciences'},
      {title : 'Lycee Montaigne', 
      year : '2006', 
      description : 'Baccalaureate in Economics and Social Sciences'}, 
       
    ],
    
  }
 
render () {
  return (
  <div>
   <Card.Group className='Profile'>
    <Card> 
        <div className='Avatar'>
          <h2 className='AvatarTitle'>Profile</h2>
        </div>
      <Image className='AvatarPicture'src='https://dailygeekshow.com/wp-content/uploads/2014/11/lama.jpg' />
      <Card.Content className='personnalInfosName'>      
        <Card.Header>
          <h4>Pierre Langevin</h4>
        </Card.Header>
        <Card.Meta>
          <span className='date'>
            <p>1987</p> 
          </span>
        </Card.Meta>
        <Card.Description>
          <div className='personnalInfos'>
            <p>74 rue du commerce</p>
            <p>75015 Paris</p>
            <p>France</p>
            <p>+33 6 12 02 13 11</p>
            <p>pierrelangev1@gmail.com</p>
          </div>
          <hr/>             
          <div className='socials'>
            <a href='http://www.linkedin.com/in/pierre-langevin-6116aa15b'>
              <img src='https://www.freepnglogos.com/uploads/linkedin-png-logo-23.png' alt='linkedin'/>
            </a>
            <a href='https://github.com/PierreLGV'> 
              <img src='https://spin.atomicobject.com/wp-content/uploads/20171003153036/github-logo.png' alt='github'/>
            </a>
            <a href='https://www.codewars.com/users/PierreLGV'>
              <img src='https://www.qualified.io/shared/images/codewars-black-large-24a9d355.png' alt='codewars'/>
            </a>
          </div>
        </Card.Description>
      </Card.Content>
      </Card>

      <Card>
        <div className='Education'>
          <h2 className='EducationTitle'>Education and Diplomas</h2>
        </div>
        <Card.Group>
          {this.state.educationDiplomas.map((elem, i) => 
            <Card>
              <Card.Content>
                <Card.Header content={elem.title}/>
                <Card.Meta content={elem.year} />
                <Card.Description content={elem.description} />
              </Card.Content>
          </Card>
            )} 
    </Card.Group>
  </Card>

        <Card> 
          <div className='Skills'>
            <h2 className='SkillsTitle'>Skills</h2>
          </div>
      <Card.Content>
        <Card.Header>
          
        </Card.Header>
        <Card.Meta>
          <span className='date'>
            
          </span>
        </Card.Meta>
        <Card.Description>
          <Card.Group className='skillSet'>
               {this.state.skillIcons.map((elem, i) => 
              <div >
                <img className='cardIcon' key={i} src={elem.image} alt={elem.alt}/>
              </div>
               )}   
          </Card.Group>
          
        </Card.Description>
      </Card.Content>
      </Card>

      <Card>
        <div className='Education'>
          <h2 className='EducationTitle'>About me</h2>
        </div>
        <Card.Group>        
          <Category header='Professionnal Retraining'>
            <p>I started my professionnal career as an educator
            before I finally found my way in computer programming. <br/>
            Since my last former job, I have been learning web development 
            with full commitment and passion, driven by the need to work with something 
            I'm really intersted in.
            </p>
          </Category>
          <Category header='Languages and Capabilities'>
            <p>English - French (native)</p>
            <p>Driving Licence</p>
            <p>First Aid Certificate</p>
          </Category>
            <Category header='Interests'> 
              <p>BackPack Travels, hikes and photography</p>
              <p>Listening to music and playing blues harp</p>
              <p>Swimming and Fitness</p>
              <p>Litterature</p> 
            </Category> 
        </Card.Group>
      </Card>

    </Card.Group>
  </div>
  )
}
}
export default Profile
