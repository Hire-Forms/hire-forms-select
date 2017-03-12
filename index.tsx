import * as React from 'react';
import * as cx from 'classnames';
import Options from 'hire-forms-options';

interface IKeyValue {
	key: string | number;
	value: string;
}

interface IProps {
	async?: (done: (response: IKeyValue[]) => void) => void;
	onChange: (ev: any) => void;
	options: IKeyValue[];
	placeholder?: string;
	sort?: boolean;
	sortRelevance?: boolean;
	value: IKeyValue;
}

interface IState {
	options: IKeyValue[];
	visible: boolean;
}

class Select extends React.Component<IProps, IState> {
	public state = {
		options: this.props.options,
		visible: false,
	};

	private node;

	public static defaultProps: Partial<IProps> = {
		options: [],
		value: { key: null, value: null },
	};

	public componentDidMount() {
		document.addEventListener('click', this.handleDocumentClick, false);

		if (this.props.async != null) {
			this.props.async((response: IKeyValue[]) => {
				this.setState({
					options: response,
				});
			});
		}
	}

	public componentWillReceiveProps({ options }) {
		if (this.props.options !== options) {
			this.setState({ options });
		}
	}

	public componentWillUnmount() {
		document.removeEventListener('click', this.handleDocumentClick, false);
	}

	private handleDocumentClick = (ev) => {
		if (this.state.visible && !this.node.contains(ev.target)) {
			this.setState({
				visible: false,
			});
		}
	};

	private handleInputClick = (/* ev */) => {
		this.setState({ visible: !this.state.visible });
	};

	/**
	 * @method
	 * @param {object} value Map of key and value: {key: "somekey", value: "somevalue"}
	 */
	private handleOptionsChange = (option: IKeyValue) => {
		this.setState({ visible: false });
		this.props.onChange(option.value);
	};

	public hideOptions() {
		this.setState({ visible: false });
	}

	public render() {
		const options = this.state.visible ?
			<Options
				onChange={this.handleOptionsChange}
				sort={this.props.sort}
				sortRelevance={this.props.sortRelevance}
				value={this.props.value}
				values={this.state.options}
			>
				{this.props.children}
			</Options> :
			null;

		// Create new var so we can check value in cx()
		const inputValue = (this.props.value.value === '') ?
			this.props.placeholder :
			this.props.value.value;

		return (
			<div
				className="hire-select"
				ref={(node) => {
					this.node = node;
				}}
			>
				<div
					className="input-container"
					onClick={this.handleInputClick}
				>
					<div className={cx({
						input: true,
						placeholder: this.props.value.value === '',
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

//
// Select.propTypes = {
// 	async: React.PropTypes.func,
// 	children: React.PropTypes.node,
// 	onChange: React.PropTypes.func.isRequired,
// 	options: arrayOfStringsOrArrayOfKeyValueMaps,
// 	placeholder: React.PropTypes.string,
// 	sort: React.PropTypes.bool,
// 	sortRelevance: React.PropTypes.bool,
// 	value: stringOrKeyValueMap,
// };
const isKeyValueMap = (map: any) =>
	(map != null) && map.hasOwnProperty("key") && map.hasOwnProperty("value");

export const castKeyValue = (item: any): IKeyValue =>
	isKeyValueMap(item) ?
		item :
		{
			key: item,
			value: item
		};

export default Select;
