import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CustomButton from '../Components/custom-button/CustomButton';
import CommonStyles from '../CommonStyles';
import ColorCode from '../helpers/ColorCode';
import Button from '@material-ui/core/Button';
import product_img from '../assests/Images/703636016_Pedigree-Puppy-Small-Breed-Pouch-1.2kg_Front (1).png';
var Items=[{id:1,p_img:product_img,P_name:'Supima Cotton: Marvel Brick In The Wall',price:'899'},{id:2,p_img:product_img,P_name:'Supima Cotton: Marvel Brick In The Wall',price:'899'}]
const CartItems =(props)=>{
    const AddressChange =()=>{
        return(
            
                <Paper style={{backgroundColor:ColorCode.pink}}>
                    
                    <div style={CommonStyles.deliveryBox}>
                    <div style={{width:'40%'}}>Deliver to: 26PW+54, Satya Murthy Nagar, Teynampet, Chennai, Tamil Nadu 600035</div>
                    <div style={{width:'30%'}}></div>
                    <div style={{width:'30%'}}><CustomButton backgroundColor={ColorCode.skyblue}>Change Address</CustomButton></div>
                    </div>
                </Paper>
        )
    }
    const CartList =()=>{
        return(
            <Paper >
                <div style={CommonStyles.totalItemsMain}>
                    <div style={CommonStyles.totalItems}>
                    <div style={CommonStyles.itemCount}>Items (3) </div>
                    <div style={CommonStyles.itemCount}>Total Payable: ₹ 2726</div></div>
                    <div style={CommonStyles.borderLine}></div>
                    
{Items&&Items.map((item)=>{
    return(
        <Grid container spacing={3}>
        <Grid item xs={12} sm={4}><img src={item.p_img} style={CommonStyles.productImg}/></Grid>
        <Grid item xs={12} sm={6}>
            <div style={CommonStyles.ProductData}>
            <div style={CommonStyles.productTag}>
                <div style={CommonStyles.productname}>{item.P_name}</div>
                <div style={CommonStyles.productname}>${item.price}</div>
            </div>
            <div style={{float:'right'}}>
            <Button>Remove</Button></div>
            </div>
            </Grid></Grid>
    )
})
    }
               
                </div>
            </Paper>
        )
    }
    return(
        <div>
            {AddressChange()}
            <div style={{padding:8}}></div>
            {CartList()}
        </div>
    )
}
export default CartItems;