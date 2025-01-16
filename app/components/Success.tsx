"use client";

export default function Success() {
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center">
      {/* Main Container */}
      <div className="bg-white p-6 rounded-lg shadow-md w-600 text-center">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">
          Xong rồi đó! 🥰
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Kế hoạch của em đã được gửi rồi nè! Giờ thì chỉ cần chờ tới ngày thôi. 
          <br />
          <span className="text-pink-600 font-bold">
            Chắc chắn là sẽ vui lắm đó!
          </span>
        </p>
        <img
          src="/img/cheesy-heart.png" // Replace with your actual image path
          alt="Cheesy Heart"
          className="w-32 h-32 mx-auto mb-6"
        />
        <p className="text-gray-700">
          <strong>Meow meow...</strong> 😘
        </p>
        <p className="text-gray-700 italic mt-2">
          Hẹn gặp em sớm nha, hihi. 🥂
        </p>

        {/* Button */}
        <div className="mt-6">
          <button
            className="bg-pink-600 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-700 transition duration-300"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Về lại trang chủ nè
          </button>
        </div>
      </div>
    </div>
  );
}
