import React, { useState } from 'react'
import './Remainder.css'
const Remainder = () => {
    const[reminder,setReminder]=useState([]);
    const[newReminder,setNewReminder]=useState("");
    const handleInputChange=(event)=>{
        setNewReminder(event.target.value)
    }
    const handleAdd=()=>{
        if(newReminder.trim()){
            setReminder([...reminder,newReminder])
            setNewReminder("")
        }
    }  
    
    const handleDelete=(index)=>{
        setReminder(reminder.filter((item,itemindex)=> itemindex !== index))
         

    }

    return (
    <div className='container'>
      <h1>Reminder App</h1>
      <div className='input-container'>
        <input type='text'
        value={newReminder}
        placeholder='Enter a Reminder'
        onChange={handleInputChange}
        />
        <button className='add-btn' onClick={handleAdd}>add remainder</button>

      </div>
      
      {
        reminder.length > 0 ? (
      <ul className='remainder-list'>
        {
            reminder.map((reminderItem,index)=>(
                <li key={index}>
                    {reminderItem}
                    <button onClick={()=>handleDelete(index)} className='delete-button'>Delete</button>
                </li>
            ))
        }
      </ul>):null
      }
    </div>
  )
}

export default Remainder
