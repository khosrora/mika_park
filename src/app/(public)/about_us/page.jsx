import TitlePage from "@/app/components/common/TitlePage";
import { getData } from "@/utils/get_data";

async function page() {
  const data = await getData("aboutus/about_us/");
  const extensions = await getData("aboutus/extensions/");

  return (
    <div className="p-4 space-y-8 lg:space-y-16">
      <TitlePage text="درباره ما" />
      <div className="flex flex-col justify-center items-center relative">
        <img
          src={data.image.url}
          alt={data.image.title}
          width={500}
          height={500}
          className="rounded-lg w-full lg:h-72 object-cover"
        />
        <div className="absolute -bottom-4 right-10 left-10 bg-white rounded-md  p-4 flex justify-between items-center lg:-bottom-10 lg:justify-around">
          {extensions.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-center items-center"
            >
              <p className="font-extrabold">{item.main_title}</p>
              <p className="font-extralight">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center space-y-4 max-w-5xl m-auto">
        <h1 className="font-extrabold">{data.title}</h1>
        <p className="leading-8">{data.text}</p>
      </div>
    </div>
  );
}

export default page;
