import NavBar from "./components/Navbar";
import Banner from "./components/Carousel";
import AboutUs from "./components/AboutUs";
import MessageFA from "./components/MessageFA";
import MessageGSBola from "./components/MessageGSBola";
import Mission from "./components/Mission";
import Footer from "./components/Footer";
import ClubList from "./components/ClubList";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Alfaaz from "./Clubs/Alfaaz";
import EventGallery from "./components/EventGallery";
function App() {

 
  return (
    <Router >
       <Routes>
              <Route path="/" element={
                <main className="bg-blue-50">
                      <Banner />
                      <AboutUs />
                      <MessageFA />
                      <MessageGSBola />
                      <Mission />
                      <ClubList />
                      <EventGallery />
                      <Footer />
                      
              
                </main>
              
              
              
              }/>
                <Route path="/alfaaz" element={<Alfaaz />}/>
                <Route path="*" element={<h1>404! Page not found</h1>}/>
                {/* asterick is for every other page */}
        </Routes>
      
    <div className="App">
      <header>
        <NavBar />
      </header>   
    </div>
  
    </Router>
  );
}

export default App;
