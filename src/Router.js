import App from './App.js';
import Profile from './Profile.js';
import MiniGame from './MiniGame.js';
import { BrowserRouter } from 'react-router-dom';

function Router(){
    return (
        <BrowserRouter>
          <Routes>
              <Route path="/" element={ <App /> } />
              <Route path="/profile" element={ <Profile /> } />
              <Route path="/minigame" element={ <MiniGame />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;