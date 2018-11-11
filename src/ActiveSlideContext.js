import React from 'react';

const ActiveSlideContext = React.createContext({
	activeSlide: 0,
	setActiveSlide: () => {}
});

export default ActiveSlideContext;
