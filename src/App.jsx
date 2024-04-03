import './index.css'; // Import your CSS file for styling if needed
import Sidebar from './sidebar';
import Routes from './routes';

function App() {
  return (
    <>
    {
      window.location.href === "http://localhost:5173/" && window.location.href === "https://xbuz.netlify.app/" ? ( <div className="content">
      <Routes/>
    </div>):(<div className="app">
      <Sidebar />
      <div className="content">
        <Routes />
      </div>
    </div>)
    }
    {/* <div className="app">
      <Sidebar />
      <div className="content">
        <Routes />
      </div>
    </div> */}
    </>
  );
}

export default App;
