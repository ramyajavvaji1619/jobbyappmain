import { useEffect,useState } from "react";
import { useNavigate} from "react-router-dom";
import Cookies from 'js-cookie';
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';

import './index.css';

const Auth  = ()=>{
 
    let navigate = useNavigate();
       const goToHome =()=>{
        navigate("/");
       }
    const[loginBtn, setLoginBtn] = useState("login");
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[phnNumber, setPhnNumber] = useState("");
    const[errorMsg, setErrorMsg] = useState("");
    const[showSubmitError, setShowSubmitError] = useState(false);
    const[gender, setGender] = useState("");
    const[password, setPassword] = useState("");
    const[showPassword, setShowPassword] = useState(false);

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


    const renderPassword = () => {
      return (
          <>
              <label className="label" htmlFor="password">Password</label>
              <div className="password-container">
                  <input type={showPassword ? 'text' : 'password'}
                      id="password" placeholder="Enter Your Password" className="user-input-password" value={password}
                      onChange={((e) => setPassword(e.target.value))}
                  />
                  <button className="button-icon" onClick={(() => setShowPassword(!showPassword))}>
                      {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                  </button>
              </div>
          </>
      )
  }

//    console.log(name);


const onSubmitForm = async (event) => {
  event.preventDefault();
  if (loginBtn === 'login') {
    const url = "http://localhost:4447/auth/login"

          const options = {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  
                  email,
                  password
              })
          }
          const response = await fetch(url, options)
          const data = await response.json();
          if (response.ok === true) {
            Cookies.set('jwt-token',data.token)
            navigate("/")
        } else {
            setShowSubmitError(true);
            setErrorMsg(data.message)
        }
  } else {
      if (password.length >= 5 && password.length <= 8) {
          const url = "http://localhost:4447/auth/signup"

          const options = {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  name,
                  email,
                  phoneNumber: phnNumber,
                  gender,
                  password
              })
          }
          const response = await fetch(url, options)
          const data = await response.json();

          if (response.ok === true) {
              setLoginBtn('login')
          } else {
              setShowSubmitError(true);
              setErrorMsg(data.message)
          }
      } else {
          setShowSubmitError(true);
          setErrorMsg("Password length should be 5 to 8")
      }
  }
  setName("");
  setEmail("");
  setPassword("");
  setGender("");
  setPhnNumber("");
}


    return(
        <div className="jobby-app-container">
           <div className="card-container">
            <img src="https://assets.ccbp.in/frontend/react-js/logo-img.png" alt="logo" className="w-25"/>
           <div>
           <button className={loginBtn ==='login'? 'login-button':'login-button btn-off'}
           onClick={goToHome}>
            login
            </button>
           <button className={loginBtn ==='signup'? 'login-button':'login-button btn-off'}
           onClick={(()=>setLoginBtn('signup'))}>
            signup
            </button>
           </div>
           <form className="form-container" onSubmit={onSubmitForm}>
            <div className="input-container">{loginBtn === 'signup' ? renderUserName():''}</div>
             <div className="input-container">{renderEmail()}</div>
             <div className="input-container">{loginBtn === 'signup' ? renderphnNumber():''}</div>
             <div className="input-container">{loginBtn === 'signup' ? rendergender():''}</div>
             <div className="input-container">{renderPassword()}</div>
             <button className="login-button" type="submit">{loginBtn === 'login' ? 'Login' : 'Sign Up'}</button>
             {showSubmitError && <p className="error-msg">{errorMsg}</p>}
           </form>
           </div>
        </div>
    )
}                                


 export default Auth;