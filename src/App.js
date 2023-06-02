import './App.css';
import Head from './components/head/Head';
import Header from './components/header/Header';
import Plan from './components/plans/Plan';
import Gallery from './components/gallery/Gallery';
import Companies from './components/companies/Companies';
import Cards from './components/cards/Cards';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>

      <Head />

      <div id="Za-nas">
        <Header />
      </div>

      <div id='Paketi'>
        <Plan />
      </div>
      <div id='Prosli-tiketi'>
        <Gallery />
      </div>
      <div id='Kladionice'>
        <Companies />
      </div>

      <div id='Metodi-Placanja'>
        <Cards />
      </div>

      <div id='Kontakt'>
      <Contact/>
      </div>
      

      <Footer />







    </>
  );
}

export default App;
