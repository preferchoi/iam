import projects from "../assets/data/projects";

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
            안녕하세요! 저는 웹 개발자 최선호입니다. FastAPI, React, Docker 등의
            기술을 활용하여 성능이 뛰어나고 확장 가능한 웹 애플리케이션을
            개발하는 데 관심이 많습니다. 다양한 환경에서의 팀워크와 문제 해결
            능력을 통해 여러 프로젝트를 성공적으로 완료한 경험이 있습니다.
          </p>
          <a href="/about_me" className="text-blue-500 hover:underline">
            더보기
          </a>
        </div>
      </section>

      <section id="projects" className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {projects
              .sort(() => 0.5 - Math.random())
              .slice(0, 3)
              .map((project) => (
                <div
                  className="bg-white p-6 rounded-lg shadow-md"
                  key={project.id}
                >
                  <h3 className="text-2xl font-bold mb-2">
                    Project {project.id}: {project.name}
                  </h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <a
                    href={`/project/${project.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    자세히 보기
                  </a>
                </div>
              ))}
          </div>
          <a
            href="/projects"
            className="text-blue-500 hover:underline mt-6 block"
          >
            모든 프로젝트 보기
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
