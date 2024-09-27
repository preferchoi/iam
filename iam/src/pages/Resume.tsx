function Resume() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Resume</h1>

      {/* Personal Information */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
        <p className="text-gray-600">Name: 최선호</p>
        <p className="text-gray-600">Email: example@example.com</p>
        <p className="text-gray-600">Phone: +1 234 567 890</p>
        <p className="text-gray-600">Location: Seoul, South Korea</p>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">ABC University</h3>
          <p className="text-gray-600">Bachelor of Science in Computer Science</p>
          <p className="text-gray-500">2015 - 2019</p>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Software Engineer - ABC Corporation</h3>
            <p className="text-gray-500">2020 - Present</p>
            <p className="text-gray-600">Developed web applications using React and Node.js. Improved app performance by 20% through optimization techniques.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Frontend Developer - XYZ Tech</h3>
            <p className="text-gray-500">2018 - 2020</p>
            <p className="text-gray-600">Led the development of user interfaces using React and Tailwind CSS. Worked closely with designers and backend developers to implement new features.</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>React.js</li>
            <li>Node.js</li>
            <li>TypeScript</li>
            <li>GraphQL</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Project A</h3>
            <p className="text-gray-600">Developed a full-stack application using React, Node.js, and GraphQL.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Project B</h3>
            <p className="text-gray-600">Built a responsive web application with React and Tailwind CSS, improving user experience and engagement.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;