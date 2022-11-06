import './App.css';
import { Navbar, Sidebar } from './components';
import { Home, TaskPage } from './pages';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <div className='app__content'>
        {/* <Home /> */}
        <TaskPage />
      </div>
    </div>
  );
}

export default App;
