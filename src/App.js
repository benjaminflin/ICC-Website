import React from 'react';

import LangContext from './LangContext';
import ActiveSlideContext from './ActiveSlideContext';
import SlideShow from './SlideShow';
import Menu from './Menu';
import getQueryByName from './query';
import scrollSnapPolyfill from 'css-scroll-snap-polyfill';

import './App.css';

class App extends React.PureComponent {
	state = { lang: 'en', activeSlide: 0 };

	constructor(props) {
		super(props);
		this.setActiveSlide = this.setActiveSlide.bind(this);
		this.slideRef = React.createRef();
	}

	componentDidMount() {
		const el = this.slideRef.current.ref.current;
		el.addEventListener('scroll', () => {
			this.setState({
				activeSlide: Math.floor((el.scrollTop + 0.5 * document.body.clientHeight) / document.body.clientHeight)
			});
		});

		const initLang = getQueryByName('lang');

		this.setState({ lang: initLang == 'fr' ? 'fr' : 'en' });

		scrollSnapPolyfill();
	}

	setActiveSlide(activeSlide) {
		const el = this.slideRef.current.ref.current;
		el.scrollTo({
			top: activeSlide * document.body.clientHeight,
			left: 0,
			behavior: 'smooth'
		});
		this.setState({ activeSlide });
	}

	render() {
		return (
			<LangContext.Provider
				value={{
					lang: this.state.lang,
					switchLang: () =>
						this.setState((prevState) => ({
							lang: prevState.lang === 'en' ? 'fr' : 'en'
						}))
				}}
			>
				<ActiveSlideContext.Provider
					value={{ activeSlide: this.state.activeSlide, setActiveSlide: this.setActiveSlide }}
				>
					<Menu setActiveSlide={this.setActiveSlide} lang={this.state.lang} />
					<SlideShow ref={this.slideRef} lang={this.state.lang} activeSlide={this.state.activeSlide} />
				</ActiveSlideContext.Provider>
			</LangContext.Provider>
		);
	}
}

export default App;
