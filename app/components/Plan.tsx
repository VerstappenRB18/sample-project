"use client";
import ShadcnDatePicker from "@/app/components/shadcn/datepicker";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Plan() {
    const [date, setDate] = useState<Date>(new Date());
    const [dinnerOption, setDinnerOption] = useState("");
    const [otherDinner, setOtherDinner] = useState("");
    const [activityOption, setActivityOption] = useState("");
    const [otherActivity, setOtherActivity] = useState("");
    const router = useRouter();

    const handleSubmit = () => {
        const formData = {
          date: date.toDateString(),
          dinner: otherDinner || dinnerOption,
          activity: otherActivity || activityOption,
        };
    
        localStorage.setItem("planData", JSON.stringify(formData));
    
        console.log("Saved Plan:", formData);
        
        router.push("/result");
    };

    return (
        <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-11/12 max-w-2xl">
        <h1 className="text-3xl font-bold text-pink-600 text-center mb-6">
          Giờ lên kế hoạch là mình đi đâu nè!!
        </h1>

        {/* Date Options */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Rảnh khi nào nè?
        </h2>
        <div className="mb-4">
        <ShadcnDatePicker
                  startYear={2025}
                  endYear={2025}
                  selected={date}
                  onSelect={setDate}
                />
        </div>
        <div className="flex mb-4">
                  <h3 className="text-xl font-bold text-black">Date: </h3>
                  <span className="text-lg font-bold ml-2 text-gray-700">
                    {date.toDateString()}
                  </span>
                </div>

        {/* Dinner Options */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Ăn gì nè?</h2>
        <div className="mb-6 space-y-4">
          <label className="flex items-center space-x-4">
            <input
              type="radio"
              name="dinner"
              value="Meat and Meet"
              className="form-radio text-pink-600"
              onChange={(e) => setDinnerOption(e.target.value)}
            />
            <img
              src="/img/meat_and_meet.png"
              alt="Meat and Meet"
              className="w-16 h-16 object-cover rounded"
            />
            <span className="text-gray-700">Meat and Meet</span>
          </label>
          <label className="flex items-center space-x-4">
            <input
              type="radio"
              name="dinner"
              value="Haidilao"
              className="form-radio text-pink-600"
              onChange={(e) => setDinnerOption(e.target.value)}
            />
            <img
              src="/img/haidilao.png"
              alt="Haidilao"
              className="w-16 h-16 object-cover rounded"
            />
            <span className="text-gray-700">Haidilao</span>
          </label>
          <label className="flex items-center space-x-4">
            <input
              type="radio"
              name="dinner"
              value="Hana Buffet"
              className="form-radio text-pink-600"
              onChange={(e) => setDinnerOption(e.target.value)}
            />
            <img
              src="/img/hana.png"
              alt="Hana Buffet"
              className="w-16 h-16 object-cover rounded"
            />
            <span className="text-gray-700">Hana Buffet</span>
          </label>
          <div>
            <input
              type="text"
              id="other-dinner-input"
              className="border border-gray-300 p-2 text-black rounded w-full"
              placeholder="Em muốn ăn chỗ khác thì ghi ở đây nè"
              value={otherDinner}
              onChange={(e) => setOtherDinner(e.target.value)}
            />
          </div>
        </div>

        {/* Activity Options */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Đi đâu chơi nè?
        </h2>
        <div className="mb-6 space-y-4">
          <label className="flex items-center space-x-4">
            <input
              type="radio"
              name="activity"
              value="Đi Metro tới Thảo Điền"
              className="form-radio text-pink-600"
              onChange={(e) => setActivityOption(e.target.value)}
            />
            <img
              src="/img/metro.png"
              alt="Metro"
              className="w-16 h-16 object-cover rounded"
            />
            <span className="text-gray-700">Đi Metro tới Thảo Điền</span>
          </label>
          <label className="flex items-center space-x-4">
            <input
              type="radio"
              name="activity"
              value="Chụp Photobooth"
              className="form-radio text-pink-600"
              onChange={(e) => setActivityOption(e.target.value)}
            />
            <img
              src="/img/booth.png"
              alt="Photobooth"
              className="w-16 h-16 object-cover rounded"
            />
            <span className="text-gray-700">Chụp Photobooth</span>
          </label>
          <div>
            <input
              type="text"
              id="other-activity-input"
              className="border border-gray-300 p-2 text-black rounded w-full"
              placeholder="Em muốn đi chỗ khác thì ghi ở đây nè"
              value={otherActivity}
              onChange={(e) => setOtherActivity(e.target.value)}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button onClick={handleSubmit} className="bg-pink-600 text-white px-6 py-2 rounded-lg shadow hover:bg-pink-700 transition duration-300">
            Submit
          </button>
        </div>
      </div>
    </div>
    );
}