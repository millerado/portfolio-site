import './App.css';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Header from './components/Header';
import ProfilePicture from './components/ProfilePicture';
import ProjectDisplay from './components/ProjectDisplay';
import Resume from './components/Resume';

function App() {
  return (
    <div className='App'>
      <Header />
      <ProfilePicture />
      <Bio />
      <ProjectDisplay />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
