/** @format */

import React from 'react';
import CommonStyles from '../../CommonStyles';

const CustomButton = (props) => {
  console.log("props",props);
  return(
  <button style={Object.assign({},CommonStyles.commonBtn,{backgroundColor:props.backgroundColor})} {...props}>{props.children}</button>
  )
  };

export default CustomButton;
