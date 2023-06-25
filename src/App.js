import NavBar from "./components/Navbar";
import Banner from "./components/Carousel";
import AboutUs from "./components/AboutUs";
import MessageFA from "./components/MessageFA";
import MessageGSBola from "./components/MessageGSBola";
import Mission from "./components/Mission";
import Footer from "./components/Footer";
import ClubList from "./components/ClubList";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Alfaaz from "./Pages/Alfaaz";
import EventGallery from "./components/EventGallery";
import Gallery from "./Pages/Gallery";
import DebSoc from "./Pages/DebSoc";
import Enigma from "./Pages/Enigma";
import Enarrators from "./Pages/Enarrators";
import Filmski from "./Pages/Filmski";
import MUN from "./Pages/MUN";
import Alpha from "./Pages/Alpha";
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
                <Route path="/clubs/Alfaaz" element={<Alfaaz />}/>
                <Route path="/clubs/DebSoc" element={<DebSoc />}/>
                <Route path="/clubs/Enigma" element={<Enigma />}/>
                <Route path="/clubs/Enarrators" element={<Enarrators />}/>
                <Route path="/clubs/Filmski" element={<Filmski />}/>
                <Route path="/clubs/MUN" element={<MUN />}/>
                <Route path="/clubs/Alpha" element={<Alpha />}/>
                <Route path="/event-gallery" element={<Gallery />}/>
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
