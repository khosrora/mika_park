import ProjectCard from "@/app/components/common/ProjectCard";
import TitlePage from "@/app/components/common/TitlePage";

let data = [
  {
    id: 1,
    link: "https://i.natgeofe.com/n/483e77f7-f52b-432a-a0f5-d9cd1489a95a/madinat-jumeirah-dubai-uae_3x4.jpg",
    title: "پروژه هتلینگ مشهد",
  },
  {
    id: 2,
    link: "https://s.yimg.com/ny/api/res/1.2/ibSgYd1WPKBe1Blk0xSqOw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQxMA--/https://media.zenfs.com/en-US/homerun/architectural_digest_422/697d7a3e53ba85440cff7e50b9793f22",
    title: "پروژه هتلینگ تهران",
  },
  {
    id: 3,
    link: "https://www.constructionweekonline.in/cloud/2021/11/24/QZzU156y-Sobha-4.jpg",
    title: "پروژه هتلینگ زاهدان",
  },
  {
    id: 4,
    link: "https://www.esbnyc.com/sites/default/files/styles/small_feature/public/2020-01/BuildingModel_6.jpg?itok=0EbQD2AJ",
    title: "پروژه هتلینگ تبریز",
  },
  {
    id: 5,
    link: "https://cdn.thecollector.com/wp-content/uploads/2023/02/merdeka-118-tallest-building.jpg?width=1400&quality=55",
    title: "پروژه هتلینگ ترکیه",
  },
  {
    id: 6,
    link: "https://s.yimg.com/ny/api/res/1.2/ibSgYd1WPKBe1Blk0xSqOw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQxMA--/https://media.zenfs.com/en-US/homerun/architectural_digest_422/697d7a3e53ba85440cff7e50b9793f22",
    title: "پروژه هتلینگ تهران",
  },
  {
    id: 7,
    link: "https://www.constructionweekonline.in/cloud/2021/11/24/QZzU156y-Sobha-4.jpg",
    title: "پروژه هتلینگ زاهدان",
  },
  {
    id: 8,
    link: "https://i.natgeofe.com/n/483e77f7-f52b-432a-a0f5-d9cd1489a95a/madinat-jumeirah-dubai-uae_3x4.jpg",
    title: "پروژه هتلینگ مشهد",
  },
];

function page() {
  return (
    <div>
      <div className="p-4 space-y-8 lg:space-y-16">
        <TitlePage text="پروژه ها" />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => (
          <ProjectCard item={item} />
        ))}
      </div>
    </div>
  );
}

export default page;
