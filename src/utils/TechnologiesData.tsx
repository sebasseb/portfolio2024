import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export function useTechnologiesData() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useContext fue llamado fuera del proveedor de LanguageContext"
    );
  }
  const { language, translations } = context;

  const icons = [
    { 
        name: "Angular", 
        iconifyName: "devicon:angularjs",
        content: translations[language].technologies[0].content
    },
    { 
        name: "React & React Native", 
        iconifyName: "devicon:react",
        content: translations[language].technologies[1].content
    },
    { 
        name: "MySQL", 
        iconifyName: "logos:mysql",
        content: translations[language].technologies[2].content
    },
    { 
        name: "Amazon Web Services", 
        iconifyName: "logos:aws",
        content: translations[language].technologies[3].content
    },
    { 
        name: "MongoDB", 
        iconifyName: "devicon:mongodb-wordmark",
        content: translations[language].technologies[4].content
    },
    { 
        name: "NestJS", 
        iconifyName: "devicon:nestjs-wordmark",
        content: translations[language].technologies[5].content
    },
    { 
        name: "Node.JS", 
        iconifyName: "devicon:nodejs-wordmark",
        content: translations[language].technologies[6].content
    },
    { 
        name: "Git", 
        iconifyName: "devicon:git",
        content: translations[language].technologies[7].content
    },
    { 
        name: "Tailwind CSS", 
        iconifyName: "devicon:tailwindcss",
        content: translations[language].technologies[8].content
    },
    { 
        name: "JavaScript", 
        iconifyName: "devicon:javascript",
        content: translations[language].technologies[9].content
    },
    { 
        name: "TypeScript", 
        iconifyName: "devicon:typescript",
        content: translations[language].technologies[10].content
    },
    { 
        name: "Swagger", 
        iconifyName: "devicon:swagger",
        content: translations[language].technologies[11].content
    },
  ];

  return icons;
}