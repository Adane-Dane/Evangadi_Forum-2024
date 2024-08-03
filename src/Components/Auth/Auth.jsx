import "./Auth.css";
import Header from "../Header/Header";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useState } from "react";
import { easeInOut, easeOut, motion, AnimatePresence } from "framer-motion";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

export default function Auth() {
  const navigation = [{ name: "", href: "#" }];
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <Header navigation={navigation} RightText={"Home"} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
      >
        <section className=" class_for_bg_image min-h-screen ">
          <div className="container pt-20">
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="max-w-sm bg-white min-w-full rounded-lg overflow-hidden shadow-lg mx-auto mt-5 hight_proprty">
                  <div className="p-6">
                    <div className="flex flex-wrap justify-center logIN_Logout text-center self-center px-3 py-2 ">
                      <button
                        className={toggle ? `active` : ""}
                        onClick={() => setToggle(true)}
                      >
                        <LoginRoundedIcon /> Login
                      </button>
                      <button
                        className={!toggle ? `active` : ""}
                        onClick={() => setToggle(false)}
                      >
                        <PersonAddIcon /> SignUp
                      </button>
                    </div>

                    {toggle ? <LogIn /> : <SignUp />}
                  </div>
                </div>
                <aside className="mt-14">
                  <div className=" bg-white min-w-full rounded-lg overflow-hidden shadow-lg p-8">
                    <h1 className="mb-3 py-7 text-4xl font-bold tracking-tight sm:text-6xl text-gradin">
                      Evangadi Networks
                    </h1>
                    <p>
                      No matter what stage of life you are in, whether you’re
                      just starting elementary school or being promoted to CEO
                      of a Fortune 500 company, you have much to offer to those
                      who are trying to follow in your footsteps.
                    </p>
                    <p className="pt-6">
                      Wheather you are willing to share your knowledge or you
                      are just looking to meet mentors of your own, please start
                      by joining the network here.
                    </p>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
