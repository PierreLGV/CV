import React, {Component} from 'react';
import { Card } from 'semantic-ui-react';
import './Experiences.css';
import ModalJob from './ModalJob';

class Experiences extends Component {
  state = {
    cards: [
      {title : 'Freelance Web project', year : '2018', description : 'Professional web project for the start-up STFU'},      
      {title : 'Charitable Organisation Falret', year : '2016-2017', description : 'Educator for adults with psychiatric disorders'},
      {title : 'Kremlin-Bicetre Hospital', year : '2015-2016', description : 'Educator in Neuro Reeducation for children'},
      {title : 'Educative Center AGE', year : '2014-2015', description : 'Educator in Public law measures for protection of children'},
      {title : 'Day Activity Center', year : '2013', description : 'Educator for adult with Mental or Physical Disabilities'},
      {title : 'MPAA Auditorium', year : '2012-2015', description : 'Technician and secretary/receptionist'},
      {title : 'Diderot University Paris 7', year : '2012-2013', description : 'Librarian specilized in Dental surgery'},
      {title : 'Pierre and Marie Curie Institute', year : '2011-2012', description : 'Educator for children diagnosed with cancer and treated at a Pediatric Oncology Centre'},
      {title : 'CESM St-Florent', year : '2010', description : 'Sub-Marine Studies Center in Corsica'},
    ],
    modals: [
      {
        header : 'Freelance Web Project', 
        image : 'http://www.iamwire.com/wp-content/uploads/2015/11/Start-the-fuck-up.jpg',
        title : 'Professionnal web project for the start-up STFU',
        description : 'Development of an editing tool using ReactJS and NodeJS for our client Start The F*** Up (https://www.startthefup.co/)'
      },
      {
        header : 'Charitable Organisation Falret', 
        image : 'http://www.dons-legs.com/v2/wp-content/themes/zeesynergie/vignette.php?src=http://pimcore.francedit.galilee.fr/website/var/assets/oeuvre-falret-logo-web-rvb.png&w=400&zc=1',
        title : 'Educator for adults with psychiatric disorders',
        description : 'Social reintegration of adults with schizophrenic troubles in an associative shelter.'
      },
      {
        header : 'Kremlin-Bicetre Hospital', 
        image : 'http://hopitaux-paris-sud.aphp.fr/wp-content/blogs.dir/63/files/2017/02/LOGO_BCT_QUADRI.png',
        title : 'Educator in Neuro Reeducation for children',
        description : 'School reintegration for children with major dyslexic disorders and learning mental block.'
      },
      {
        header : 'Educative Center AGE', 
        image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/P1280719_Paris_XX_jardin_Carre_Baudouin_rwk.jpg/256px-P1280719_Paris_XX_jardin_Carre_Baudouin_rwk.jpg',
        title : 'Educator in Public law measures for protection of children',
        description : "Associative shelter for children placed by the juvenile court judge."
      },
      {
        header : 'Day Activity Center', 
        image : 'http://association.championnet-asso.fr/img/template/logo-championnet.png',
        title : 'Educator for adult with Mental or Physical Disabilities',
        description : 'Associative center aiming for professional reintegration and cognitive/motor function therapy.'
      },
      {
        header : 'MPAA Auditorium', 
        image : 'http://www.mpaa.fr/templates/InfosPratiques/logo.jpg',
        title : 'Technician and secretary/receptionist',
        description : "Late night shifts, music, theater, danse. Best student job ever."
      },
      {
        header : 'Diderot University Paris 7', 
        image : 'https://indomemoires.hypotheses.org/files/2017/08/Logo_ParisDiderot-672x372.jpg',
        title : 'Librarian specilized in Dental surgery',
        description : "Trying to make believe that i know something about something i DO NOT."
      },
      {
        header : 'Pierre and Marie Curie Institute', 
        image : 'http://idata.over-blog.com/2/07/52/78/Divers-Logos/logo-curie.png',
        title : 'Educator for children diagnosed with cancer and treated at a Pediatric Oncology Centre',
        description : "Self-improving job."
      },
      {
        header : 'CESM St-Florent', 
        image : 'https://cdn1.fr.yumping.info/emp/fotos/7/9/5/8/lg_Logo%20CESM%20Saint-Florent.jpg',
        title : 'Sub-Marine Studies Center in Corsica',
        description : "Volunteering for two month in a diving and boat saling center. I've enjoyed heavy earthworks preparation, boat hull painting with toxic biocidals, masonry, cooking, bus driving, sleeping in a dorm room and being payed 33euros a week"
      },
      
    ]
  }

  render() {
    return (
  <div className='jobWrapper'> 
    <div className="ExperiencesTitle">
      <h2>Professionnal Experiences</h2>
    </div>
    <Card.Group className='Experiences'>
      {this.state.cards.map((elem, i) => {
          console.log(this.state.modals[i].description)
        
           return <Card className='jobCard' key={i}>
              <Card.Content>
                <Card.Header content={elem.title}/>
                <Card.Meta content={elem.year}/>
                <Card.Description content={elem.description}/>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                 <ModalJob header={this.state.modals[i].header} image={this.state.modals[i].image} title={this.state.modals[i].title} description={this.state.modals[i].description} />)
                </div>
              </Card.Content>
            </Card>
      }
        )} 
    </Card.Group>
  </div>
  )
}
}
export default Experiences;