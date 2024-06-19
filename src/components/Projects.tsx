import { Card, CardHeader, Divider } from "@nextui-org/react";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";

const Projects = () => {
  const context = useContext(LanguageContext);
  const theme = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useContext fue llamado fuera del proveedor de LanguageContext"
    );
  }
  const { language, translations } = context;

  const projects = [...translations[language].projects];
  console.log(projects)

  return (
    <Card radius="lg" className="border-none flex h-[85vh] w-[85vw] ">
      <CardHeader className="flex justify-center">
        <h1 className="text-4xl my-5">{translations[language].titles[2]}</h1>
      </CardHeader>
      <Divider />

      <section className={`grid grid-cols-1 md:grid-cols-3 gap-5 p-3 md:p-10 md:pl-28 `}>
        {projects.map((project) => {
          return (
            <div className={` p-3 rounded-lg flex flex-col justify-center`} key={project.company}>
              <h1>{project.company}</h1>
              {project.works.map((work) => {
                return (
                  <p key={work}>{work}</p>
                )
              })}
              
              {project.link ? <a className={`${theme?.theme === 'dark' ? 'text-red-300 hover:text-red-500' : 'text-blue-500 hover:text-blue-800'} `} href={project.link} target="_blank" rel="noopener noreferrer">{project.company}</a> : null}
            </div>

          )
        })}
      </section>
    </Card>
  );
};

export default Projects;
