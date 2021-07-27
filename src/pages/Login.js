import React from 'react'
import '../components/style/login.css'
// import fire from '../components/firebase'

const Login=()=>{
    return(
        <>
        <body class="body-login">
          <div class="container container-login">
            <form action="" method="POST" class="form-login">
                <div class="Title-login">
                    Sign-In
                </div>
                <div id="all-login">
                    <div className="mb-3-login">
                        <label for="email" className="lab-login">E-mail</label>
                        <input type="email" className="form-control form-control-login" id="email" placeholder="Enter your email" style={{width: '300px'}} autocomplete="off" name="email" />
                    </div>
                    <div class="mb-3">
                        <label for="password" className="lab-login">Password</label>
                        <input type="password" className="form-control form-control-login" id="password" name="pass" />
                    </div>
                    <div style={{display:'flex', marginTop:'40px'}}>
                        <div id="bn" style={{marginRight:'80px', marginLeft: '25px'}}>
                            <button type="submit" className="btn btn-primary btn-login" name="login">Log In</button>
                        </div>
                        <div>
                            
                            <button type="button" className="btn btn-primary btn-login">Register</button>
                            
                        </div>
                    </div> 
                </div> 
            </form>
         </div>
        </body>
     </>
    )
}

export default Login
