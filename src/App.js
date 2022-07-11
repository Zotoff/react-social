import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Profile from './components/profile/profile';
import DialogsContainer from './components/dialogs/dialogs-container';
import UsersContainer from './components/users/users-container';
import News from './components/news/news';
import Music from './components/music/music';
import Settings from './components/settings/settings';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
      <div className="app-wrapper">
        <Header logo={logo} />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route 
              path='/dialogs/*' 
              element={
                <DialogsContainer />
              } 
            />
            <Route 
              path='/profile/*' 
              element={
                <Profile />} 
            />
            <Route path='/users/*' element={<UsersContainer/>} />
            <Route path='/news/*' element={<News/>} />
            <Route path='/music/*' element={<Music/>} />
            <Route path='/settings/*' element={<Settings/>} />
          </Routes>
        </div>
      </div>
    
  );
}

export default App;
