import React, { useEffect, useState, createContext } from "react";
import Home from "./Components/Home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import OnlyAuth from "./Components/OnlyAuth/OnlyAuth";
import Landing from "./Components/Landing_page/Landing";
import axios from "./Axios/Axios";
import HaveaQuestion from "./Components/OnlyAuth/HaveaQuestion/HaveaQuestion";
import ViewAllQuestions from "./Components/OnlyAuth/ViewAllQuestions/ViewAllQuestions";
import SingleQuestion from "./Components/OnlyAuth/SingleQuestion/SingleQuestion";
import Profile from "./Components/OnlyAuth/Profile/Profile";
export const AppSate = createContext();
function App() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  async function checkUser() {
    try {
      const { data } = await axios.get("/users/check", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUser(data);
      navigate("/only");
    } catch (error) {
      navigate("/");
    }
  }
  useEffect(() => {
    checkUser();
  }, []);

  return (
    <AppSate.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route path="/" element={<Home />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/only" element={<OnlyAuth />} />
        </Route>
        <Route path="/HaveaQuestion" element={<HaveaQuestion />} />
        <Route path="/ViewAllQuestions" element={<ViewAllQuestions />} />
        <Route path="/Profile/:userid" element={<Profile />} />
      </Routes>
    </AppSate.Provider>
  );
}

export default App;
