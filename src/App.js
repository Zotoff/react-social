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
        <Nav friendsList={props.state.friendsPage}/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route 
              path='/dialogs/*' 
              element={
                <Dialogs 
                  dispatch={props.dispatch}
                  store={props.store}
                  />
              } 
            />
            <Route 
              path='/profile/*' 
              element={
                <Profile 
                  store={props.store}
                  />} 
            />
            <Route path='/news/*' element={<News/>} />
            <Route path='/music/*' element={<Music/>} />
            <Route path='/settings/*' element={<Settings/>} />
          </Routes>
        </div>
      </div>
    
  );
}

export default App;
