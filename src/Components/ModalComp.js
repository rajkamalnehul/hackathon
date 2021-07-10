import React, { Component, useState } from 'react';
import ColorCode from '../helpers/ColorCode';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CommonStyles from '../CommonStyles';
import { Typography } from '@material-ui/core';
const ModalComp = (props) => {

  return (
    <div>
      <Dialog
      disableBackdropClick
        {...props}
        style={{ background: ColorCode.transparent, borderRadius: 20 }}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle style={CommonStyles.modelLayout} id='form-dialog-title'>
          <Typography
            style={Object.assign(
              {},
              CommonStyles.h2,
              {
                fontWeight:CommonStyles.fontWeight,
                fontSize: props.customStyle ? '24px' : '30px',
                color: ColorCode.black,
                lineHeight: '30px',
              },
              props.cancelStyle
            )}
          >
            {props.modelTitle}
          </Typography>
        </DialogTitle>
        <DialogContent
          style={Object.assign({}, CommonStyles.dialogContent, {
            paddingBottom: props.footer == false ? 40 : 10,
          })}
        >
          {props.children}
        </DialogContent>
        {props.footer && (
          <DialogActions style={CommonStyles.dialogFooter}>
            {props.renderFooter()}
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
};

export default ModalComp;
