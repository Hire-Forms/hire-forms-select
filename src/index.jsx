import React from 'react';
import cx from 'classnames';
import Options from 'hire-forms-options';
import { stringOrKeyValueMap, arrayOfStringsOrArrayOfKeyValueMaps } from 'hire-forms-prop-types';
import { isKeyValueMap, isListOfStrings, castKeyValue, castKeyValueArray } from 'hire-forms-utils';

class Select extends React.Component {
	state = {
		options: this.props.options,
		visible: false,
	};

	componentDidMount() {
		document.addEventListener('click', this.handleDocumentClick, false);

		if (this.props.async != null) {
			this.props.async((response) => {
				this.setState({
					options: response,
				});
			});
		}
	}

	componentWillReceiveProps({ options }) {
		if (this.props.options !== options) {
			this.setState({ options });
		}
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleDocumentClick, false);
	}

	handleDocumentClick = (ev) => {
		if (this.state.visible && !this.refs.select.contains(ev.target)) {
			this.setState({
				visible: false,
			});
		}
	}

	handleInputClick = (/* ev */) => {
		this.setState({ visible: !this.state.visible });
	}

	/**
	 * @method
	 * @param {object} value Map of key and value: {key: "somekey", value: "somevalue"}
	 */
	handleOptionsChange = (value) => {
		this.setState({ visible: false });

		// If the options prop is an array of strings, return a string.
		if (isListOfStrings(this.state.options)) {
			value = value.value;
		}

		this.props.onChange(value);
	}

	hideOptions() {
		this.setState({ visible: false });
	}

	render() {
		const options = this.state.visible ?
			<Options
				onChange={this.handleOptionsChange}
				sort={this.props.sort}
				sortRelevance={this.props.sortRelevance}
				value={castKeyValue(this.props.value)}
				values={castKeyValueArray(this.state.options)}
			>
				{this.props.children}
			</Options> :
			null;

		// If value prop is a key/value map, extract the value.
		const value = isKeyValueMap(this.props.value) ?
			this.props.value.value :
			this.props.value;

		// Create new var so we can check value in cx()
		const inputValue = (value === '') ?
			this.props.placeholder :
			value;

		return (
			<div className="hire-select" ref="select">
				<div
					className="input-container"
					onClick={this.handleInputClick}
				>
					<div className={cx({
						input: true,
						placeholder: value === '',
					})}
					>
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
	options: [],
	value: '',
};

Select.propTypes = {
	async: React.PropTypes.func,
	children: React.PropTypes.node,
	onChange: React.PropTypes.func.isRequired,
	options: arrayOfStringsOrArrayOfKeyValueMaps,
	placeholder: React.PropTypes.string,
	sort: React.PropTypes.bool,
	sortRelevance: React.PropTypes.bool,
	value: stringOrKeyValueMap,
};

export default Select;
