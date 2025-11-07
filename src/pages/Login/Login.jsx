import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center lg:text-left">
        <h1 className="text-4xl font-bold my-5">Register now!</h1>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">

          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
