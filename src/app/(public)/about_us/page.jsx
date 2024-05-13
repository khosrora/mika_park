import TitlePage from "@/app/components/common/TitlePage";

async function page() {
  return (
    <div className="p-4 space-y-8 lg:space-y-16">
      <TitlePage text="درباره ما" />
      <div className="flex flex-col justify-center items-center relative">
        <img
          src="https://www.esbnyc.com/sites/default/files/2019-10/home_banner-min.jpg"
          width={500}
          height={500}
          className="rounded-lg w-full lg:h-72 object-cover"
        />
        <div className="absolute -bottom-4 right-10 left-10 bg-white rounded-md  p-4 flex justify-between items-center lg:-bottom-10 lg:justify-around">
          <div className="flex flex-col justify-center items-center">
            <p className="font-extrabold">10</p>
            <p className="font-extralight">سال تجربه</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-extrabold">10</p>
            <p className="font-extralight">سال تجربه</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-extrabold">10</p>
            <p className="font-extralight">سال تجربه</p>
          </div>
        </div>
      </div>
      <div className="text-center space-y-4 max-w-5xl m-auto">
        <h1 className="font-extrabold">شرکت میکا پارک</h1>
        <p className="leading-8">
          ارائه خدمات به شکل هتل در آپارتمان اشاره دارد . این نوع اقامتی با
          مالکیت دائم و خدماتی همچون امنیت , رستوران , باشگاه و دیگر خدمات
          تفریحی و ورزشی را در اختیار مالکین مجموعه قرار میدهد. ارائه خدمات به
          شکل هتل در آپارتمان اشاره دارد . این نوع اقامتی با مالکیت دائم و
          خدماتی همچون امنیت , رستوران , باشگاه و دیگر خدمات تفریحی و ورزشی را
          در اختیار مالکین
        </p>
      </div>
    </div>
  );
}

export default page;
