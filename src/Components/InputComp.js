/** @format */

import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Link,
  Typography,
  InputAdornment,
  TextField,
  Input,
} from '@material-ui/core';
import CommonStyles from '../CommonStyles';
import ColorCode from '../helpers/ColorCode';

const useStyles = makeStyles({
  inputStyle: {
    color: ColorCode.black,
    fontSize: 14,
  },
  inputInlineStyle: {
    color: ColorCode.black,
    fontSize: 14,
    marginBottom: 8,
    borderBottom: '1px solid #CECECE',
    borderWidth: 2,
  },
  borderLine: {
    fontSize: 14,
    color: ColorCode.black,
    marginTop: 7,
  },
  underline: {
    '&&&:before': {
      borderBottom: '1px solid #ccc ',
    },
    '&&:after': {
      borderBottom: 'none',
    },
  },
});

const InputComp = (props) => {
  const classes = useStyles();
  const [input, setInput] = React.useState('');
  const HandleChange = (data) => {
    setInput(data);
  };
  return (
    <div>
      <Typography
        style={Object.assign({}, CommonStyles.h5, CommonStyles.fontBold, {
          marginBottom: 10,
          textAlign: 'left',
        })}
      >
        {props.labelValue}
      </Typography>
      <Input
        {...props}
        multiline={false}
        placeholder={props.placeholder}
        style={{ ...props.style, ...props.customColor }}
        InputProps={{
          endAdornment: (
            <img src={props.inputicon} style={{ ...props.iconStyle }} />
          ),
          underline: {
            '&&&:before': {
              borderBottom: 'none',
            },
            '&&:after': {
              borderBottom: 'none',
            },
          },
          classes: {
            input:
              props.showLine == true
                ? classes.inputInlineStyle
                : classes.borderLine,
          },
        }}
      />
    </div>
  );
};

export default InputComp;
