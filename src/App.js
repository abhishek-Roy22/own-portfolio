import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const style = {
  container: `w-full min-h-[100vh] bg-slate-900 text-slate-100`,
  wrapper: `max-w-7xl mx-auto`,
};

function App() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
