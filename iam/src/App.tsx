import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";
import PostDetails from "./pages/PostDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App bg-gray-100 text-gray-900">
      <nav className="w-full p-4 bg-white shadow-md fixed top-0">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">
            최선호
          </a>
          <div className="space-x-4">
            <a href="/#about_me" className="hover:text-blue-500">
              About
            </a>
            <a href="/#projects" className="hover:text-blue-500">
              Projects
            </a>
            <a href="/#skills" className="hover:text-blue-500">
              Skills
            </a>
            <a href="/#experience" className="hover:text-blue-500">
              experience
            </a>
            <a href="/#contact" className="hover:text-blue-500">
              Contact
            </a>
            <a href="/#blog" className="hover:text-blue-500">
              blog
            </a>
            <a href="/#resume" className="hover:text-blue-500">
              resume
            </a>
          </div>
        </div>
      </nav>
      <main className="pt-16">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about_me" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<PostDetails />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />{" "}
            {/* Catch-all Route for 404 */}
          </Routes>
        </HashRouter>
      </main>
    </div>
  );
}

export default App;
