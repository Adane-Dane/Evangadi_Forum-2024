import axios from "../../Axios/Axios";
import { useEffect, useState } from "react";
import RenderAll from "./RenderAll";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import "./Only.css";

export default function OnlyAuth() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [user1, setUser] = useState({});
  const [data, setData] = useState({});
  const navigation = [{ name: user1.username, href: "#" }];
  async function checkUser() {
    try {
      const { data } = await axios.get("/users/check", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUser(data);
    } catch (error) {
      navigate("/Auth");
    }
  }

  async function alldata() {
    try {
      const response = await axios.get("/users/count");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    checkUser();
    alldata();
  }, [user1]);
  return (
    <div div className="bg">
      <Header navigation={navigation} RightText={"sd"} />
      <div className="my-20">
        <RenderAll data={data} />
        {/* <div className="grid grid-cols-2 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
          {display_data.map((item) => {
            return (
              <div
                div
                onClick={() => navigate(`${item.title.split(" ").join("")}`)}
                className="text-center  items-center border rounded-sm overflow-hidden shadow style_Item"
              >
                <h1 className="text-3xl	 text-blue-600">{item.title} </h1>
                <p>{item.subTitle}</p>
                <img src={item.image} alt="" />
              </div>
            );
          })}
        </div> */}

        <div class="container relative z-40 mx-auto mt-12">
          <div class="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">
            <Link
              to={`/Profile/${user1.userid}`}
              class="block w-1/2 py-10 text-center border lg:w-1/4"
            >
              <div>
                <img
                  src="https://redpixelthemes.com/assets/images/icon-portfolio-green.svg"
                  class="block mx-auto"
                />

                <p class="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                  Profile
                </p>
              </div>
            </Link>

            <Link
              to={"/ViewAllQuestions"}
              class="block w-1/2 py-10 text-center border lg:w-1/4"
            >
              <div>
                <img
                  src="https://redpixelthemes.com/assets/images/icon-blog-green.svg"
                  class="block mx-auto"
                />

                <p class="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                  View All Question
                </p>
              </div>
            </Link>

            <Link
              to={"/HaveaQuestion"}
              class="block w-1/2 py-10 text-center border lg:w-1/4"
            >
              <div>
                <img
                  src="https://redpixelthemes.com/assets/images/icon-ecommerce-green.svg"
                  class="block mx-auto"
                />

                <p class="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                  Have Question ?
                </p>
              </div>
            </Link>

            <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
              <div>
                <img
                  src="https://redpixelthemes.com/assets/images/icon-startup-green.svg"
                  class="block mx-auto"
                />

                <p class="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                  Search Question
                </p>
              </div>
            </a>

            <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
              <div>
                <img
                  src="https://redpixelthemes.com/assets/images/icon-business-green.svg"
                  class="block mx-auto"
                />

                <p class="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                  Ideas
                </p>
              </div>
            </a>

            <Link
              to={"/"}
              class="block w-1/2 py-10 text-center border lg:w-1/4"
            >
              <div>
                <img
                  src="https://redpixelthemes.com/assets/images/icon-lifestyle-green.svg"
                  class="block mx-auto"
                />

                <p class="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                  Logout
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
