import React from "react";
import "./Styles/LoginSignup.css";
import { useForm } from "react-hook-form"; // rect-hook-form

const LoginSignup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
    alert(`Submitted by: ${data.UserName}`);

    // Clear input fields after submission
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>Sign Up</h1>

          <div className="loginsignup-fields">
            <input
              type="text"
              placeholder="User Name"
              {...register("UserName")}
            />

            <input
              type="email"
              placeholder="Email Address"
              {...register("Email", { required: true })}
            />
            {errors.Email && <p>Email is required.</p>}

            <input
              type="password"
              placeholder="Password"
              {...register("Password", {
                required: true,
                minLength: {
                  value: 6,
                  message: "Min Length should be atleat 6",
                },
                maxLength: {
                  value: 12,
                  message: "Max length should be atmost 12",
                },
              })}
            />
            {errors.Password && (
              <p className="error-msg">{errors.Password.message}</p>
            )}
          </div>

          <button>Continue</button>
          <p className="loginsignup-login">
            Already have an account? <span>Login here</span>
          </p>

          <div className="loginsignup-agree">
            <input type="checkbox" required />
            <p>By Continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginSignup;
