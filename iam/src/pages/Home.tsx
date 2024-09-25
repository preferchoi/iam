function Home() {
  return (
    <>
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm 최선호</h1>
        <p className="text-2xl mb-6">
          A Full-Stack Web Developer specializing in FastAPI, React, and Docker
        </p>
        <a
          href="#projects"
          className="bg-white text-blue-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200"
        >
          View My Work
        </a>
      </section>

      <section id="about" className="bg-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            I am a web developer with expertise in building scalable and
            efficient web applications using FastAPI, React.js, and Docker. I
            enjoy solving complex problems and thrive in fast-paced, dynamic
            environments.
          </p>
          <a href="#about" className="text-blue-500 hover:underline">
            Learn More
          </a>
        </div>
      </section>

      <section id="projects" className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Project 1: Don Keeper</h3>
              <p className="text-gray-700 mb-4">
                A budget management web app built with Vue.js and Spring Boot.
              </p>
              <a href="#project1" className="text-blue-500 hover:underline">
                View Details
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Project 2: O't MZ</h3>
              <p className="text-gray-700 mb-4">
                A fashion AI-powered recommendation system using FastAPI and
                Vue.js.
              </p>
              <a href="#project2" className="text-blue-500 hover:underline">
                View Details
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Project 3: Toriend</h3>
              <p className="text-gray-700 mb-4">
                A smart mirror for children built with Arduino, Jetson Nano, and
                WebSocket.
              </p>
              <a href="#project3" className="text-blue-500 hover:underline">
                View Details
              </a>
            </div>
          </div>
          <a
            href="#projects"
            className="text-blue-500 hover:underline mt-6 block"
          >
            View All Projects
          </a>
        </div>
      </section>

      <section id="skills" className="bg-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold">Frontend</h3>
              <p>HTML, CSS, JavaScript, React.js, Vue.js</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Backend</h3>
              <p>FastAPI, Node.js, Express</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">DevOps</h3>
              <p>Docker, Jenkins, AWS</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Databases</h3>
              <p>MySQL, Oracle DB</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-6">
            Feel free to reach out for collaboration or project inquiries.
          </p>
          <a
            href="mailto:youremail@example.com"
            className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-400"
          >
            Contact Me
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
