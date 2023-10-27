import { useEffect,useState } from "react";
import { useNavigate} from "react-router-dom";
import Cookies from 'js-cookie';

import './index.css';


const Auth  = ()=>{
 
    let navigate = useNavigate();

    const[loginBtn, setLoginBtn] = useState("login");
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[phnNumber, setPhnNumber] = useState("");
    const[errorMsg, setErrorMsg] = useState("");
    const[showSubmitError, setShowSubmitError] = useState("false");
    const[gender, setGender] = useState("");
    const[password, setPassword] = useState("");

    const renderUserName =()=>{
        return(
          <>
          <label className="label" htmlFor="name">UserName</label>
            <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="user-input"
            value={name}
            onChange={((e)=>setName(e.target.value))}
            />
         </>
        )
    }

    const renderEmail =()=>{
        return(
          <>
          <label className="label" htmlFor="name">Email</label>
            <input
            type="text"
            id="email"
            placeholder="Enter your Email"
            className="user-input"
            value={email}
            onChange={((e)=>setEmail(e.target.value))}
            />
         </>
        )
    }


    const renderphnNumber =()=>{
        return(
          <>
          <label className="label" htmlFor="name">phone Number</label>
            <input
            type="text"
            id="phnNumber"
            placeholder="Enter your number"
            className="user-input"
            value={phnNumber}
            onChange={((e)=>setPhnNumber(e.target.value))}
            />
         </>
        )
    }



    const rendergender =()=>{
        return(
          <>
          <label className="label" htmlFor="name">gender</label>
            <input
            type="text"
            id="gender"
            placeholder="Enter your gender"
            className="user-input"
            value={gender}
            onChange={((e)=>setGender(e.target.value))}
            />
         </>
        )
    }


    const renderpassword =()=>{
        return(
          <>
          <label className="label" htmlFor="name">password</label>
            <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="user-input"
            value={password}
            onChange={((e)=>setPassword(e.target.value))}
            />
         </>
        )
    }


//    console.log(name);

    return(
        <div className="jobby-app-container">
           <div className="card-container">
            <img src="https://assets.ccbp.in/frontend/react-js/logo-img.png" alt="logo" className="w-25"/>
           <div>
           <button className={loginBtn ==='login'? 'login-button':'login-button btn-off'}
           onClick={(()=>setLoginBtn('login'))}>
            login
            </button>
           <button className={loginBtn ==='signup'? 'login-button':'login-button btn-off'}
           onClick={(()=>setLoginBtn('signup'))}>
            signup
            </button>
           </div>
           <form className="form-container">
            <div className="input-container">{loginBtn === 'signup' ? renderUserName():''}</div>
             <div className="input-container">{renderEmail()}</div>
             <div className="input-container">{loginBtn === 'signup' ? renderphnNumber():''}</div>
             <div className="input-container">{loginBtn === 'signup' ? rendergender():''}</div>
             <div className="input-container">{renderpassword()}</div>
           </form>
           </div>
        </div>
    )
}


 export default Auth;