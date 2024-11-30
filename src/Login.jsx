import Axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function Login(props) {
  let [errorList, setErrorList] = useState([])
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  let [user, setUser] = useState({
    email: "",
    password: ""
  });

  let [error, setError] = useState('');

  function getUserData(e) {
    // deep copy
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }

  async function submitLoginForm(e) {
    e.preventDefault();
    setLoading(true);
    let validationResult = validateLoginForm();
    if (validationResult.error) {
      setErrorList(validationResult.error.details);
      setLoading(false);

    }
    else {
      let response = await Axios.post('https://reqres.in/api/login', user);
      let { request } = response;
      let { data } = response;
      if (request.status === 200 && request.readyState === 4) {
        //Programmatic routing
        setLoading(false);
        localStorage.setItem('userToken', data.token)
        props.saveUserData();
        navigate('/home')
      }
      else {
        setError('HTTP Request Error');
        setLoading(false);

      }

    }
  }
  //"email": "eve.holt@reqres.in",
  //"password": "cityslicka"

  //Validation
  function validateLoginForm() {
    let scheme = Joi.object({
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'in'] } }).required(),
      password: Joi.string().pattern(new RegExp('^[A-Za-z0-9]{5,}$')).required()
    })

    return scheme.validate(user, { abortEarly: false });
  }

  return (
    <>
      <div className="w-75 mx-auto mt-5">
        <h2>Login now</h2>
        {errorList.map((errorMessage, i) => errorMessage.path[0] === 'password' ? <div key={i} className="alert alert-danger">Password Invalid</div> : <div key={i} className="alert alert-danger">{errorMessage.message}</div>)}
        {error ? <div className="alert py-2 alert-danger">{error}</div> : ""}
        <form onSubmit={submitLoginForm}>
          <label htmlFor="email">Email :</label>
          <input onChange={getUserData} type="email" className="form-control mb-2" name="email" id="email" />

          <label htmlFor="password">Password :</label>
          <input onChange={getUserData} type="password" className="form-control mb-3" name="password" id="password" />

          <button type="Submit" className="btn btn-outline-info">
            {loading ? <i className='fas fa-spinner fa-spin'></i> : 'Login'}
          </button>
        </form>
      </div>
    </>
  )
}
