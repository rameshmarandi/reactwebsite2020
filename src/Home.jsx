import React from 'react';
import Common from './Common';
import web from '../src/Images/homerocket.svg';

const Contact = () =>{
return(<>
   <Common
    name =' Grow your business with'
    btn = 'Get Started'
    visit = '/about'
    imgsrc = {web}
   />
   </>);
}

export default Contact;