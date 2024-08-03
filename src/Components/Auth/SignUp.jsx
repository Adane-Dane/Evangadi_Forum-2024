import React, { useRef } from "react";
import axios from "../../Axios/Axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const UserNameDom = useRef();
  const FirstNameDom = useRef();
  const LastNameDom = useRef();
  const EmailDom = useRef();
  const PasswordDom = useRef();

  async function Registration(e) {
    e.preventDefault();
    const UserValue = UserNameDom.current.value;
    const FirstNameValue = FirstNameDom.current.value;
    const LastNameValue = LastNameDom.current.value;
    const EmailValue = EmailDom.current.value;
    const PasswordValue = PasswordDom.current.value;

    if (
      !UserValue ||
      !FirstNameValue ||
      !LastNameValue ||
      !EmailValue ||
      !PasswordValue
    ) {
      return alert("Provide All Data ");
    }

    try {
      const response = await axios.post("/users/register", {
        username: UserValue,
        firstname: FirstNameValue,
        lastname: LastNameValue,
        email: EmailValue,
        password: PasswordValue,
      });

      console.log("Response:", response.data);
      alert("You are Complete");
      navigate("/Auth"); // navigate to some path after successful registration
    } catch (error) {
      console.log("Error:", error.response);
      alert("Registration failed. Please try again.");
    }
  }

  return (
    <>
      <div>
        <h1 className="font-bold tracking-tight sm:text-2xl text-center">
          Join the Community
        </h1>
        <p className="text-gray-700 text-center">Please fill the information</p>
      </div>
      <div className="bg-white py-8 md:px-2 sm:rounded-lg sm:px-10">
        <form method="POST" onSubmit={Registration}>
          <div className="min-w-2">
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                ref={UserNameDom}
                placeholder="User Name"
                type="text"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="grid grid-flow-col justify-stretch gap-2 mt-3">
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                ref={FirstNameDom}
                placeholder="First Name"
                type="text"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
            <div>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  ref={LastNameDom}
                  placeholder="Last Name"
                  type="text"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                ref={EmailDom}
                placeholder="Email Address"
                type="email"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>

          <div className="mt-6">
            <div className="mt-1 rounded-md shadow-sm">
              <input
                ref={PasswordDom}
                type="password"
                placeholder="Password"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>

          <div className="mt-6">
            <span className="block w-full rounded-md shadow-sm">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Create account
              </button>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
