import { useState } from 'react';
import { useEffect } from 'react';
import DatePicker from './components/DatePicker';
import TotalWidget from './components/TotalWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListData from './components/ListData';
import NavBar from './components/NavBar';
/* import Todo from './components/Todo'; */

import db from './components/firebase';
import { collection, onSnapshot } from 'firebase/firestore';


function App() {
  const [count, setCount] = useState(0)
    
  
  useEffect(()=> {
    //Using onSnapshot as it is like a react hook
    const onSub = onSnapshot(collection(db,"p3"), (snapshot) => {
      console.log(snapshot.docs.map(doc => doc.data()));
    });
    return onSub;
  });
  

  return (
    <>
      <NavBar/>
      <div className='p-3'>
        <h1>hellos world</h1>       
      </div>     
      <DatePicker/>    
      <TotalWidget/>
      <ListData/>
     

    </>
  )
}

export default App
