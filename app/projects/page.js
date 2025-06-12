import Header from "../components/header";
import Footer from "../components/footer";
import ProjectTile from "../components/project-tile";
import projectData from "../data/projects.json";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <Header />
      <div className="flex-grow">

        <h1
          className="font-bold font-poppins text-gray-100 text-3xl text-center my-6"
          data-title="EDUCATION"
        >
          PROJECTS
        </h1>

        {/* Grid container for tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 max-w-7xl mx-auto">
          {projectData.map((proj, idx) => (
            <ProjectTile key={idx} {...proj} />
          ))}
        </div>

      </div>
      <footer className="bg-slate-900 text-gray-300 py-6 px-4 text-center">
        <Footer />
      </footer>
    </div>
  );
}
