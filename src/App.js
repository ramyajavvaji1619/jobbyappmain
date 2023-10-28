import{Routes, Route} from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home/Home'
import Auth from '../src/components/Auth/Auth';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route exact path ="/auth" element={<Auth/>}/>
      <Route exact path="/" element={<Home/>}/>
      
     </Routes>
    </div>
  );
}

export default App;
