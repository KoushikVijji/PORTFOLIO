import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import './index.css';

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
