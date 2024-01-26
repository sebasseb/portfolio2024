import "./App.css";

import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./assets/MoonIcon";
import { SunIcon } from "./assets/SunIcon";

import PersonalData from "./components/PersonalData";
import Skills from "./components/Skills";
import { useContext, useState } from "react";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import { LanguageContext } from "../LanguageContext";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function App() {
  const [isSelected, setIsSelected] = useState(false);

  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useContext fue llamado fuera del proveedor de LanguageContext"
    );
  }
  const { switchLanguage, language } = context;

  return (
    <main className={isSelected ? "dark" : "light"}>
      <div className="fixed top-7 right-10 z-50">
        <Switch
          onValueChange={setIsSelected}
          isSelected={isSelected}
          size="lg"
          color="default"
          startContent={<SunIcon />}
          endContent={<MoonIcon />}
        />
      </div>

      <div className="fixed top-7 left-10 z-50">
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
      <div className="bg-gray-600">
        <div className="p-5 flex flex-col gap-5">
          <PersonalData />
          <Technologies />
          <Skills />
          <Projects />
        </div>
      </div>
    </main>
  );
}
