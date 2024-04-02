import './index.css'; // Import your CSS file for styling if needed
import Sidebar from './sidebar';
import Routes from './routes';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
