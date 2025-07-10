import logo from './logo.svg';
import './App.css';
import { SideBar } from './components/SideBar/SideBar'

function App() {

  return (
    <div style={{height: '100vh', background: 'black'}}>
      <SideBar logotext="Instagram" />
    </div>
  );
}

export default App;
