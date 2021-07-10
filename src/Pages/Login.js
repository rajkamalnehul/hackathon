import React,{useState,useEffect} from "react";
import Button from '@material-ui/core/Button';
import ModalComp from '../Components/ModalComp';
import InputComp from '../Components/InputComp';
import ApiServices from '../helpers/ApiServices';
const Login =()=>{
    const [open, setOpen] = React.useState(false);
    const [inputtext, setInput] = React.useState('');
    const openModel =()=>{
        const obj={email:'bvanesh135@gmail.com',password:'123456'};
          console.log("login obj",obj);
        ApiServices.login(obj)
        .then((response)=>{
            console.log("login response",response);
        })
      setOpen(true);
    }
    const inputChange = (data) => {
        setInput(data);
      };
      useEffect(()=>{
          
      },[])
    return(
        <div>
        <Button onClick={openModel}>Model open</Button>
  <ModalComp
    modelTitle="Login"
    open={open}
    onClose={() => setOpen(false)}
    // renderFooter={() => createFooter()}
    footer={false}
  >
    <div></div>
    <div>
    <div style={{ paddingTop: 20, paddingBottom: 20 }}>
          <InputComp
            labelDisplay={true}
            labelValue=""
            placeholder="i.e. There is a conflict of interest because…"
            // value={inputtext}
            value={inputtext}
            onChange={(e) => inputChange(e.target.value)}
            multiline
            textAlignment="left"
            rows={4}
          />{" "}
        </div>
        </div>
    </ModalComp></div>
        
    )
}
export default Login;