import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Header from "../Header/Header";
import { Audio } from "react-loader-spinner";
import { AiFillStar } from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import {BsBriefcaseFill} from 'react-icons/bs';
import {BiLinkExternal} from 'react-icons/bi';
import './index.css';
import SkillsCard from "../SkillsCard";
import SimilarJobItem from '../SimilarJobItem'

const apiStatusConstants = {
    initial: "INITIAL",
    inProgress: "INPROGRESS",
    success: "SUCCESS",
    failure: "FAILURE"
}

const JobItemDetails = () => {
    let params = useParams();
    let navigate = useNavigate();
    const [JobItemDetails, setJobItemDetails] = useState({});
    const [similarJobs, setSimilarJobs] = useState([]);
    const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)

    const { id } = params;

    useEffect(() => {
        const token = Cookies.get('jwt-token');
        if (token === undefined) {
            navigate("/auth");
        }
        getJobDetails();
    }, [])

    const getJobDetails = async () => {
        setApiStatus(apiStatusConstants.inProgress);
        const token = Cookies.get("jwt-token");
        const url = `http://localhost:4447/api/jobs/${id}`
        const options = {
            headers: {
                Authorization: `Bearer ${token}`
            },
            method: 'GET'
        }
        const response = await fetch(url, options);
        
        if (response.ok === true) {
            const data = await response.json();
            setJobItemDetails(data.jobDetails);
            setSimilarJobs(data.similarJobs)
            setApiStatus(apiStatusConstants.success);
        } else {
            setApiStatus(apiStatusConstants.failure)
        }
    }

    const renderFailureView = () => (
        <div>
            <img src="https://assets.ccbp.in/frontend/react-js/failure-img.png "
                alt="failure View" className="failure-view" />
            <h1 className="failure-heading">OOPs Something Went Wrong</h1>
            <p className="failure-desc">we cannot find the page you are looking for.</p>
            <button type="button" className="jobs-failure-button" onClick={getJobDetails}>Retry</button>
        </div>
    );

    const renderLoaderView = () => (
        <div className="profile-loader-container">
            <Audio
                height="50"
                width="50"
                color="#ffffff"
                type="ThreeDots" />
        </div>
    );

    const renderJobItemDetails = () => {
        const { companyLogoUrl, companyWebsiteUrl,  employmentType, jobDescription, lifeAtCompany, location, packagePerAnnum, rating, title ,skills} = JobItemDetails;
        const { description, imageUrl } = lifeAtCompany
        return (
            <div className="full-job-item-container">
                <div className="job-items-container">
                    <div className="logo-image-container">
                        <img src={companyLogoUrl}
                            alt="job details company logo"
                            className="company-logo-justify"
                        />
                        <div className="title-container">
                            <h1 className="company-title-head">{title}</h1>
                            <div className="rating-container">
                                <AiFillStar className="star-icon" />
                                <p>{rating}</p>
                            </div>
                        </div>
                    </div>
                    <div className="location-type-salary-container">
                        <div className="location-container">
                            <div className="responsive">
                                <GoLocation className="location-logo" />
                                <p className="location-desc">{location}</p>
                            </div>
                            <div className="responsive">
                                <BsBriefcaseFill className="location-logo-breif" />
                                <p className="location-desc">{ employmentType}</p>
                            </div>
                        </div>
                        <p className="package-desc">{packagePerAnnum}</p>
                    </div>
                    <hr className="line" />
                    <div className="description-container">
                        <h1 className="desc-heading">Description</h1>
                        <a className="visit-link" href={companyWebsiteUrl} target='_blank'>Visit
                        <BiLinkExternal className="bi-link" /></a>
                    </div>
                    <p className="job-story-desc">{jobDescription}</p>
                    <h1 className="skill-heading">Skills</h1>
                    <ul className="skill-container">
                        {skills.map((eachSkill) =>(
                            <SkillsCard key={eachSkill.id} skillDetails ={eachSkill} />
                        ))}
                    </ul>
                    <h1 className="life-company-heading">life At Company</h1>
                    <div className="life-at-company-container">
                            <p className="life-company-desc">{description}</p>
                            <img src={imageUrl} alt="life at company" className="company-logo" />
                    </div>
                </div>
                <h1 className="similar-job-heading">similar Jobs</h1>
                <ul className="similar-cards">
                    {similarJobs.map((eachItem) =>(
                    <SimilarJobItem key={eachItem.id} jobDetails={eachItem} />))}
                </ul>
            </div>
        )
    }

    const renderJobView = ()=>{
        switch (apiStatus) {
            case apiStatusConstants.success: return renderJobItemDetails();
            case apiStatusConstants.failure: return renderFailureView();
            case apiStatusConstants.inProgress: return renderLoaderView();
            default:
                return null;
        }
    }

    return (
        <>
            <Header />
            <div className="get-products-details-container">
                {renderJobView()}
            </div>
        </>
    )
}

export default JobItemDetails;