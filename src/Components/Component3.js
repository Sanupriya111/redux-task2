import React from 'react'
import{useSelector,useDispatch} from 'react-redux'
import Actions from '../Actions/Index';
 const Component3=props=> {
    const counter=useSelector(state=>state.counter);
    const text=useSelector(state=>state.text);
    const Dispatch=useDispatch();
  return (
    <div class="box"><h5>Component Three</h5>
    <p>Counter:{counter}</p>
    <p>Text:{text}</p>
   
    </div>
    
  )
}

export default Component3