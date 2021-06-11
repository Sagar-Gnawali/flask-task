import './App.css';
import SideBar from './Componnets/SideBar/SideBar.js';
import ShowContent from './Componnets/ShowContent/ShowContent.js';
function App() {
  return (
    <div className="app">
      <div className="container">
        <SideBar>
          <ShowContent />
        </SideBar>
      </div>
    </div>
  );
}

export default App;
