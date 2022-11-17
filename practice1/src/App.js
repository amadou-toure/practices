import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header'
import Task_form from './components/Task_form/Task_form';
import Table from './components/Table/Table'
import tab from './components/data'
import tab2 from './components/data2';
import Style from './App.module.css'



function App() {
  
  return(
   <div>
    <Header />
    <Task_form/>
    <div className={Style.tables}>
      <Table tab={tab} color='blue' /> 
      <Table tab={tab} color='red'/>
      <Table tab={tab2} color='green'/>
    </div>
    
    
   </div> 
  
  )
}

export default App;
