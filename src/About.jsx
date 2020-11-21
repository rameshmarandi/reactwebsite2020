import React from 'react';
import Common from './Common';
import web from '../src/Images/about.svg';

const About = () =>{
return(<>
   <Common
    name ='Welcome to About page '
    btn = 'Contact Now'
    visit = '/contact'
    imgsrc = {web}
   />
   </>);
}

export default About;