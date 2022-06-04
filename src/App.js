import './App.css';
import MainPage from './components/MainPage/MainPage';
import Services from './components/ServicesPage/ServicesPage';
import GalleryPage from './components/GalleryPage/GalleryPage'
import ContactPage from './components/ContactPage/ContactPage';
import LocationPage from './components/LocationPage/LocationPage';

function App() {
  return (
    <div className="App">
      <MainPage/>
      <Services id='services'/>
      <GalleryPage id='gallery'/>
      <ContactPage id='contact'/>
      <LocationPage id='location'/>
    </div>
  );
}

export default App;

