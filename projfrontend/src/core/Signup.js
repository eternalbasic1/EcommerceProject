import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Base from './Base';

const Signup = () => {

  const signUpForm = () => {
    return (
      <div className='row'>
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Name</label>
              <input className="form-control" type="text"/>
            </div>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input className="form-control"  type="email"/>
            </div>
            <div className="form-group">
              <label className="text-light">Password</label>
              <input className="form-control" type="password"/>
            </div>
            <button className="btn btn-success w-100 d-block mt-2">Submit</button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <Base  title='SignUp' description='Sign-up today and get a FLAT 33% Discount'>
      {signUpForm()}
    </Base>
   
  )
}

export default Signup