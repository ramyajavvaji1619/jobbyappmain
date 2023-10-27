import{Routes, Route} from 'react-router-dom';
import './App.css';
import Auth from '../src/components/Auth/Auth';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route exact path = "/auth" element={<Auth/>}/>
     </Routes>
    </div>
  );
}

export default App;
