import React from 'react'
import{useSelector,useDispatch} from 'react-redux'
import Actions from '../Actions/Index';
 const Component1=props=> {
    const counter=useSelector(state=>state.counter);
    const text=useSelector(state=>state.text);
    const Dispatch=useDispatch();
  return (
    <div class="box"><h5>Component One</h5>
    <p>Counter:{counter}</p>
    <p>Text:{text}</p>
    <button onClick={()=>Dispatch(Actions.Counteractions.increment())}>
        Increase
    </button>
    <button onClick={()=>Dispatch(Actions.Counteractions.decrement())}>
        Decrease
    </button>
   
    </div>
    
  )
}

export default Component1