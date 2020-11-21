import React from 'react';
import web from '../src/Images/img1.jpg';
import Card from './Card';
import Sdata from './Sdata';

const Service = () =>{
return(<>
  <div className="my-5">
       <h1 className="text-center underline"><u>Our Service</u></h1>
  </div>
    <div className="container-fluid mb-5">
      <div className="row">
         <div className="col-10 mx-auto">
               <div className="row gy-5" >
                  {
                    Sdata.map((val, index) =>{
                       return <Card
                         key = {index}
                         imgsrc = {val.imgsrc}
                         title = {val.title}
                       />
                    })
                  }
              </div>      
         </div>
       </div>
    </div>
</>);
}

export default Service;