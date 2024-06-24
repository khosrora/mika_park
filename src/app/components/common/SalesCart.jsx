import PhoneWhite from "../Icons/PhoneWhite";

function SalesCart({ item }) {
  return (
    <div className="bg-[#013354] p-4 rounded-md h-full flex flex-col justify-between text-white">
      <div className="text-center">
        <p>{item.name}</p>
      </div>
      <div className="">
        <p>آدرس :</p>
        <br />
        <small>{item.address}</small>
      </div>
      <div className="flex flex-col space-y-4">
        <p>شماره تماس : </p>
        <div className="grid grid-cols-2 gap-4">
          {item.phones.split("-").map((i, index) => (
            <div
              key={index}
              className="flex justify-start items-center gap-x-4"
            >
              <PhoneWhite />
              <small>{i}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SalesCart;
