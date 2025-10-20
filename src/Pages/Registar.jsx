import React from "react";
import { Link } from "react-router";

const Registar = () => {
  return (
    <div>
      {" "}
      <div className="flex justify-center min-h-screen items-center">
        {" "}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <p className="font-semibold text-center py-5">
              Register your account
            </p>
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Your Name</label>
              <input
                type="text"
                className="input"
                placeholder=" Enter Your Name"
              />
              {/* pHOTO URL */}
              <label className="label">Photo URL</label>
              <input type="text" className="input" placeholder="Photo URL" />

              {/* email */}
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              {/* password */}
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <Link className="text-center py-5" to="/auth/login">
              All ready Have An Account ?{" "}
              <span className="text-secondary">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registar;
