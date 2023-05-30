import './App.css';
import Head from './components/head/Head';
import Header from './components/header/Header';
import Plan from './components/plans/Plan';
import Gallery from './components/gallery/Gallery';
import Companies from './components/companies/Companies';
import Cards from './components/cards/Cards';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
   
      <Head/>

      <div id="one-1">
        <Header/>
      </div>

      <div id='two'>
        <Plan/>
      </div>      
       <div id='three'>
       <Gallery/>
       </div>
        <div id='four'>
        <Companies/>
        </div>

        <div id='five'>
        <Cards/>
        </div>
     
     
      <Footer/>
    </>
  );
}

export default App;
