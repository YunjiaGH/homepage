import React, { Component } from 'react';
import logo from './logo2.svg';
import './css/App.css';
import img from './images/yw43.jpg';


class App extends Component {

    constructor(){
        super();

        //init value of this page
        this.state = {
            supervisor_name : "Dr. Ishbel Duncan",
            phd_year : "hmmm",
            university_email: "yw43 at st-andrews.ac.uk",
            office: "JC1.15 - Jack Cole Building, St.Andrews",
            phone_base64: "MDc1NjI1OTA1MTY=",
            Journal_name : "Journal of Information Security and Applications - Elsevier",
            pending_publication1: "Human Visual Based Perception for Steganography",
            pending_publication2: "Mitigating the threat of LSB Steganography within DLP Systems",
            pending_publication3: "Spatial Image Steganography Algorithm Review",
        };
    }

    componentWillMount(){
        this.inti_refresh();
    }

    inti_refresh(){
        setTimeout(() =>{
            this.setState({ phd_year : "Second"});
        },4000);
    }

    render() {
        return (

      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Yunjia<span class="gray">Wang</span></h1>
            <h2 className="App-title2"><i>University of St Andrews</i></h2>
        </header>

         <body>
         <div id="content-wrap">
             <div id="content">
                 <div id="sidebar">
                     <div class="sidebox">
                         <p>
                             <img id="img-profile" src={img}/>
                         </p>

                         <p>
                             <b>Yunjia Wang</b><br/>
                             {this.state.phd_year} year Ph.D student in the Computer Science department
                             at the University of St Andrews.
                         </p>

                     </div>

                     <div class="sidebox">
                         <h1 class="clear">Links</h1>
                         <ul class="sidemenu">
                             <li>
                                 <a href="https://yw43.host.cs.st-andrews.ac.uk" class="top">Home</a>
                             </li>
                             <li>
                                 <a href="https://yw43.host.cs.st-andrews.ac.uk/yunjia/Yunjia_CV.pdf">CV</a>
                             </li>
                             <li>
                                 <a href="https://github.com/YunjiaGH">Github</a>
                             </li>
                             <li>
                                 <a href="https://yw43.host.cs.st-andrews.ac.uk/security">Security Practice</a>
                             </li>
                         </ul>
                     </div>

                     <div class="sidebox">
                        <h1>Contact Detail</h1>
                           <p>University: {this.state.university_email}
                            <br/>Office: {this.state.office}
                            <br/>Phone: {this.state.phone_base64}
                           </p>

                         <p><i>Please contact me via email in the first instance.
                             But I don't mind ring me up if you can know what is my number :)</i></p>
                     </div>

                 </div>
                 <div id="main">
                     <h1>Overview</h1>
                     <p>
                         I am a <i>{this.state.phd_year}</i> year Ph.D student,
                         supervised by <i><a href="https://www.cs.st-andrews.ac.uk/directory/person?id=ishbel">{this.state.supervisor_name}</a></i>,
                         at the <a href="https://www.st-andrews.ac.uk"> University of St Andrews</a>, <a href="https://www.cs.st-andrews.ac.uk/">Computer Science Department</a>.
                     </p>

                     <p>
                         My research examines the data security in the large-scale organization.
                         Within this area, I researched the influence of steganography in the
                         Data Loss Prevention systems during my MPhil study, I provided two effective
                         solutions to prevent data loss from  LSB image steganographic behaviour.
                         In my PhD research, I am interested in the security of payment system, such as
                         contactless payment, QR payment etc.
                     </p>

                     <p>
                         Currently, I am looking for the <a href="https://ctftime.org/">CTF</a> competition partners.
                         Please get in contact via email if you are interested. Also you can use
                         my <a href="https://yw43.host.cs.st-andrews.ac.uk/security/">CTF Website</a> to examine how good
                         you are.
                     </p>

                     <h1>Research Projects</h1>
                         <ul>

                            <li>
                                The flexible <sap class="green"> Payment Systems</sap> provide extremely conveniences for the users,
                                such as contactless payment, mobile QR code payment etc. Meanwhile, the risk has been increased constantly.
                                In particular, mobile payment systems have been a target for cyber criminals, where many threats and
                                attacks have been found on the mobile devices. Therefore, I am currently researching in this area.
                            </li>

                             <li>
                                The <span class="green">Image Steganography</span> is used to hide the confidential data
                                 for bypassing the monitor of DLP system, which is the biggest threat from the inside attack
                                 for any company so far. I developed the relevant steganography tools to demonstrate this risk,
                                 and provided two effective solution to prevent the data loss from LSB steganographic behaviour.
                             </li>

                             <li>The <span class="green">DDoS Attack</span> is the biggest threat from the outside attack for
                                 web site or company. I listed the top three flood attack types, and implemented the these
                                 attacks by using developed tool in a virtual environment. The relevant mitigations and solutions
                                 were researched.
                             </li>

                         </ul>

                     <h1>Publications</h1>

                     <p>Pending Publications:</p>
                         <ul>
                             <li><i>{this.state.pending_publication1}</i> in {this.state.Journal_name},
                                 <a href="https://yw43.host.cs.st-andrews.ac.uk/yunjia/Paper/2017/Mitigating_the_threat_of_LSB_Steganography_within_DLP_Systems.pdf"><i>view</i></a></li>
                             <li><i>{this.state.pending_publication3}</i> in {this.state.Journal_name},
                                 <a href="https://yw43.host.cs.st-andrews.ac.uk/yunjia/Paper/2017/Spatial_Image_Steganography_Algorithm_Review.pdf"><i>view</i></a></li>
                             <li><i>{this.state.pending_publication2}</i> in {this.state.Journal_name}</li>
                         </ul>

                 </div>
             </div>
         </div>
         </body>



      </div>
    );
  }
}

export default App;
