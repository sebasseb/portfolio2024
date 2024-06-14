import React, { ReactNode, useState } from 'react';
import { LanguageContext, ILanguageContext } from '../context/LanguageContext';

interface LanguageProviderProps {
    children: ReactNode;
  }
  
 
 const translations = {
  es: {
    animation: [
        "Desarrollador",
        "Desarrollador Full Stack",
        "Desarrollador Cloud",
        "Desarrollador Web",
        "Ingeniero Informático",
      ],
    welcome:
      "Hola! Soy Full-Stack con 4 años de experiencia en desarrollo web.",
    description:
      "Egresado en 2019 de la PUCV, con muchas ganas aportar mi granito de arena, a la vez que aprendo y desarrollo mis habilidades",
    titles: ["Tecnologías", "Habilidades", "Proyectos"],
    technologies:[
        {
            technology:"Angular",
            content:(
                <div className="px-1 py-2">
                        <div className="px-5 text-medium font-bold ">
                            V16 - V17
                            <ul className="text-small text-start font-normal ">
                                <li>Enlaces Bidireccionales</li>
                                <li>Servicios</li>
                                <li>Directivas</li>
                                <li>Servicios API</li>
                                <li>Pipes</li>
                                <li>Decoradores</li>
                            </ul>
                        </div>
                </div>
            )
        },
        {
            technology:"React & React Native",
            content:(
                <div className="px-1 py-2">
                            <ul className="text-small text-start font-normal ">
                                <li>Diseño de Componentes</li>
                                <li>Servicios API</li>
                                <li>ChartJS</li>
                                <li>Hooks</li>
                            </ul>
                </div>
            )
        },
        {
            technology:"MySQL",
            content:(
                <div className="px-1 py-2">
                    <div className="text-small">Desarrollo de Bases de Datos con herramienta XAMPP - phpMyAdmin</div>
                </div>
            )
        },
        {
            technology:"Amazon Web Services",
            content:(
                <div className="px-1 py-2">
                            <ul className="text-small text-start font-normal ">
                                <li>S3</li>
                                <li>Funciones Lambda</li>
                                <li>SQS</li>
                                <li>CloudWatch</li>
                                <li>Disparadores EventBridge</li>
                            </ul>
                </div>
            )
        },
        {
            technology:"MongoDB",
            content:(
                <div className="px-1 py-2">
                    <div className="text-small">Desarrollo de Bases de Datos en ambientes de Production - Testing - Local</div>
                </div>
            )
        },
        {
            technology:"NestJS",
            content:(
                <div className="px-1 py-2">
                    <div className="text-small">Desarrollo de API utilizando SWAGGER y MongoDB como gestor de base de datos.</div>
                </div>
            )
        },
        {
            technology:"Node.JS",
            content:(
                <div className="px-1 py-2">
                    <div className="text-small">Desarrollo de pequeñas aplicaciones principalmente para Backend.</div>
                </div>
            )
        },
        {
            technology:"Git",
            content:(
                <div className="px-1 py-2">
                            <ul className="text-small text-start font-normal pb-3">
                                <li>Gestión de Ramas</li>
                                <li>Registrar Cambios</li>
                                <li>Revisar Solicitud de Extracción</li>
                                <li>Desarrollo en Equipo</li>
                            </ul>
    
                            <span>✓ Familiarizado con el uso de Github - GitLab - BitBucket</span>
                </div>
            )
        },
        {
            technology:"Tailwind CSS",
            content:(
                <div className="px-1 py-2">
                    <div className="text-small">Clases de Tailwind CSS y uso de animaciones</div>
                </div>
            )
        },
        {
            technology:"JavaScript",
            content:(
                <div className="px-1 py-2">
                    <div className="text-small">Conocimiento avanzado y manejo de la asincronía en Vanilla Javascript</div>
                </div>
            )
        },
        {
            technology:"TypeScript",
            content:(
                <div className="px-1 py-2">
                    <div className="text-small">Conocimientos avanzados, tipado fuerte y optimización de código</div>
                </div>
            )
        },
        {
            technology:"Swagger",
            content:(
                <div className="px-1 py-2">
                    <div className="text-small">API Documentation Development using decorators in NestJs</div>
                </div>
            )
        },
    ],
    projects: [
      {
        company: "Team Smart SPA",
        works: [
          "✓ Desarrollo Scripting Windows",
          "✓ Página de Presentación",
        ],
        link: 'https://mservice-gold.vercel.app/'

      },
      {
        company:"Master Service LTDA",
        works:[
            "✓ Página de Presentación",
            "✓ Mantenimiento de Hosting y Dominios"
        ],
        link: 'https://mservice-gold.vercel.app/'

      },
      {
        company:"WeTeam",
        works:[
            "✓ Desarrollo en React Native",
            "✓ Desarrollo Bases de Datos en MongoDB"
        ],
        link: 'https://mservice-gold.vercel.app/'

      },
      {
        company:"Innovación y Desarrollo WiTI",
        works: [
            "✓ HunterApp -Desarrollador FullStack",
            "✓ LevelUp -Desarrollador FullStack",
            "✓ Impactis -Desarrollador Frontend Angular",
            "✓ Alsea -Desarrollador Cloud y FullStack"
        ],
        link: 'https://mservice-gold.vercel.app/'

      }
    ],
  },
  en: {
    animation: [
        "Full Stack Developer",
        "Cloud Developer",
        "Web Developer",
        "Computer Engineering",
      ],
    welcome:
      "Hello! I am a Full-Stack with 4 years of experience in web development.",
    description:
      "Graduated in 2019 from PUCV, eager to contribute my bit, while I learn and develop my skills",
    titles: ["Technologies", "Skills", "Projects"],
    technologies:[
        {
            technology:"Angular",
            content:(
                <div className="px-1 py-2">
                        <div className="px-5 text-medium font-bold ">
                            V16 - V17
                            <ul className="text-small text-start font-normal ">
                                <li>Two-way Data Binding</li>
                                <li>Services</li>
                                <li>Directives</li>
                                <li>API Services</li>
                                <li>Pipes</li>
                                <li>Decorators</li>
                            </ul>
                        </div>
                </div>
            )
        },
        {
            technology:"React & React Native",
            content:(
                <div className="px-1 py-2">
                            <ul className="text-small text-start font-normal ">
                                <li>Components Design</li>
                                <li>API Services</li>
                                <li>ChartJS</li>
                                <li>Hooks</li>
                            </ul>
                </div>
            )
        },
        {
            technology:"MySQL",
            content:(
                <div className="px-1 py-2">
                    <div className="text-small">Database Development with XAMPP - phpMyAdmin tool</div>
                </div>
            )
        },
        {
            technology:"Amazon Web Services",
            content:(
                <div className="px-1 py-2">
                            <ul className="text-small text-start font-normal ">
                                <li>S3</li>
                                <li>Lambda Functions</li>
                                <li>SQS</li>
                                <li>CloudWatch</li>
                                <li>EventBridge Triggers</li>
                            </ul>
                </div>
            )
        },
        {
            technology:"MongoDB",
            content:(
                <div className="px-1 py-2">
                    <div className="text-small">No-SQL Database Development with Production - Testing - Local environments</div>
                </div>
            )
        },
        {
            technology:"NestJS",
            content:(
                <div className="px-1 py-2">
                    <div className="text-small">API Development using SWAGGER and MongoDB as database manager </div>
                </div>
            )
        },
        {
            technology:"Node.JS",
            content:(
                <div className="px-1 py-2">
                    <div className="text-small">Development of small Apps mainly for Backend.</div>
                </div>
            )
        },
        {
            technology:"Git",
            content:(
                <div className="px-1 py-2">
                            <ul className="text-small text-start font-normal pb-3">
                                <li>Branch Management</li>
                                <li>Commit Changes</li>
                                <li>Review Pull Request</li>
                                <li>Team Development</li>
                            </ul>
    
                            <span>✓ Familiar with the use of Github - GitLab - BitBucket</span>
                </div>
            )
        },
        {
            technology:"Tailwind CSS",
            content:(
                <div className="px-1 py-2">
                    <div className="text-small">Tailwind CSS classes and use of animations</div>
                </div>
            )
        },
        {
            technology:"JavaScript",
            content:(
                <div className="px-1 py-2">
                    <div className="text-small">Advanced knowledge and management of asynchrony in Vanilla Javascript</div>
                </div>
            )
        },
        {
            technology:"TypeScript",
            content:(
                <div className="px-1 py-2">
                    <div className="text-small">Advanced knowledge, strong typing and code optimization</div>
                </div>
            )
        },
        {
            technology:"Swagger",
            content:(
                <div className="px-1 py-2">
                    <div className="text-small">API Documentation Development using decorators in NestJs</div>
                </div>
            )
        },
    ],
    projects: [
      {
        company: "Team Smart SPA",
        works: [
          "✓ Windows Scripting Developer",
          "✓ Landing Page",
        ],
        link: 'https://mservice-gold.vercel.app/'

      },
      {
        company:"Master Service LTDA",
        works:[
            "✓ Landing Page",
            "✓ Hosting and Domains Maintenance"
        ],
        link: 'https://mservice-gold.vercel.app/'
      },
      {
        company:"WeTeam",
        works:[
            "✓ React Native App Development",
            "✓ MongoDB Database Development"
        ],
        link: 'https://mservice-gold.vercel.app/'

      },
      {
        company:"Innovación y Desarrollo WiTI",
        works: [
            "✓ HunterApp - FullStack Development",
            "✓ LevelUp - FullStack Development",
            "✓ Impactis - Frontend Developer Angular",
            "✓ Alsea - Cloud and Full Stack Developer"
        ],
        link: 'https://mservice-gold.vercel.app/'

      }
    ],
  },
};
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<string>('en');
  
    const switchLanguage = (lng: string) => {
      setLanguage(lng);
    };
  
    const value: ILanguageContext = { language, switchLanguage, translations };
  
    return (
      <LanguageContext.Provider value={value}>
        {children}
      </LanguageContext.Provider>
    );
  };