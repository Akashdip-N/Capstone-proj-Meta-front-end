import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <main>
      <Nav />
      <Header />
      <Main />
      <BookingPage />
      <Footer />
    </main>
  );
}

export default App;
