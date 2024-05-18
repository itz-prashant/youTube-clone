import React, { useEffect, useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { IoIosSearch, IoIosNotificationsOutline } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { BiVideoPlus } from "react-icons/bi";
import { IoIosArrowRoundBack } from "react-icons/io";
import logo from "../assets/logo.png";
import mobLogo from "../assets/mobLogo.svg";
import { useDispatch, useSelector} from "react-redux";
import {toggleSidebar} from '../Redux/Slices/MenuToggleSlice'
import { Link, useNavigate } from "react-router-dom";
import { setCategory } from "../Redux/Slices/VideoSlice";


const Navbar = () => {
  const [search, setSearch] = useState("");
  const [activeInput, setActiveInput] = useState(false)
  const dispatch  = useDispatch()
  const open = useSelector(state=> state.toggle.open)
  const navigate = useNavigate()

  const toggleHandle = ()=>{
    dispatch(toggleSidebar(!open))
  }

  const searchVideo = (e)=>{
    if(e.key === "Enter"){
      dispatch(setCategory(search))
      setSearch("")
      setActiveInput(false)
      navigate("/")
    }
    if(e.type === "click"){
      dispatch(setCategory(search))
      setSearch("")
      setActiveInput(false)
      navigate("/")
    }
  }

  return (
    <div className="w-full h-[10vh] flex items-center justify-between  mx-auto py-5  px-2 md:gap-4 gap-2">
    
        { activeInput && <span onClick={()=>setActiveInput(!activeInput)}
            className="h-10 w-10 flex items-center justify-center cursor-pointer text-2xl  rounded-full hover:bg-zinc-100 shrink-0 xsm:hidden text-zinc-600">
            <IoIosArrowRoundBack />
          </span>}
        <div className={`${activeInput ? "hidden" :"flex"}   items-center xsm:flex  gap-1`}>

          <span onClick={()=>toggleHandle()}
            className="h-10 w-10 flex items-center justify-center cursor-pointer text-xl  rounded-full hover:bg-zinc-100 text-zinc-500">
            <VscMenu />
          </span>

          <Link to={"/"} className="h-10 flex items-center justify-center cursor-pointer">
            <img className="min-w-20 max-w-20 hidden md:block" src={logo} alt="" />
            <img className="min-w-10 max-w-10 h-8 md:hidden" src={mobLogo} alt="" />
          </Link>
        </div>

        { !activeInput ? <span onClick={()=>setActiveInput(!activeInput)}
                className={`h-10 xsm:hidden w-10 flex items-center justify-center cursor-pointer text-xl  rounded-full hover:bg-zinc-100 text-zinc-500 shrink-0`}>
               <IoIosSearch />
        </span> : ""}

        <div className={`xsm:flex items-center group  ${activeInput ? "flex" : "hidden"}`}>
              <div className="h-10 w-10 hidden sm:group-focus-within:block ">
                <span className=" w-full h-full flex items-center justify-center text-xl md:text-2xl  border-r-0 border rounded-l-full text-zinc-500   group-focus-within:border-blue-500 group-focus-within:border-r-0">
                  <IoIosSearch />
                </span>
              </div>
              <span className="h-10 flex  group">
                <input
                  type="text"
                  value={search}
                  onKeyUp={(e)=>searchVideo(e)}
                  onChange={(e) => setSearch(e.target.value)}
                  className={`xsm:w-72 md:w-96 lg:w-[550px] w-[140px] px-2 outline-none text-zinc-500 text-lg rounded-l-full border sm:group-focus-within:rounded-l-none sm:group-focus-within:border-l-0 border-zinc-100 group-focus-within:border-blue-500 sm:group-focus-within:rounded-0 ${
                    search.trim() !== "" ? "border-r-0" : ""
                  }`}
                  placeholder="Search"
                />
                {search.trim() !== "" ? (
                  
                  <span
                    onClick={() => setSearch("")}
                    className="h-10 w-10 flex items-center 
                        border-l-0 z-50 justify-center cursor-pointer text-xl md:text-2xl border group-focus-within:border-blue-500  hover:bg-zinc-100 text-zinc-500"
                  >
                    <RxCross1 />
                  </span>
                ) : (
                  ""
                )}
              </span>

              <span onClick={(e)=>searchVideo(e)}
              className="h-10 md-w-16 w-12 flex items-center justify-center text-xl md:text-2xl border rounded-r-full text-zinc-500 cursor-pointer hover:bg-zinc-100">
                <IoIosSearch />
              </span>
        </div>

        <div className="flex items-center gap-1">
          <div className="hidden md:flex">
            <span className="h-10 w-10 flex items-center justify-center cursor-pointer text-xl md:text-2xl rounded-full hover:bg-zinc-100 text-zinc-500">
              <BiVideoPlus />
            </span>
            <span className="h-10 w-10 flex items-center justify-center cursor-pointer text-xl md:text-2xl rounded-full hover:bg-zinc-100 text-zinc-500">
              <IoIosNotificationsOutline />
            </span>
          </div>
          <span className="h-10 w-10 flex items-center justify-center cursor-pointer rounded-full">
            <img
              className="w-full h-full rounded-full"
              src="https://xsgames.co/randomusers/avatar.php?g=male"
              alt=""
            />
          </span>
        </div>
      </div>

  );
};

export default Navbar;
