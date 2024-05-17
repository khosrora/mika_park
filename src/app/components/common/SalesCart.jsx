import PhoneWhite from "../Icons/PhoneWhite";

function SalesCart() {
  return (
    <div className="bg-[#013354] p-4 rounded-md h-full flex flex-col justify-between text-white">
      <div className="text-center">
      <p>نمایندگی زیباشهر</p>
      </div>
      <div className="">
        <p>آدرس :</p>
        <br />
        <small>سیستان وبلوچستان زاهدان زیباشهر نبش پیامبر اعظم 11</small>
      </div>
      <div className="flex flex-col space-y-4">
        <p>شماره تماس : </p>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex justify-start items-center gap-x-4">
              <PhoneWhite />
              <small>09158569854</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SalesCart;
