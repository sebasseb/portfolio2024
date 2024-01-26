import { Divider } from "@nextui-org/react";
import { TypeAnimation } from "react-type-animation";
import { useContext } from "react";
import { LanguageContext } from "../../LanguageContext";

const Description = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useContext fue llamado fuera del proveedor de LanguageContext"
    );
  }
  const { language, translations } = context;

  return (
    <div className="flex flex-col gap-3">

      <div className="min-h-[5em]">
        <TypeAnimation
        key={language}
          sequence={translations[language].animation}
          wrapper="span"
          speed={1}
          repeat={0}
          deletionSpeed={1}
          cursor={false}
          className="text-center text-4xl inline-block"
        />
      </div>
      <Divider />
      <div className="flex flex-col py-10 gap-3">
        <span className="text-2xl text-center md:text-start ">
          {translations[language].welcome}
        </span>
        <span className="text-2xl text-center md:text-start">
          {translations[language].description}
        </span>
      </div>
    </div>
  );
};

export default Description;
