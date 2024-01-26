// LanguageContext.tsx
import React from 'react';

interface ITecnologia {
  technology: string;
  content: JSX.Element;
}

interface IProyecto {
  company: string;
  works: string[];
}

export interface ITranslation {
  animation: string[],
  welcome: string;
  description: string;
  titles: string[];
  technologies: ITecnologia[];
  projects: IProyecto[];
}

export interface ILanguageContext {
  language: string;
  switchLanguage: (lang: string) => void;
  translations: { [key: string]: ITranslation };
}

export const LanguageContext = React.createContext<ILanguageContext | undefined>(undefined);