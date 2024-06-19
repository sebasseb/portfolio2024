import "./App.css";

import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./assets/MoonIcon";
import { SunIcon } from "./assets/SunIcon";
import { Tabs, Tab } from "@nextui-org/react";

import PersonalData from "./components/PersonalData";
import Skills from "./components/Skills";
import { useContext, useEffect, useState } from "react";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import { LanguageContext } from "./context/LanguageContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ThemeContext } from "./context/ThemeContext";

export default function App() {
  const [isSelected, setIsSelected] = useState(false);


  const theme = useContext(ThemeContext);

  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useContext fue llamado fuera del proveedor de LanguageContext"
    );
  }
  const { switchLanguage, language } = context;
  let tabs = [
    {
      id: "personal",
      label: language === "es" ? "Acerca de mi" : "About me",
      content: <PersonalData />
    },
    {
      id: "projects",
      label: language === "es" ? "Proyectos" : "Projects",
      content: <Projects />
    },
    {
      id: "tech",
      label: language === "es" ? "Tecnologías" : "Technologies",
      content: <Technologies />
    },
    {
      id: "skills",
      label: language === "es" ? "Habilidades" : "Skills",
      content: <Skills />
    },
  ];

  // Suggested code may be subject to a license. Learn more: ~LicenseLog:4243364218.


  useEffect(() => {
    if (isSelected) {
      theme?.setTheme('dark')
    } else {
      theme?.setTheme('light')
    }
  }, [isSelected])



  return (
    <main className={`${theme?.theme} overflow-hidden`}>
      <div className="fixed md:top-7 right-5 bottom-2 z-50">
        <Switch
          onValueChange={setIsSelected}
          isSelected={isSelected}
          size="lg"
          color={theme?.theme === 'dark' ? 'secondary' : 'default'}
          startContent={<SunIcon />}
          endContent={<MoonIcon />}
        />
      </div>

      <div className="fixed bottom-0 md:bottom-7 left-7 z-50">
        {language === "es" && (
          <button onClick={() => switchLanguage("en")}>
            <Icon width={50} icon="emojione:flag-for-united-states" />
          </button>
        )}

        {language === "en" && (
          <button onClick={() => switchLanguage("es")}>
            <Icon width={50} icon="emojione:flag-for-spain" />
          </button>
        )}
      </div>
      <div className="bg-gray-600 w-[100%] h-screen flex flex-col  justify-center items-center   ">
        <Tabs variant="solid"
          // isVertical={true}
          size="sm" 
          color={theme?.theme === 'dark' ? 'secondary' : 'default'}
          className="z-50 flex"
          aria-label="Dynamic tabs"
          items={tabs}>
          {(item) => (
            <Tab className="flex " key={item.id} title={item.label}>
              {item.content}
            </Tab>
          )}
        </Tabs>
      </div>

    </main>
  );
}

