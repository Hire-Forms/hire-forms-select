import React from 'react'
import Options, { IOptionComponentProps, SortTypes } from 'hire-forms-options'
import { Wrapper } from './wrapper'

export interface KeyValue {
	key: string | number
	value: string
}

function isKeyValue(map: any): map is KeyValue {
	return (map != null) && map.hasOwnProperty("key") && map.hasOwnProperty("value")
}

export const castKeyValue = (item: any): KeyValue =>
	isKeyValue(item) ?
		item :
		{
			key: item,
			value: item
		}

export interface Props {
	// async?: (done: (response: KeyValue[]) => void) => void
	children?: React.ReactNode
	className?: string
	onChange: (option: KeyValue) => void
	optionComponent?: React.FC<IOptionComponentProps>
	options: KeyValue[]
	// placeholder?: string
	sortOn?: SortTypes
	sortRelevance?: boolean
	value: KeyValue
}

export default function HireFormsSelect(props: Props) {
	const ref = React.useRef<HTMLDivElement>()
	const [visible, setVisible] = React.useState(false)

	const handleOptionsSelect = React.useCallback((option: KeyValue) => {
		setVisible(false)
		props.onChange(option)
	}, [visible])

	React.useEffect(() => {
		function handleDocumentClick(ev: MouseEvent) {
			if (!visible) return

			if (!ref.current.contains(ev.target as Node)) {
				setVisible(false)
			}
		}
		document.addEventListener('click', handleDocumentClick);
		() => document.removeEventListener('click', handleDocumentClick)
	}, [visible])

	return (
		<Wrapper
			className="hire-forms-select"
			ref={ref}
		>
			<div
				className="input-container"
				onClick={() => setVisible(!visible)}
			>
				<div className="input">
					{props.value.value}
				</div>
				<button>▾</button>
			</div>
			{
				visible &&
				<Options
					onSelect={handleOptionsSelect}
					optionComponent={props.optionComponent}
					sortOn={props.sortOn}
					value={props.value}
					values={props.options}
				>
					{props.children}
				</Options>
			}
		</Wrapper>
	)
}


// export interface State {
// 	options: KeyValue[];
// 	visible: boolean;
// }

// class Select extends React.Component<Props, State> {
// 	public state = {
// 		options: this.props.options,
// 		visible: false,
// 	};

// 	private node: React.RefObject<HTMLDivElement>

// 	public static defaultProps: Partial<Props> = {
// 		options: [],
// 		value: { key: null, value: null },
// 	};

// 	public componentDidMount() {
// 		document.addEventListener('click', this.handleDocumentClick, false);

// 		if (this.props.async != null) {
// 			this.props.async((response: KeyValue[]) => {
// 				this.setState({
// 					options: response,
// 				});
// 			});
// 		}
// 	}

// 	public componentWillReceiveProps(props: Props) {
// 		if (this.props.options !== props.options) {
// 			this.setState({ options: props.options });
// 		}
// 	}

// 	public componentWillUnmount() {
// 		document.removeEventListener('click', this.handleDocumentClick, false);
// 	}



// }
