import ButtonPair from "./ButtonPair";

export default function Hero() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">
          Will You Go On A Date With Me?
        </h1>
        <p className="text-lg text-gray-700">Dear Miêu,</p>
        <p className="text-gray-700 my-4">
          Cái này hơi khác lạ nhưng mà anh nghĩ cách này sẽ dễ dàng cho em hơn
          trong việc chọn chỗ đi chơi của chúng mình =))))
        </p>
        <p className="text-gray-700 mb-2">
          Cho nên câu hỏi của anh là: Em có đồng ý đi chơi với anh hong?
        </p>
        <div className="flex justify-center space-x-4">
            <ButtonPair />
        </div>
      </div>
    </div>
  );
}
