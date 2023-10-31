import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../Header/Header"
import Cookies from "js-cookie";
import './index.css';
import JobProfileSection from "../JobProfileSection/index";

const Jobs=()=>{
    let navigate = useNavigate();


    const token = Cookies.get("jwt-token")
    useEffect(()=>{
        if(token === undefined){
            navigate("/auth")
        }
    })
    return(
        <>
        <Header/>
        <div className="job-profile-container">
        <JobProfileSection/>
        </div>

        </>
    )
}

export default Jobs