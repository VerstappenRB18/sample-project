"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Result() {
  const [planData, setPlanData] = useState<{
    date?: string;
    dinner?: string;
    activity?: string;
  }>({});
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  useEffect(() => {
    const savedPlanData = localStorage.getItem("planData");
    if (savedPlanData) {
      setPlanData(JSON.parse(savedPlanData));
    }

    // Initialize EmailJS
    emailjs.init("BaeGoyoK_iZ5fhDtK"); // Replace with your EmailJS Public Key
  }, []);

  const sendEmail = () => {
    if (!userEmail) {
      alert("Please enter a valid email address.");
      return;
    }

    const templateParams = {
      user_email: userEmail,
      plan_date: planData.date || "No date selected",
      dinner_place: planData.dinner || "No dinner selected",
      after_dinner_activities: planData.activity || "No activity selected",
    };

    emailjs.send("service_i7vicpy", "template_xi6mvmu", templateParams).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setMessage({
          text: "Email đã được gửi thành công! 💌",
          type: "success",
        });

        setTimeout(() => {
          window.location.href = "/success"; // Adjust the route as needed for your Next.js app
        }, 2000);
      },
      (error) => {
        console.log("FAILED...", error);
        setMessage({
          text: "Không thể gửi email, thử lại nhé!",
          type: "error",
        });
      }
    );
  };

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center">
      {message && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-md text-white px-4 py-3 rounded-lg shadow-lg ${
            message.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {message.text}
        </div>
      )}
      <div className="bg-white p-6 rounded-lg shadow-md w-11/12 max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-pink-600 mb-6">
          Chọn xong rồi là nhớ đi đó!!!
        </h1>

        {/* Plan Summary Section */}
        <div className="plan-summary mb-6">
          {planData && planData.date ? (
            <>
              <p className="text-lg text-gray-700 mb-2">
                <strong>Khi nào mình đi nè:</strong> {planData.date}
              </p>
              <p className="text-lg text-gray-700 mb-2">
                <strong>Mình ăn ở đây nè:</strong>{" "}
                {planData.dinner || "Quay lại chọn chỗ đi nha ^^"}
              </p>
              <p className="text-lg text-gray-700">
                <strong>Rồi mình làm gì tiếp nè:</strong>{" "}
                {planData.activity || "Quay lại chọn chỗ đi nha ^^"}
              </p>
            </>
          ) : (
            <p className="text-gray-700">No plan data found.</p>
          )}
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <input
            type="email"
            id="user_email"
            placeholder="Nhập email của em ở đây nè"
            className="w-full border bg-gray-200 text-black border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>

        {/* Send Email Button */}
        <button
          onClick={sendEmail}
          className="bg-pink-600 text-white px-6 py-2 rounded-lg shadow hover:bg-pink-700 transition duration-300"
        >
          Gửi Kế Hoạch Qua Email
        </button>
      </div>
    </div>
  );
}
