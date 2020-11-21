import React, {useState} from 'react';


const Contact = () =>{

 const [ data , setData] = useState({
     name : "",
     phone : "",
     msg : " ",
     emil : "",
 }); 

 const inputEvent = (event) =>{
    
    const {name, value} = event.target;
    setData((preData) =>{
            return {
                ...preData,
                [name] : value,
            };

    });
    
 };

    const formSubmit = (e) =>{
         e.preventDefault();
         
         alert(`My name is ${data.name} . My mobile number is ${data.phone} . 
         ${data.email} this is my emil id  & i want to say ${data.msg}`);
         
        }

return(<>
       <div className="my-5">
           <div className="text-center text-bold h1 "> <u>Contact Us</u></div> 
       </div>
       <div className="container">
           <div className="row">
               <div className="col-md-6 col-10 mx-auto">
              <form  onSubmit = {formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" 
                className="form-label">Enter FullName</label>
                <input type="text"
                 className="form-control"
                 id="exampleFormControlInput1"
                name = "name"
                value = {data.name}
                onChange ={inputEvent} 
                placeholder="Enter full Name"/>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" 
                className="form-label">Phone</label>
                <input type="number"
                 className="form-control"
                 id="exampleFormControlInput1"
                name = "phone"
                value = {data.phone}
                onChange ={inputEvent} 
                placeholder="Enter Mobile Number"/>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" 
                className="form-label">Email address</label>
                <input type="email"
                 className="form-control"
                 id="exampleFormControlInput1"
                name = "email"
                value = {data.email}
                onChange ={inputEvent} 
                placeholder="name@example.com"/>
              </div>
          <div className="mb-3">
               <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea
                  className="form-control" 
                  id="exampleFormControlTextarea1" 
                  rows="3"
                  name = "msg"
                  value = {data.msg}
                  onChange ={inputEvent}
                  ></textarea>
                 </div>
                 <div className="col-12">
                   <button type="submit" className="btn btn-outline-primary">Submit</button></div>
              </form>
               </div>
           </div>
           
       </div>
   </>);
}

export default Contact;