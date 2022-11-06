import './App.css';
import { Navbar, Sidebar } from './components';
import { Home } from './pages';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <div className='app__content'>
        <Home />
      </div>
    </div>
  );
}

export default App;
