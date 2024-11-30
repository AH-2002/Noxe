import Axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function Register() {
  let [errorList, setErrorList] = useState([])
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  let [user, setUser] = useState({
    first_name: "",
    last_name: "",
    age: 0,
    email: "",
    password: ""
  });

  let [error, setError] = useState('');

  function getUserData(e) {
    // 1- deep copy
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    console.log(myUser)
  }

  async function submitRegisterForm(e) {
    e.preventDefault();
    setLoading(true);
    let validationResult = validateRegisterForm();
    console.log(validationResult);
    if (validationResult.error) {
      setErrorList(validationResult.error.details);
      setLoading(false);

    }
    else {
      let response = await Axios.post('https://reqres.in/api/register', user);
      let { request } = response;
      if (request.status === 200 && request.readyState === 4) {
        //Programmatic routing
        navigate('/login')
        setLoading(false);

      }
      else {
        setError('HTTP Request Error');
        setLoading(false);

      }

    }
  }
  //"email": "eve.holt@reqres.in",
  //"password": "pistol"

  //Validation
  function validateRegisterForm() {
    let scheme = Joi.object({
      first_name: Joi.string().alphanum().min(3).max(15).required(),
      last_name: Joi.string().alphanum().min(3).max(15).required(),
      age: Joi.number().min(16).max(80).required(),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','in'] } }).required(),
      password: Joi.string().pattern(new RegExp('^[A-Za-z0-9]{5,}$')).required()})

    return scheme.validate(user, { abortEarly: false });
  }

  return (
    <>
      <div className="w-75 mx-auto mt-5">
        <h2>Register now</h2>
        {errorList.map((errorMessage, i) => errorMessage.path[0]==='Password' ? <div key={i} className="alert alert-danger">Password Invalid</div> : <div key={i} className="alert alert-danger">{errorMessage.message}</div>)}
        {error ? <div className="alert py-2 alert-danger">{error}</div> : ""}
        <form onSubmit={submitRegisterForm}>

          <label htmlFor="first_name">First name :</label>
          <input onChange={getUserData} className="form-control mb-2" name="first_name" id="first_name" type="text" />

          <label htmlFor="last_name">Last name :</label>
          <input onChange={getUserData} className="form-control mb-2" name="last_name" id="last_name" type="text" />

          <label htmlFor="age">Age :</label>
          <input onChange={getUserData} type="number" className="form-control mb-2" name="age" id="age" />

          <label htmlFor="email">Email :</label>
          <input onChange={getUserData} type="email" className="form-control mb-2" name="email" id="email" />

          <label htmlFor="password">Password :</label>
          <input onChange={getUserData} type="password" className="form-control mb-3" name="password" id="password" />

          <button type="Submit" className="btn btn-outline-info">
            {loading ? <i className='fas fa-spinner fa-spin'></i> : 'Register'}
          </button>
        </form>
      </div>
    </>
  )
}
