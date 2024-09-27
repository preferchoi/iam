function AboutMe() {
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 pt-24">
        <div className="container mx-auto text-center px-6 lg:px-0">
          <header>
            <h1 className="text-5xl font-extrabold text-primary mb-6">
              About Me
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
              안녕하세요! 저는 웹 개발자 최선호입니다. FastAPI, React, Docker
              등의 기술을 활용하여 성능이 뛰어나고 확장 가능한 웹 애플리케이션을
              개발하는 데 관심이 많습니다. 다양한 환경에서의 팀워크와 문제 해결
              능력을 통해 여러 프로젝트를 성공적으로 완료한 경험이 있습니다.
            </p>
          </header>

          {/* Skills Section */}
          <div className="mt-16">
            <h2 className="text-4xl font-bold mb-6 text-secondary">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Frontend
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>React</li>
                  <li>Vue.js</li>
                  <li>HTML, CSS, JavaScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </article>

              <article className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Backend
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>FastAPI</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Flask</li>
                </ul>
              </article>

              <article className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-primary mb-4">DevOps</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Docker</li>
                  <li>Jenkins</li>
                  <li>AWS</li>
                  <li>CI/CD</li>
                </ul>
              </article>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mt-16">
            <h2 className="text-4xl font-bold mb-6 text-secondary">
              Experience
            </h2>
            <div className="text-left max-w-4xl mx-auto space-y-8">
              <article className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  게더링 (2024.03 ~ 2024.08)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  쇼핑몰 템플릿 제작, FastAPI를 이용한 API 개발 및 결제 시스템
                  연동을 담당.
                </p>
              </article>

              <article className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  준비된 사람들 (2024.05 ~ 2024.06)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  요양보호사 매칭 서비스 개발, 매칭 알고리즘 및 DB 설계를 진행.
                </p>
              </article>

              <article className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Sunway Adventure (2024.07 ~ 2024.08)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  워터파크 예약 시스템 개발 및 데이터 통계 기능 구현.
                </p>
              </article>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="mt-16">
            <h2 className="text-4xl font-bold mb-6 text-secondary">
              교육 및 자격
            </h2>

            <div className="relative max-w-4xl mx-auto">
              {/* 타임라인 */}
              <div className="border-l-4 border-primary">
                <article className="bg-white p-6 rounded-lg shadow-md relative mb-2">
                  <span className="absolute -left-4 top-0 bg-primary w-8 h-8 rounded-full flex items-center justify-center">
                    🎓
                  </span>
                  <h3 className="text-2xl font-bold text-primary">
                    조선대학교
                  </h3>
                  <p className="text-gray-600">2021.02 졸업</p>
                </article>

                <article className="bg-white p-6 rounded-lg shadow-md relative mb-2">
                  <span className="absolute -left-4 top-0 bg-primary w-8 h-8 rounded-full flex items-center justify-center">
                    🏅
                  </span>
                  <h3 className="text-2xl font-bold text-primary">
                    삼성 청년 SW 아카데미
                  </h3>
                  <p className="text-gray-600">2023.06 수료</p>
                </article>

                <article className="bg-white p-6 rounded-lg shadow-md relative mb-2">
                  <span className="absolute -left-4 top-0 bg-primary w-8 h-8 rounded-full flex items-center justify-center">
                    📜
                  </span>
                  <h3 className="text-2xl font-bold text-primary">
                    SQL 개발자(SQLD)
                  </h3>
                  <p className="text-gray-600">2022.12 취득</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
