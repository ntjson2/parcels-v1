
import TotalWidget from './components/TotalWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListData from './components/ListData';
import NavBar from './components/NavBar';
import AddMinedMinerals from './components/AddMinedMineral';
import ParcelList from './components/ParcelList';


function App() {
  
  
  return (
    <>
      <NavBar/>
      <ParcelList parcels={[]} />
      <AddMinedMinerals/>
     
     {/*  <DatePicker/>  */}   
      <TotalWidget/>
      <ListData/>         
 


    </>
  )
}

export default App
