import Alert from "@/app/components/common/Alert";
import ProjectCard from "@/app/components/common/ProjectCard";
import TitlePage from "@/app/components/common/TitlePage";
import { getData } from "@/utils/get_data";

export default async function page({ searchParams: { isDuring } }) {
  const projects = await getData(
    `project/projects/?type=${isDuring === "true" ? "P" : "D"}`
  );

  return (
    <div>
      <div className="p-4 space-y-8 lg:space-y-16">
        <TitlePage
          text={
            isDuring === "true"
              ? "پروژه های در حال انجام"
              : "پروژه های انجام شده"
          }
        />
      </div>
      {projects.results.length === 0 ? (
        <Alert message="در حال حاضر پروژه ای ثبت نشده است" className="alert" />
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {projects.results.map((item) => (
            <ProjectCard item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
