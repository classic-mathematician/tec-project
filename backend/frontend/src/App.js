import './App.css';
import tecLogo from './images/tec_logo.png'
import TopicList from './components/TopicList';
import Researcher from './components/Researcher';
import ResearcherList from './components/ResearcherList';


function App() {
  return (
    <div className="app-tec">

      <div className='logo-tec-cont'>
        <img src={tecLogo} className='logo-tec' />
      </div>

      <div className="main-list">
        <h1>My research topics</h1>
        <TopicList /> 
      </div>

      <div className="main-list">
        <h1>My research topics</h1>
        <ResearcherList />
      </div>
      

    </div>
  );
}

export default App;
