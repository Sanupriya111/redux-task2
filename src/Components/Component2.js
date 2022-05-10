import React,{useState} from 'react'
import{useSelector,useDispatch} from 'react-redux'
import Actions from '../../src/Actions/Index';
const Component2=props=> {
  const Dispatch=useDispatch();
  const counter=useSelector(state=>state.counter);
  const[valuechange,setValuechange]=useState("")
  const handleSetText=()=>{
    Dispatch(Actions.Textactions.setText(valuechange))
  }
  const handleClearText=()=>{
    Dispatch(Actions.Textactions.clearText())
    setValuechange('');
  }
  
  return (
    <div class="box">
      <h5>Component Two</h5>
      <p>Counter:{counter}</p>
      <label>TExt:</label>
      <input type='text' value={valuechange} onChange={event=>setValuechange(event.target.value)} /><br/>
      <button type='submit' onClick={handleSetText}>Set Redux</button>
      <button type='submit' onClick={handleClearText}>Clear Redux</button>
    </div>
  )
}

export default Component2