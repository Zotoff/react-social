import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import News from './components/news/news';
import Music from './components/music/music';
import Settings from './components/settings/settings';
import { Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    
      <div className="app-wrapper">
        <Header logo={logo} />
        <Nav friendsList={props.state.friendsPage.friends}/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs/*' element={<Dialogs dialogsData={props.state.profilePage.dialogs} messagesData={props.state.messagesPage.messages}/>} />
            <Route path='/profile/*' element={<Profile postsData={props.state.profilePage.posts}/>} />
            <Route path='/news/*' element={<News/>} />
            <Route path='/music/*' element={<Music/>} />
            <Route path='/settings/*' element={<Settings/>} />
          </Routes>
        </div>
      </div>
    
  );
}

export default App;
