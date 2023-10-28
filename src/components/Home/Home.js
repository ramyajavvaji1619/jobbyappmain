import { useNavigate,Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "../Header/Header";
import Cookies from "js-cookie";

import './index.css';

const Home = ()=>{
    let navigate=useNavigate();

    const token=Cookies.get('jwt_token');
    
    // useEffect(()=>{
    //     if(token === undefined){
    //         navigate("/auth");
    //     }
    // })

    return(
        <>
        <Header/>
        <div className="home-container">
            <div className="responsive-container">
                <h1 className="main-heading">Find the jobs Fits Your Life</h1>
                <p className="job-desc">Millions of People are searching for jobs ,salary,information,company reviews .Find the Job that fits your abilities and potential.</p>
                <button className="find-jobs">Find Jobs</button>
            </div>
        </div>
        </>
    )
}
export default Home;