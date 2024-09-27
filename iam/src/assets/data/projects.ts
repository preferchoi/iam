export interface Project {
  id: number;
  name: string;
  description: string;
}

const projects: Project[] = [
  { id: 1, name: "Project A", description: "This is Project A." },
  { id: 2, name: "Project B", description: "This is Project B." },
  { id: 3, name: "Project C", description: "This is Project C." },
];
export default projects;
