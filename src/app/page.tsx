import Blogs from "@/components/Blogs/index";
import Exprience from "@/components/Exprience/index";
import Hobbies from "@/components/Hobbies/index";
import PersonalInfo from "@/components/PersonalInfo/index";
import Projects from "@/components/Projects/index";
import ProjectsHeader from "@/components/Projects/ProjectsHeader";
import Skills from "@/components/Skills/index";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Home() {
  return (
    <>
      <PersonalInfo />

      <div className="contents">
        <div className="side1">
          <Skills type="1" />
          <Skills type="2" />
          <Skills type="3" />
        </div>

        <div className="side2">
          <Blogs />

          <Exprience />
        </div>
      </div>

      <Hobbies />

      <ProjectsHeader />
      <Projects />
    </>
  );
}
