/** @format */

import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import ModalComp from '../Components/ModalComp';
import InputComp from '../Components/InputComp';
import CustomButton from '../Components/custom-button/CustomButton';
import CommonStyles from '../CommonStyles';
import ApiServices from '../helpers/ApiServices';
const Login = () => {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMsg, setErrorMsg] = React.useState('');
  const openModel = () => {
    setOpen(true);
  };
  const inputEmailChange = (data) => {
    setEmail(data);
  };
  const inputPasswordChange = (data) => {
    setPassword(data);
  };
  const loginAPICall =()=>{
    const obj={email:email,password:password};
    // console.log("login obj",obj);
  ApiServices.login(obj)
  .then((response)=>{
      if(!response.error){
        setOpen(false);
      }else{
          setErrorMsg(response.message);
      }
    
      console.log("login response",response);
  })
  }
  const loginSubmit =()=>{
      if(email==''){
          setErrorMsg("Email is Required")
      }else if(password==''){
        setErrorMsg("Password is Required")
      }else{
        setErrorMsg('');
        loginAPICall();
      }
  }
  return (
    <div>
      <Button onClick={openModel}>Model open</Button>
      <ModalComp
        modelTitle='Login'
        open={open}
        onClose={() => setOpen(false)}
        // renderFooter={() => createFooter()}
        footer={false}
        style={{width:'250px'}}
      >
        <div>
          <div style={{ paddingTop: 20, paddingBottom: 20 }}>
            <InputComp
              labelDisplay={true}
              labelValue=''
              placeholder='Email'
              // value={inputtext}
              value={email}
              onChange={(e) => inputEmailChange(e.target.value)}
              multiline
              textAlignment='left'
              rows={4}
              style={CommonStyles.width}
            />
            <InputComp
              labelDisplay={true}
              labelValue=''
              placeholder='Password'
              value={password}
              onChange={(e) => inputPasswordChange(e.target.value)}
              multiline
              textAlignment='left'
              rows={4}
              style={CommonStyles.width}
              type="password"
            />{' '}
          </div>
          {errorMsg&&
              <div style={CommonStyles.errMsg}>{errorMsg}</div>
              }
          <div
            style={{
              paddingTop: 20,
              paddingBottom: 20,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
              
            <CustomButton onClick={()=>loginSubmit()}>Login</CustomButton>
          </div>
        </div>
      </ModalComp>
    </div>
  );
};
export default Login;
