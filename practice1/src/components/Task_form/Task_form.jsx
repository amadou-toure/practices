
import { useEffect, useState } from 'react';
import Style from './Task_form.module.css';
import Toast from 'react-js-toast';
import Tab from '../data'
import tab from '../data';


function Task_form(){
    let toastMethod = null;
    var [task,setTask]=useState('');
   
    const saveTask=()=>{
        //future procedure pour stoquer la task en bd
        try {
            Tab.push(task);
            toastMethod.showToast('Task ` '+ task +' ` saved successfull', 'info');
        } catch (error) {
            toastMethod.showToast(error, 'error');
        }
    } 
    return(
        <div className={Style.container}>
            <Toast ref={node => (toastMethod = node)} type='info' message='my default message' position='top' />
            <form className={Style.element}>
                 <input type="text" placeholder='enter your task here' onChange={(e)=>setTask(e.target.value)} />
                 <br />
                 <input type="button" value="save task" onClick={saveTask}/>
            </form>
            {tab.map((elts)=><li key={tab.indexOf}>{elts}</li>)}
        </div>
        
    )
}

export default Task_form 
