// import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nopage from './Pages/NoPage';
import Home from './Pages/Home';
import Login from './Pages/Login';
import TvShow from './Pages/TvShow';
import NewsAndPopular from './Pages/NewsAndPopular';
import Movies from './Pages/Movies';
import MyList from './Pages/MyList';
import MyAccount from './Pages/MyAccount';
import SearchPage from './Pages/SearchBar';
import SignUp from './Pages/SignUp';
import Notification from './Pages/Notification';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SearchBar" element={<SearchPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/TvShow" element={<TvShow />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/NewsAndPopular" element={<NewsAndPopular />} />
          <Route path="/MyList" element={<MyList />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/MyAccount" element={<MyAccount />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
