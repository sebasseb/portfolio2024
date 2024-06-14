import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { competences, aws, frameworks, backend } from "../utils/ChartsData";
import { Chart as ChartJS, registerables } from "chart.js";
import { Radar } from "react-chartjs-2";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";



ChartJS.register(...registerables);




const chartsData = [competences, frameworks, backend, aws];

const Skills = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useContext fue llamado fuera del proveedor de LanguageContext"
    );
  }
  const { language, translations } = context;

  const radarOptions = {
    scales: {
      r: {
        grid: {
          color: 'rgb(150,150, 150)', // color de las líneas del esqueleto
        },
        angleLines: {
          color: 'rgb(150, 150, 150)' // color de las líneas angulares
        },
        suggestedMin: 0,
        suggestedMax: 10,
        ticks: {
          display: false,
        },
      },
    },
 
  };
  
  return (
    <Card radius="lg" className="border-none flex h-[85vh] w-[85vw] ">
      <CardHeader className="flex justify-center">
        <h1 className="text-4xl my-5">{translations[language].titles[1]}</h1>
      </CardHeader>
      <Divider />
      <CardBody className="grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 ">
        {chartsData.map((data, index) => (
          <div className="box-wrapper" key={index}>
            <Radar redraw={true} data={data} options={radarOptions} />
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

export default Skills;
