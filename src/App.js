// import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
import Nopage from './Pages/NoPage';
// import Home from './Pages/Home';
// import Login from './Pages/Login';
// import TvShow from './Pages/TvShow';
// import NewsAndPopular from './Pages/NewsAndPopular';
// import Movies from './Pages/Movies';
// import MyList from './Pages/MyList';
// import MyAccount from './Pages/MyAccount';
// import SearchPage from './Pages/SearchBar';
import SignUp from './Pages/SignUp';
// import Notification from './Pages/Notification';
const Home = lazy(() => import('./Pages/Home'));
import Login from './Pages/Login';
const TvShow = lazy(() => import('./Pages/TvShow'));
const NewsAndPopular = lazy(() => import('./Pages/NewsAndPopular'));
const Movies = lazy(() => import('./Pages/Movies'));
const MyList = lazy(() => import('./Pages/MyList'));
const MyAccount = lazy(() => import('./Pages/MyAccount'));
const SearchPage = lazy(() => import('./Pages/SearchBar'));

function App() {
  return (
    <Suspense fallback={<>Loading..</>}>
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
    </Suspense>
  );
}

export default App;
