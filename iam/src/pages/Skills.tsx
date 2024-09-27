import skills, { Skill } from "../assets/data/skills";

function Skills() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">My Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill: Skill) => (
          <div
            key={skill.name}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
          >
            <img src={skill.logo} alt={skill.name} className="w-16 h-16 mb-4" />
            <h2 className="text-xl font-semibold mb-2">{skill.name}</h2>
            <p className="text-gray-600">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
