import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../Axios/Axios";
function LogIn() {
  const navigate = useNavigate();
  const EmailDom = useRef();
  const PasswordDom = useRef();

  async function SignIn(e) {
    e.preventDefault();
    const EmailValue = EmailDom.current.value;
    const PasswordValue = PasswordDom.current.value;

    if (!EmailValue || !PasswordValue) {
      return alert("Provide All Data ");
    }

    try {
      const { data } = await axios.post("/users/login", {
        email: EmailValue,
        password: PasswordValue,
      });

      alert("You are Loged In ");
      localStorage.setItem("token", data.token);
      console.log(data);
      navigate("/only"); // navigate to some path after successful registration
    } catch (error) {
      console.log("Error:", error);
      alert("Registration failed. Please try again.");
    }
  }

  return (
    <div>
      <div className="md:px-20 pb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          Welcome Back!
        </h2>
        <p className="text-gray-700 mb-6 text-center">
          Please sign in to your account
        </p>
        <form method="POST" onSubmit={SignIn}>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              ref={EmailDom}
            />
          </div>
          <div className="mb-6 py-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password"
              ref={PasswordDom}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
