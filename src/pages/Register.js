import React from 'react'
import '../components/style/register.css'

const Register=()=>{
    return(
        <>
            <body class="body-register">
                <div class="container container-register">
                    <form action="" method="POST" class="form-register">
                        <div className="Title-register">
                            Register
                        </div>
                        <div id="all-register">
                            <div class="mb-3 mb-3-register">
                                <input type="text" className="form-control form-control-register" id="ame" style={{width: '300px'}} autocomplete="new-password" required name="name" />
                                <label for="ame" className="lab lab-register">Name</label>
                            </div>
                            <div class="mb-3 mb-3-register">
                                <input type="email" className="form-control form-control-register" id="email"  style={{width: '300px'}} autocomplete="new-password" required name="email" />
                                <label for="email" className="lab lab-register">E-Mail</label>
                            </div>
                            <div class="mb-3 mb-3-register">
                                <input type="password" className="form-control form-control-register" id="password" autocomplete="new-password" required name="password" />
                                <label for="password" className="lab lab-register">Password</label>
                            </div>
                            <div class="mb-3 mb-3-register">
                                <textarea className="form-control form-control-register" id="address" rows="3" autocomplete="new-password" required name="address"></textarea>
                                <label for="address" className="lab lab-register" id="area">Address</label>
                            </div>
                            <div style={{display:'flex',marginTop:'40px'}}>
                                <div>
                                    <button type="submit" className="btn btn-primary btn-register" style={{backgroundColor:'rgb(55, 61, 96)', color: 'yellow', marginBottom: '30px'}} name="register">Register</button>
                                </div>
                            </div> 
                        </div> 
                    </form>
                    <div className="hello">
                        <div className="hello1">
                            <h1 id="l">Register Yourself</h1>
                            <h3 id="k">Your Profile Maker</h3>
                        </div>  
                    </div>
                </div>
            </body>
        </>
    )
}
export default Register;