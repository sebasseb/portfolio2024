// import React from 'react'
import { Button, Card, Image } from "@nextui-org/react";
import Profile from "../assets/profile.webp";

import Description from "./Description";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";

const iconStyle = "hover:scale-125 transition-transform duration-200 cursor-pointer";

const PersonalData = () => {

  const context = useContext(LanguageContext);
  const theme = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useContext fue llamado fuera del proveedor de LanguageContext"
    );
  }
  const { language } = context;

  return (
    <Card radius="lg" className="border-none h-[85vh] w-[85vw] flex flex-col md:flex-row overflow-y-scroll ">
      <div className={`flex items-center justify-center md:w-1/2 ${theme?.theme === 'dark' ? 'bg-[#9353d3]' : 'bg-blue-100'}`} >
        <Image
          alt="Sebastián Escobar Briceño"
          className="object-cover rounded-full p-3 min-w-[200px] w-1/2 mx-auto "
          src={Profile}
        />
      </div>
      <div className="flex flex-col p-4 md:p-10">
        <h1 className="text-4xl md:text-5xl text-center ">
          Sebastián Escobar Briceño
        </h1>
        <section className="flex flex-col items-center justify-center gap-5">
          <Description />
          <Button 
            className="bg-gray-700 hover:bg-gray-500 text-white font-bold px-4 rounded "
            onClick={() => window.open('https://drive.google.com/file/d/13TzlA9kUfvxmu0qAcGBVPi3GwoC5-yFg/view?usp=sharing')}
          >
            {language === 'en' ? 'Download CV' : 'Descargar CV'}
          </Button>

          <section className="w-full pt-2 flex justify-around items-center ">
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
