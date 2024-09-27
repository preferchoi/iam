import experiences from "../assets/data/experience";

function Experience() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">경력 사항 및 교육 이수 내역</h1>
      <div className="space-y-8">
        {experiences.map((experience) => (
          <div
            key={experience.company}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-1">
              {experience.position}
            </h2>
            <h3 className="text-gray-600 mb-2">{experience.company}</h3>
            <p className="text-gray-500 mb-4">{experience.duration}</p>
            <ul>
              {experience.description.map((description) => (
                <li>{description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
