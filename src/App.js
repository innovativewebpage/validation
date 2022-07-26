import React,{useState,useEffect } from "react";
import "./App.css";

function App() {


 const initialValues = { 
	name: "", 
	email: "", 
	mobile:"",
	country:"",
	city:"",
	state:"",
	message:""
};
 
const [formValues,setFormValues] = useState(initialValues);

 const [formErrors, setFormErrors] = useState({});
 const [isSubmit, setIsSubmit] = useState(false);

 
 
 const handleChange = (e) => {
 //console.log(e.target);
     const { name, value } = e.target;
	 console.log('name',name);
	  console.log('value',value);
	  setFormValues({...formValues,[name]: value });	 
	 // setFormValues({ ...formValues, name: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
	 setIsSubmit(true);
   
  };

  useEffect(() => {
    //console.log('formErrors==',formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      //console.log('formValues==',formValues);
    }
  }, [formErrors]);


  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } 
	else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
	
  
  
    return errors;
  };

//console.log('formValues',formValues)

  return (
    <div className="container">
	 {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success"><h1>Signed in successfully</h1></div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

	



      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formValues.name}
			 onChange={handleChange}
            />
          </div>
     <p>{formErrors.name}</p>
   
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
			  value={formValues.email}
			  onChange={handleChange} 
            />
          </div>
         <p>{formErrors.email}</p>
		
          
		  
		  <div className="field">
            <label>Mobile</label>
            <input
              type="text"
              name="mobile"
              value={formValues.mobile}
			 onChange={handleChange}
            />
          </div>
		  
		  
		  <div className="field">
            <label>Country</label>
            <input
              type="text"
              name="country"
              value={formValues.country}
			 onChange={handleChange}
            />
          </div>
		  
		  
		  <div className="field">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formValues.city}
			 onChange={handleChange}
            />
          </div>
		  
		  
		   <div className="field">
            <label>State</label>
            <input
              type="text"
              name="state"
              value={formValues.state}
			 onChange={handleChange}
            />
          </div>
		  
		  
		   <div className="field">
            <label>Message</label>
            <input
              type="text"
              name="message"
              value={formValues.message}
			 onChange={handleChange}
            />
          </div>
		  
		  
		 
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;