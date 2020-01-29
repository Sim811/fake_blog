import React from "react";
import { Header, Image, Segment } from 'semantic-ui-react';
import '../styles/About.css';


const About = () => (
  <>
    <Header inverted textAlign="center" as='h1'>About Me</Header>
   
    <br />
    
    <div>
      <Image centered src="https://t4.ftcdn.net/jpg/00/64/67/63/240_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" circular />
    </div>
    
    <br />

    <Segment basic textAlign="center">
      <p style={{fontSize: 20}} className='bio-color'>
      You can decide what you want to do in life, but I suggest doing something that creates. Something that leaves a tangible thing once you're done. That way even after you're gone, you will still live on in the things you created.
      </p>
    </Segment>

    <div className='copy-line'>
      <Header inverted as='h5' textAlign='center'> © Simian Matagi Development. All rights reserved.</Header>
    </div>
  </>
);




export default About;