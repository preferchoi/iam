import { useState } from "react";
import messages, { Message } from "../assets/data/message";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [allMessages, setAllMessages] = useState(messages);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 페이지 새로고침 방지
    alert("현재 api 연동이 되어 있지 않습니다.")
    console.log("폼 제출됨:", formData);
    const newMessage: Message = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    setAllMessages([...allMessages, newMessage]); // 메시지를 배열에 추가
    console.log("메시지 목록:", allMessages); // 콘솔에 현재 메시지 목록 출력

    // 폼 초기화
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">연락처</h2>
          <p className="text-gray-600 mb-2">Email: prefer_choi@naver.com</p>
          {/* <p className="text-gray-600 mb-2">Phone: +82 010 9227 0062</p> */}
          <p className="text-gray-600 mb-4">거주지: Gwangju, South Korea</p>
          <h3 className="text-xl font-semibold mb-2">Follow Me</h3>
          <div className="flex space-x-4">
            <a
              href="https://prefer-choi.tistory.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              tistory
            </a>
            <a
              href="https://github.com/preferchoi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Send Me a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
