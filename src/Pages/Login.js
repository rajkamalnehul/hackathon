import React,{useState,useEffect} from "react";
import Button from '@material-ui/core/Button';
import ModalComp from '../Components/ModalComp';
import InputComp from '../Components/InputComp';
const Login =()=>{
    const [open, setOpen] = React.useState(false);
    const [inputtext, setInput] = React.useState('');
    const openModel =()=>{
      setOpen(true);
    }
    const inputChange = (data) => {
        setInput(data);
      };
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