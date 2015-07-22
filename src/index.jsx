import React from "react";
import cx from "classnames";

import Options from "hire-forms-options";
import {stringOrKeyValueMap, arrayOfStringsOrArrayOfKeyValueMaps} from "hire-forms-prop-types";
import {isKeyValueMap, isListOfStrings, castKeyValueArray} from "hire-forms-utils";

class Select extends React.Component {
	constructor(props) {
		super(props);

		this.state = {visible: false};
	}

	handleInputClick() {
		this.setState({visible: !this.state.visible});
	}

	/**
	 * @method
	 * @param {object} value Map of key and value: {key: "somekey", value: "somevalue"}
	 */
	handleOptionsChange(value) {
		this.setState({visible: false});

		// If the options prop is an array of strings, return a string.
		if (isListOfStrings(this.props.options)) {
			value = value.value;
		}

		this.props.onChange(value);
	}

	render() {
		let optionValues, options;

		if (this.state.visible) {
			options = (
				<Options
					onChange={this.handleOptionsChange.bind(this)}
					sortRelevance={this.props.sortRelevance}
					values={castKeyValueArray(this.props.options)} />
			);
		}

		// If value prop is a key/value map, extract the value.
		let value = isKeyValueMap(this.props.value) ?
			this.props.value.value :
			this.props.value;

		// Create new var so we can check value in cx()
		let inputValue = (value === "") ?
			this.props.placeholder :
			value;

		return (
			<div className="hire-select">
				<div
					className="input-container"
					onClick={this.handleInputClick.bind(this)}>
					<div className={cx({
						"input": true,
						"placeholder": value === ""})}>
						{inputValue}
					</div>
					<button>▾</button>
				</div>
				{options}
			</div>
		);
	}
}

Select.defaultProps = {
	value: "",
	options: []
};

Select.propTypes = {
	onChange: React.PropTypes.func.isRequired,
	options: arrayOfStringsOrArrayOfKeyValueMaps,
	placeholder: React.PropTypes.string,
	sortRelevance: React.PropTypes.bool,
	value: stringOrKeyValueMap
};

export default Select;