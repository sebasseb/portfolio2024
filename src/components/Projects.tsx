import { Card, CardHeader, Divider } from "@nextui-org/react";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Projects = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useContext fue llamado fuera del proveedor de LanguageContext"
    );
  }
  const { language, translations } = context;
  
  return (
    <Card radius="lg" className="border-none flex h-[85vh] w-[85vw]">
      <CardHeader className="flex justify-center">
        <h1 className="text-4xl my-5">{translations[language].titles[2]}</h1>
      </CardHeader>
      <Divider />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-3 md:p-10 md:pl-28">
        <section>
          <span className="text-3xl">{translations[language].projects[0].company}</span>
          <p className="text-xl">(2019 - 2020)</p>
          <div>
            <ul>
              <li>{translations[language].projects[0].works[0]}</li>
              <li>{translations[language].projects[0].works[1]}</li>
            </ul>
          </div>
        </section>
        <section>
          <span className="text-3xl">{translations[language].projects[1].company}</span>
          <p className="text-xl">(2021)</p>
          <div>
            <ul>
                <li>{translations[language].projects[1].works[0]}</li>
                <li>{translations[language].projects[1].works[1]}</li>
            </ul>
          </div>
        </section>
        <section>
          <span className="text-3xl">{translations[language].projects[2].company}</span>
          <p className="text-xl">{language === 'en' ? "(Hackatón 2022 - NTT DATA - 2nd Prize)" : "(Hackatón 2022 - NTT DATA - 2º Lugar)" }</p>
          <div>
            <ul>
              <li>{translations[language].projects[2].works[0]}</li>
              <li>{translations[language].projects[2].works[1]}</li>
            </ul>
          </div>
        </section>
        <section>
          <span className="text-3xl">{translations[language].projects[3].company}</span>
          <p className="text-xl">(2022 - 2023)</p>
          <div>
            <ul>
                <li>{translations[language].projects[3].works[0]}</li>
                <li>{translations[language].projects[3].works[1]}</li>
                <li>{translations[language].projects[3].works[2]}</li>
                <li>{translations[language].projects[3].works[3]}</li>
            </ul>
          </div>
        </section>
      </div>
    </Card>
  );
};

export default Projects;
