import React, { Component, createContext } from 'react';

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			language: 'russian'
		};
	}

	changeLanguage = (evt) => {
		this.setState({ language: evt.target.value });
	};

	render() {
		return (
			<LanguageContext.Provider value={{ ...this.state, changeLanguage: this.changeLanguage }}>
				{this.props.children}
			</LanguageContext.Provider>
		);
	}
}

export const withLanguageContext = (Component) => (props) => (
	<LanguageContext.Consumer>{(value) => <Component languageContext={value} {...props} />}</LanguageContext.Consumer>
);
