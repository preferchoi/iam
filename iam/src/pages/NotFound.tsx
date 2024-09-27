import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-5xl font-bold mb-8">404</h1>
      <p className="text-gray-600 mb-4">
        요청하는 페이지가 없습니다.
      </p>
      <Link to="/" className="text-blue-500 hover:text-blue-700">
        메인 페이지로 돌아가기
      </Link>
    </div>
  );
}

export default NotFound;
