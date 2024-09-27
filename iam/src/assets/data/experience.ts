// src/assets/data/experience.ts
export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    company: "(주) 게더링",
    position: "Full Stack Developer",
    duration: "2024. 03. - 2024.08.",
    description: [
      "React와 FastAPI를 사용해 웹 애플리케이션을 설계하고 구현했습니다.",
      "기존에 사용하던 Tornado에서 FastAPI로 기술 변화를 이끌어냈습니다.",
      "근무 기간 동안, 3개의 외부 프로젝트를 진행했습니다.",
    ],
  },
  {
    company: "SSAFY",
    position: "Trainee",
    duration: "2022. 07. - 2023.06.",
    description: [
      "Vue.js와 Django를 학습했습니다.",
      "기본적인 알고리즘을 학습했고, 삼성 자체 기준 A형을 취득했습니다.",
      "교육 하반기 동안, 3개의 팀 프로젝트를 진행했습니다.",
    ],
  },
  {
    company: "비전공자를 위한 SW 개발자과정",
    position: "Trainee",
    duration: "2020. 07. - 2024.11.",
    description: [
      "Java와 JSP를 학습했습니다.",
      "python을 활용하여 머신러닝을 학습했습니다.",
      "교육 기간 동안, 자체 학습을 통해 최종 프로젝트 때 CNN 모델을 제작했습니다.",
    ],
  },
];

export default experiences;
