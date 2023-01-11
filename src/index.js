import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/header/Header";
import Home from "./pages/Home Page/HomePage";
import OptInPage from './pages/OptInPage';
import ThankYouPage from './pages/ThankYouPage';
import HowWeHelpPage from './pages/HowWeHelpPage';
import WhoWeArePage from './pages/WhoWeArePage';
import ResourcesPage from './pages/ResourcesPage';
import BlogPostPage from './pages/BlogPostPage';
import InteriorPage from './pages/InteriorPage';
import FullQualifyProcess from './pages/FullQualifyProcess';
import EstimatePage from './pages/EstimatePage';
import Footer from './components/footer/Footer';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="page">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/opt-in" element={<OptInPage/>}/>
            <Route exact path="/thank-you" element={<ThankYouPage/>}/>
            <Route exact path="/who-we-are" element={<WhoWeArePage/>}/>
            <Route exact path="/how-we-help" element={<HowWeHelpPage/>}/>
            <Route exact path="/resources" element={<ResourcesPage/>}/>
            <Route exact path="/blog-post" element={<BlogPostPage/>}/>
            <Route exact path="/interior" element={<InteriorPage/>}/>
            <Route exact path="/full-qualify-process" element={<FullQualifyProcess/>}/>
            <Route exact path="/estimate" element={<EstimatePage/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
