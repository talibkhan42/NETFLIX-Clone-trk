import './App.css';
import Row from './Row';
import requests from './requests';
import './Style/Row.css'
import Banner from './Banner';
import Navbar from './Navbar';
import { useState } from 'react';
function App() {
  const [loading, setLoading] = useState(true);
  useState(()=>{
      setTimeout(()=>{
        setLoading(false)
      }, 5000)
  },[])
  return (
    <div className="App">
      {(loading)?<div><img src='https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif' width="100%" height="100%"/></div>:
      <>
      <Navbar/>
      <Banner/>
      <Row title="NETFLIX ORIGINAL"  fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now"  fetchUrl={requests.fetchTranding}/>
      <Row title="Top Rated"  fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies"  fetchUrl={requests.fetchActionMovies}/>
      <Row title="Commedy Movies"  fetchUrl={requests.fetchCommedyMovies}/>
      <Row title="Horror Movies"  fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies"  fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentries"  fetchUrl={requests.fetchDocumentries}/>
      </>
    }
    </div>
  );
}

export default App;
