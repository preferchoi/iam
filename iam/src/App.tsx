import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";

function App() {
  return (
    <div className="App bg-gray-100 text-gray-900">
      <nav className="w-full p-4 bg-white shadow-md fixed top-0">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">
            최선호
          </a>
          <div className="space-x-4">
            <a href="#about" className="hover:text-blue-500">
              About
            </a>
            <a href="#projects" className="hover:text-blue-500">
              Projects
            </a>
            <a href="#skills" className="hover:text-blue-500">
              Skills
            </a>
            <a href="#contact" className="hover:text-blue-500">
              Contact
            </a>
          </div>
        </div>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/ProjectDetails" element={<ProjectDetails />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
