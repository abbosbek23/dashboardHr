import './index.css'; // Import your CSS file for styling if needed
import Sidebar from './sidebar';
import Routes from './routes';

function App() {
  const pathname = window.location.pathname;
  const isHomePage = pathname === "/" ;

  return (
    <div className="app">
      <Sidebar />
      <div className="content" style={{ paddingLeft: !isHomePage ? "250px" : "0px" }}>
        <Routes />
      </div>
    </div>
  );
}

export default App;