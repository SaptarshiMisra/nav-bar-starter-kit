import React, {useState} from 'react';
import {isLogin, doLogin,doLoginError} from '../../../actions';
import {  useDispatch } from "react-redux";
import { Redirect } from 'react-router';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import './login.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { FB_APP_ID } from './../../../ApiKey';
import { useFormFields } from "./../../../libs/hooksLib";
import { onError } from "./../../../libs/errorLib";
import { Auth } from "aws-amplify";
import {
  FormText,
  FormGroup,
  FormControl,
  FormLabel
} from "react-bootstrap";
import LoaderButton from "./../../LoaderButton";



export const Login = (props) => {
    const [user,setUser] = React.useState({});
    const [fbAuthStatus,setFbAuthStatus] = React.useState(false);
    const { history } = props;
    const [fields, handleFieldChange] = useFormFields({
      email: "",
      password: ""
    });
    function validateForm() {
      return fields.email.length > 0 && fields.password.length > 0;
    }
    const [isLoading, setIsLoading] = useState(false);
    async function handleSubmit(event) {
      event.preventDefault();
  
      setIsLoading(true);
  
      try {
        await Auth.signIn(fields.email, fields.password);
        let user =await Auth.currentAuthenticatedUser({
          bypassCache:false
        });
        dispatch(doLogin());
        props.userHasAuthenticated(true);
        history.push('/');
      } catch (e) {
        onError(e);
        dispatch(doLoginError(e));
        setIsLoading(false);
      }
    }
    const handleFbLogin = async (event) =>{
      console.log(event)
      let response = null;
      try{
        await Auth.federatedSignIn({provider:'Facebook'});
      }catch(e){
        dispatch(doLogin(user));
        onError(`Error occured in facebook login {e}`);
        console.log(e);
      }
      console.log(`facebook response {response}`);
      let user = await Auth.currentAuthenticatedUser({
        bypassCache:false
      });
      // dispatch(doLogin(user));
      history.push('/');
    }
    let dispatch = useDispatch();
    const responseFacebook = (response) => {
        console.log(response);
     }
     const responseFacebookRedirect = (response) =>{
        console.log(response);
        if(response.name){
            setFbAuthStatus(true);
        }
        localStorage.clear();
        dispatch(doLogin(response));
        history.push('/');        
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
                    <form onSubmit={handleSubmit}>
                      <FormGroup controlId="email" bsSize="large">
                        <FormLabel>Email</FormLabel>
                        <FormControl
                          autoFocus
                          type="email"
                          value={fields.email}
                          onChange={handleFieldChange}
                        />
                      </FormGroup>
                      <FormGroup controlId="password" bsSize="large">
                        <FormLabel>Password</FormLabel>
                        <FormControl
                          type="password"
                          value={fields.password}
                          onChange={handleFieldChange}
                        />
                      </FormGroup>
                      <p className="font-small blue-text d-flex justify-content-end pb-3">
                          Forgot
                          <a href="#!" className="blue-text ml-1">

                          Password?
                          </a>
                      </p>
                      <div className="text-center mb-3">
                        <LoaderButton
                          block
                          type="submit"
                          bsSize="large"
                          isLoading={isLoading}
                          disabled={!validateForm()}
                        >
                          Login
                        </LoaderButton>
                      </div>
                    </form>
                    <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                        or Sign in with:
                    </p>
                    <div className="row my-3 d-flex justify-content-center">
                
                    {/* <FacebookLogin
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
                    /> */}
                    <MDBBtn
                      type="button"
                      color="white"
                      rounded
                      className="mr-md-3 z-depth-1a"
                      onClick={handleFbLogin}
                      >
                      <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                    </MDBBtn>
                    {/* <FacebookButton
                      onLogin={handleFbLogin}
                    />     */}
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
                <a href="/signup" className="blue-text ml-1">

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
