import Router from './router'
import { BrowserRouter } from 'react-router-dom'
import TopBar from './components/Topbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
