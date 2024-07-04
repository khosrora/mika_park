import { getData } from "@/utils/get_data";
import PieChart from "./PieChart";

export default async function page({ params: { id } }) {
  const res = await getData(`project/blocks/${id}/`);
  return (
    <div>
      <div className="bg-white p-6 rounded-md">
        <div className="mb-4">
          <p>{res.title}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {res.specs.map((i) => (
            <div className="flex justify-between items-center">
              <p className="text-xs font-light">{i.key}</p>
              <p>{i.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 mt-4 lg:grid-cols-4">
        {res.charts.map((item) => (
          <PieChart chart={item} />
        ))}
      </div>
      {/* <BarChart /> */}
    </div>
  );
}
