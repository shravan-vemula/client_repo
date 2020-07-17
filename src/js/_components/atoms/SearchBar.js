import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Redirect} from 'react-router-dom';
import PaytmLogo from 'images/paytm.jpeg';

function SearchBar () {

  const [onChangeValue,setOnChangeValue] = React.useState(false)
  const [useIndex,setUseIndex] = React.useState(0)

  const banks = [
            
    {name : 'Axis Bank',placeHolder:'Enter Axis Bank Id',redirectStatus:true,url:'https://retail.axisbank.co.in/wps/portal/rBanking/axisebanking/AxisRetailLogin/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOKNAzxMjIwNjLwsQp0MDBw9PUOd3HwdDQwMjIEKIoEKDHAARwNC-sP1o_ArMYIqwGNFQW6EQaajoiIAVNL82A!!/dl5/d5/L2dBISEvZ0FBIS9nQSEh/?_ga=2.84227098.2090745026.1593530742-162983518.1593530742'},
    {name : 'Andhra Bank',placeHolder:'Enter Andhra Bank Id',redirectStatus:false},
    {name : 'Bank of America',placeHolder:'Enter Bank of America Id',redirectStatus:false},
    {name : 'Chase Bank',placeHolder:'Enter Chase Bank Id',redirectStatus:false},
    {name : 'HDFC Bank',placeHolder:'Enter HDFC Bank Id',redirectStatus:false},
    {name : 'RBS',placeHolder:'Enter RBS Bank Id',redirectStatus:true,url : 'https://www.rbsdigital.com/Default.aspx?CookieCheck=2020-07-01T04:47:34'},
    {name : 'State Bank of India',placeHolder:'Enter SBI Id',redirectStatus:true,url : 'https://retail.onlinesbi.com/retail/login.htm'},
    {name : 'Union Bank',placeHolder:'Enter Union Bank Id',redirectStatus:false},
    {name : 'Paytm Bank',placeHolder:'Enter Paytm Bank Id',redirectStatus:false},
]


function findWithAttr(array, attr, value) {
  for(var i = 0; i < array.length; i += 1) {
      if(array[i][attr] === value) {
          return i;
      }
  }
}

  const handleChange = (event,value) => {
    console.log("handling")
    console.log(value)
    var index = findWithAttr(banks,'name',value);
    console.log(banks[index])
    setUseIndex(index)
    setOnChangeValue(true);

    
  }
  if(onChangeValue === true){
    if(!banks[useIndex].redirectStatus){
    console.log("true");
   return <Redirect to={{

      pathname:"/SelectBank/LoginPage",
      state:{
        logo:PaytmLogo,
        placeHolder : banks[useIndex].placeHolder
      }


   }} />
  }
  else{
    return <Redirect to={{

      pathname:"/SelectBank/RedirectLogin",
      state:{
        url : banks[useIndex].url
      }


   }} />
  }
}



    

  
        
        return (
            <div style={{ width: 700 }}>
            <Autocomplete
              id="free-solo-searchbar"
              size="small"
              freeSolo
              autoHighlight
              data-testId="SearchBarTest"
              onChange={handleChange}
              options={banks.map((option) => (option.name))}
              renderInput={(params) => (
                <TextField {...params} label="Enter Bank Name" margin="normal" variant="outlined" />
              )}
            />
            </div>
    );
              }

export default SearchBar;
