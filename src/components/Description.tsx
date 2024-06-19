import { Divider } from "@nextui-org/react";
import { TypeAnimation } from "react-type-animation";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Description = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useContext fue llamado fuera del proveedor de LanguageContext"
    );
  }
  const { language, translations } = context;

  return (
    <div className="flex flex-col gap-3 md:w-[30rem] min-w-[10rem]">

      <div className="flex flex-col items-center h-[2em] md:h-[7em] ">
        <TypeAnimation
        key={language}
          sequence={translations[language].animation}
          wrapper="span"
          speed={{ type: "keyStrokeDelayInMs", value: 150 }}
          repeat={0}
          deletionSpeed={{ type: "keyStrokeDelayInMs", value: 150 }}
          cursor={false}
          className="text-center text-2xl md:text-4xl inline-block"
        />
      </div>
      <Divider />
      <div className="flex flex-col gap-5">
        <span className="text-xl md:text-2xl break-words text-start ">
          {translations[language].welcome}
        </span>
        <span className="text-xl  text-start">
          {translations[language].description}
        </span>
      </div>
    </div>
  );
};

export default Description;
