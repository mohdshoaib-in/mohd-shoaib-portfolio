import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-32 text-white">
      <Navbar />
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
            Portfolio
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            My Projects
          </h1>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Viqtis Healthcare Private Limited – Website Development"
            description="Developed a professional and responsive website for Viqtis Healthcare Private Limited using HTML, CSS, JavaScript, and PHP. The website showcases the company’s healthcare products, quality standards, expertise, and commitment to timely delivery, while providing a clean, user-friendly, and modern digital experience."
            image="/projects/Viqtishealthcare.png"
            url="https://viqtishealthcare.com"
          />
        </div>
      </div>
    </main>
  );
}