import { Icon } from "@iconify/react";
import {  Card, CardHeader, Divider, Tooltip } from "@nextui-org/react";
import { useTechnologiesData } from "../utils/TechnologiesData";
import { useContext } from "react";
import { LanguageContext } from "../../LanguageContext";

const iconStyle = "hover:scale-110 transition-transform duration-200";

const Technologies = () => {

  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useContext fue llamado fuera del proveedor de LanguageContext"
    );
  }
  const { language, translations } = context;
  const icons = useTechnologiesData();
  return (
    <Card radius="lg" className="border-none flex">
      <CardHeader className="flex justify-center">
        <h1 className="text-4xl my-5">{translations[language].titles[0]}</h1>
      </CardHeader>
      <Divider />

      <div className="grid grid-cols-2 gap-5 place-items-center p-3 md:grid-cols-4 md:p-10">
        {icons.map((icon:any) => (
          
            <div className={iconStyle} key={icon.name} >
              <Tooltip
                content={
                  <div className="px-1 py-2">
                    <div className="text-small font-bold">{icon.name}</div>
                    {icon.content}
                  </div>
                }
                key={`${icon.name}-${language}`}
              >
                <Icon key={icon.name} width={100} icon={icon.iconifyName} />
              </Tooltip>
            </div>
          
        ))}
      </div>
    </Card>
  );
};
export default Technologies;
