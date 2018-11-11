import React from 'react';

const LangContext = React.createContext({
	lang: 'en',
	switchLang: () => {}
});

export default LangContext;
