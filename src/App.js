import logo from './logo.svg';
import './App.css';
import { SideBar } from './components/SideBar/SideBar'
import { Post } from './components/MainFeed/Post'
import { User } from "lucide-react"


function App() {

  return (
    <div className='rootContainer'>
      <SideBar logotext="Instagram" />
      <Post profileIcon={<User/>} profileUsername="UserName" postPhoto="https://upload.wikimedia.org/wikipedia/commons/8/8e/Rubber_duckies_So_many_ducks.jpg" postComments='This is a comment'/>
    </div>
  );
}

export default App;
