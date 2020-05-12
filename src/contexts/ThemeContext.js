import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDarkMode: 'false'
		};
	}

	toggleMode = () => {
		this.setState({ isDarkMode: !this.state.isDarkMode });
	};

	render() {
		return (
			<ThemeContext.Provider value={{ ...this.state, toggleMode: this.toggleMode }}>
				{this.props.children}
			</ThemeContext.Provider>
		);
	}
}
