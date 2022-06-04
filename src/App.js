import './App.css';
import MainPage from './components/MainPage/MainPage';
import Services from './components/ServicesPage/ServicesPage';
import GalleryPage from './components/GalleryPage/GalleryPage';
import SaloonsPage from './components/SaloonsPage/SaloonsPage'
import LocationPage from './components/LocationPage/LocationPage';

function App() {
  return (
    <div className="App">
      <MainPage id='start'/>
      <Services id='services'/>
      <GalleryPage id='gallery'/>
      <SaloonsPage id='contact'/>
      <LocationPage id='location'/>
    </div>
  );
}

export default App;

