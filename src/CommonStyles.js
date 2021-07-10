import ColorCode from './helpers/ColorCode';
export default {
    h1: {
        fontSize: 22,
        lineHeight: '27px',
      },
      h2: {
        fontSize: 20,
        lineHeight: '25px',
      },
      h3: {
        fontSize: 18,
        lineHeight: '23px',
      },
      h4: {
        fontSize: 16,
        lineHeight: '20px',
      },
      h5: {
        fontSize: 14,
        lineHeight: '18px',
        // lineHeight: 3,
      },
      h6: {
        fontSize: 12,
        lineHeight: '15px',
      },
      textCenter: {
        textAlign: 'center',
      },
      fontBold: {
        fontWeight: 'bold',
      },
      width: {
        width: '100%',
      },
      height: {
        height: '100%',
      },
      modelLayout: {
        // padding: '40px 62px 0px 62px',
        textAlign: 'center',
      },
      dialogFooter: {
        paddingLeft: 62,
        paddingRight: 62,
        paddingBottom: 40,
        justifyContent: 'center',
      },
      dialogContent: {
        paddingLeft: 62,
        paddingRight: 62,
        textAlign: 'center',
        // overflow : "hidden"
      },
      errMsg:{
        fontSize:12,
        color:'red',textAlign:'center'
      },
      stepsLayoutMain:{
        // flex:1,
        // flexDirection:'row',justifyContent:'space-between'
        
        justifyContent:'space-between',
       display:'flex',
        borderColor:'#ccc',
        borderRadius:10,
        borderWidth:1,
        width:'60%'
        
      },
      stepsLayoutSecond:{
        width:'40%',
        textAlign:'right',
        paddingRight:40
        // justifyContent:'flex-end',
      },
      stepsText:{
        width:'100%',
        display:'flex',
        padding:20,
      },
      commonBtn:{
        padding:12,
        borderRadius:8,
        borderColor:ColorCode.transparent,
        paddingLeft:40,paddingRight:40,
        fontFamily:'Prompt-SemiBold',
        color:ColorCode.white,
        fontSize:14,
        // width:'100%'
      },
      deliveryBox:{
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
        padding:20,
        // paddingTop:20,
        // paddingBottom:20,
        width:'100%'
      },
      totalItemsMain:{
       
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:12,
        paddingRight:12,
      

      },
      totalItems:{
        display:'flex',
        justifyContent:'space-between',
      },
      itemCount:{
        fontFamily:'Prompt-SemiBold',
        fontSize:16
      },
      borderLine:{
        borderBottom:'0.5px solid #EB0028',
        marginTop:15,
        marginBottom:15
      },
      productImg:{
        borderRadius:10,
        width:300,
        height:300
      },
      productTag:{
        display:'flex',
        justifyContent:'space-between'
      },
      productname:{
        fontFamily:'Prompt-Medium',
        fontSize:16
      },
      ProductData:{
        
      }
}
