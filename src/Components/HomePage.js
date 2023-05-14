import {useReducer, useState} from "react"
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const InitailValue = {
  longUrl: '',
  shortUrl: '',
  expiryDate: '',
};
const message = "Url is shortened successfully please go to hitory page to copy short url.";
const message2 = "Something went wrong! Please try again with a valid url."
// function settingId(){
//   var oldArray = JSON.parse(localStorage.getItem("Urls") || "[]");
//   for(let i = 0; i < oldArray.length; i++){
//     if(i === (oldArray.length) -1){
//       var lastObject = oldArray[i];
//       return lastObject.id;
//     }
//   }
// }
function reducer(state, action){
  switch(action.type){
    case 'changeValue':
      return{...state, [action.field]:action.value};
    default:
      throw new Error();
  }
}
function HomePage(){
  const [state, dispatch] = useReducer(reducer, InitailValue);
  const handleInputs = (event) => {
    dispatch({
      type: 'changeValue',
      field : event.target.name,
      value : event.target.value,
    })
  }
    // function onTextAreaChange({target: {value}}){
    //   return setValue(value);
    // }
  
    
    const onSubmit = (event) => {
      var states = JSON.parse(localStorage.getItem('Urls') || "[]");
      event.preventDefault();
      try{
        let urlOld = state.longUrl;
        let num = Math.floor(Math.random()*4);
        let num1 = num + 13;
        let newUrl = urlOld.slice(0,num1) + '.com'
        state.shortUrl = newUrl;
        states.push(state);
        localStorage.setItem("Urls", JSON.stringify(states));
        toast.success(message, {position: toast.POSITION.BOTTOM_CENTER});
      }
      catch(e){
        toast.error(message2, {position:toast.POSITION.BOTTOM_CENTER})
      }
      
    }
  
    return(
        <div className="homeDiv">
            <h2 className="homeText" >Enter your url to short</h2>
            <form className="inputForm" onSubmit={onSubmit}>

         <input className="homeInput"
           type="url"
           name="longUrl"
            value={state.longUrl}
            onChange={handleInputs}
           placeholder="Enter your url"
         />
        
         <input className="homeInput"
           type="date"
           name="expiryDate"
           value={state.expiryDate}
           onChange={handleInputs}
           placeholder="Enter expiry date"
         />
       
       <button className="myPersonelbtn" type="submit" >Short</button>
       <ToastContainer />
      

     </form>
        </div>
        
    )
}
export default HomePage;