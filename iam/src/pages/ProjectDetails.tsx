import { useParams, Link } from "react-router-dom";
import projects, { Project } from "../assets/data/projects";

function ProjectDetail() {
  const { id } = useParams<{ id: string }>(); // URL에서 id를 가져옴
  const project = id
    ? projects.find((project: Project) => project.id === parseInt(id))
    : null;

  if (!project) {
    return <h2>Project not found</h2>; // 프로젝트를 찾지 못한 경우
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <Link to="/">Back to Projects List</Link>
    </div>
  );
}

export default ProjectDetail;
