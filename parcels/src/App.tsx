
import TotalWidget from './components/TotalWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListData from './components/ListData';
import NavBar from './components/NavBar';
import AddMinedMinerals from './components/AddMinedMineral';
import ParcelList from './components/ParcelList';
import MinedUserMinerals from './components/MinedUserMinerals';


function App() {
  
  
  return (
    <>
      <NavBar/>
      <ParcelList parcels={[]} />
      <AddMinedMinerals/>
      <MinedUserMinerals parcels={[]} />     
      <TotalWidget/>
      <ListData/>         
 
    </>
  )
}

export default App
