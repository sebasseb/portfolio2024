// import React from 'react'
import { Button, Card, Image } from "@nextui-org/react";
import Profile from "../assets/profile.webp";

import Description from "./Description";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext } from "react";
import { LanguageContext } from "../../LanguageContext";

const iconStyle = "hover:scale-125 transition-transform duration-200";

const PersonalData = () => {

  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useContext fue llamado fuera del proveedor de LanguageContext"
    );
  }
  const { language } = context;
  
  return (
    <Card radius="lg" className="border-none flex flex-col md:flex-row">
      <div className="flex items-center justify-center bg-blue-300">
        <Image
          alt="Sebastián Escobar Briceño"
          className="object-cover p-5 rounded-full mx-auto w-1/2 md:w-2/3"
          src={Profile}
        />
      </div>
      <div className="flex flex-col flex-grow p-4 md:p-20">
        <h1 className="text-4xl md:text-6xl text-center md:text-left">
          Sebastián Escobar Briceño
        </h1>
        <section className="flex flex-col items-center justify-center p-2">
          <Description />
          <Button 
            className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded my-4"
            onClick={() => window.open('https://drive.google.com/file/d/13TzlA9kUfvxmu0qAcGBVPi3GwoC5-yFg/view?usp=sharing')}
          >
            {language === 'en' ? 'Download CV' : 'Descargar CV'}
          </Button>

          <section className="w-full pt-2 flex justify-around items-center md:pt-14">
              <Icon width={30} className={iconStyle} onClick={()=> window.open('https://wa.me/56940340950')} icon="logos:whatsapp-icon"></Icon>
              <Icon width={30} className={iconStyle} onClick={()=> window.open('https://github.com/sebasseb')} icon="uiw:github"></Icon>
              <Icon width={30} className={iconStyle} onClick={()=> window.open('https://www.instagram.com/sebass.eb/')} icon="skill-icons:instagram"></Icon>
          </section>
        </section>
      </div>
    </Card>
  );
};

export default PersonalData;
