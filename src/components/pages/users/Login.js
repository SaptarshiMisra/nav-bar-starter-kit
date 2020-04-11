import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import {isLogin, doLogin} from '../../../actions';
import {  useDispatch } from "react-redux";
import { Redirect } from 'react-router';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import './login.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { FB_APP_ID } from './../../../ApiKey';

export const Login = (props) => {
    const [user,setUser] = React.useState({});
    const [fbAuthStatus,setFbAuthStatus] = React.useState(false);
    const { history } = props;

    React.useEffect(()=>{
        if((null !== localStorage.getItem('user') && "undefined" !== localStorage.getItem('user') ) && JSON.parse(localStorage.getItem('user'))){
            localStorage.clear();
        }
    });


    
    let dispatch = useDispatch();
    const responseFacebook = (response) => {
        console.log(response);
        // if(response.name){
        //     setFbAuthStatus(true);
        // }
        // setUser(response);
        // dispatch(doLogin());

        // props.userHasAuthenticated(true);
        // return responseFacebookRedirect(response);
     }
     const responseFacebookRedirect = (response) =>{
        console.log(response);
        if(response.name){
            setFbAuthStatus(true);
        }
        localStorage.clear();
        // localStorage.setItem('user',JSON.stringify(response));
        // localStorage.setItem('isAuthenticated',true);
        dispatch(doLogin(response));
        history.push('/');
        // props.userHasAuthenticated(true);
        
     }
     if(fbAuthStatus){
        return  <Redirect to="/" />
    }
    return (
        <div style={{height:'100vh'}}>
            <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                <MDBCard>
                    <MDBCardBody className="mx-4">
                    <div className="text-center">
                        <h3 className="dark-grey-text mb-5">
                        <strong>Sign in</strong>
                        </h3>
                    </div>
                    <MDBInput
                        label="Your email"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                    />
                    <MDBInput
                        label="Your password"
                        group
                        type="password"
                        validate
                        containerClass="mb-0"
                    />
                    <p className="font-small blue-text d-flex justify-content-end pb-3">
                        Forgot
                        <a href="#!" className="blue-text ml-1">

                        Password?
                        </a>
                    </p>
                    <div className="text-center mb-3">
                        <MDBBtn
                        type="button"
                        gradient="blue"
                        rounded
                        className="btn-block z-depth-1a"
                        >
                        Sign in
                        </MDBBtn>
                    </div>
                    <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                        or Sign in with:
                    </p>
                    <div className="row my-3 d-flex justify-content-center">
                
                <FacebookLogin
                    appId={FB_APP_ID}
                    autoLoad={false}
                    textButton="Facebook"
                    fields="name,email,picture"
                    onClick={responseFacebook}
                    callback = {responseFacebookRedirect}
                    render={renderProps => (
                        <MDBBtn
                            type="button"
                            color="white"
                            rounded
                            className="mr-md-3 z-depth-1a"
                            // onIconClick={renderProps.onClick}
                            onClick={renderProps.onClick}
                            >
                                <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                            </MDBBtn>
                      )}
                />
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="z-depth-1a"
                >
                  <MDBIcon fab icon="google-plus-g" className="blue-text" />
                </MDBBtn>
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                <a href="#!" className="blue-text ml-1">

                  Sign Up
                </a>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    
            
</div>
)

    
}