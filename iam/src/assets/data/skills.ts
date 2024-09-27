export interface Skill {
  name: string;
  description: string;
  logo: string;
}

const skills: Skill[] = [
  {
    name: "React",
    description: "SPA(단일 페이지 애플리케이션) 구현 가능, 컴포넌트 기반 UI 설계 및 상태 관리",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Vue",
    description: "사용자 인터페이스를 설계하고 Vuex를 이용한 전역 상태 관리",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
  },
  
  {
    name: "TypeScript",
    description: "정적 타입을 활용할 수 있고, 타입을 관리하여 코드의 안전성과 유지보수성을 높임",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    name: "Node.js",
    description: "RESTful API 원칙에 따른 서버를 구축할 수 있음",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "Tailwind CSS",
    description: "유틸리티 클래스를 사용한 빠른 UI 스타일링 및 반응형 디자인을 구현 가능함",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "GraphQL",
    description: "데이터의 효율적인 조회 및 조작을 위한 API 쿼리 및 스키마를 작성할 수 있음",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
  },
  {
    name: "Python",
    description: "데이터 처리 및 분석, 백엔드 애플리케이션 설계 및 알고리즘 구현이 가능함",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    name: "FastAPI",
    description: "고성능의 비동기 API 서버 구축 및 경량화된 백엔드 API 설계",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/FastAPI_logo.svg",
  },
  {
    name: "Django",
    description: "RESTful API 원칙에 따른 서버를 구축할 수 있음",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg",
  },
  {
    name: "Socket.io",
    description: "실시간 양방향 통신을 활용한 채팅 및 알림 기능을 구현 가능함",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg",
  },
];

export default skills;