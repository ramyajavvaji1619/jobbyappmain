import{Routes, Route} from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home/Home'
import Auth from '../src/components/Auth/Auth';
import Jobs from '../src/components/Jobs/index';
import JobItemDetails from '../src/components/JobItemDetails/index';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route exact path ="/auth" element={<Auth/>}/>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path='/jobs' element={<Jobs/>}/>
      <Route exact path='/jobs/:id' element={<JobItemDetails/>}/>
      
     </Routes>
    </div>
  );
}

export default App;
