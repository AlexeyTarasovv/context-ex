import React, { useState, createContext } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider(props) {
	const [ language, setLanguage ] = useState('russian');
	const changeLanguage = (evt) => setLanguage(evt.target.value);
	return <LanguageContext.Provider value={{ language, changeLanguage }}>{props.children}</LanguageContext.Provider>;
}
