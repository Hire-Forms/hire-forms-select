import * as React from 'react';
import * as cx from 'classnames';
import Options, { IOptionComponentProps, SortTypes } from 'hire-forms-options';

export interface IKeyValue {
	key: string | number;
	value: string;
}

export interface IProps {
	async?: (done: (response: IKeyValue[]) => void) => void
	className?: string
	onChange: (ev: any) => void
	optionComponent?: React.StatelessComponent<IOptionComponentProps>
	options: IKeyValue[]
	placeholder?: string
	sortOn?: SortTypes
	sortRelevance?: boolean
	value: IKeyValue
}

export interface IState {
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

	private handleInputClick = (_ev) => {
		this.setState({ visible: !this.state.visible });
	};

	private handleOptionsSelect = (option: IKeyValue) => {
		this.setState({ visible: false });
		this.props.onChange(option.value);
	};

	public hideOptions() {
		this.setState({ visible: false });
	}

	public render() {
		return (
			<div
				className={cx('hire-forms-select', this.props.className)}
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
						{
							(this.props.value.value === '') ?
								this.props.placeholder :
								this.props.value.value
						}
					</div>
					<button>▾</button>
				</div>
				{
					this.state.visible &&
					<Options
						onSelect={this.handleOptionsSelect}
						optionComponent={this.props.optionComponent}
						sortOn={this.props.sortOn}
						value={this.props.value}
						values={this.state.options}
					>
						{this.props.children}
					</Options>
				}
			</div>
		);
	}
}

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
