"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const cx = require("classnames");
const hire_forms_options_1 = require("hire-forms-options");
class Select extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            options: this.props.options,
            visible: false,
        };
        this.handleDocumentClick = (ev) => {
            if (this.state.visible && !this.node.contains(ev.target)) {
                this.setState({
                    visible: false,
                });
            }
        };
        this.handleInputClick = () => {
            this.setState({ visible: !this.state.visible });
        };
        this.handleOptionsSelect = (option) => {
            this.setState({ visible: false });
            this.props.onChange(option.value);
        };
    }
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
    hideOptions() {
        this.setState({ visible: false });
    }
    render() {
        const options = this.state.visible ?
            React.createElement(hire_forms_options_1.default, { onSelect: this.handleOptionsSelect, optionComponent: this.props.optionComponent, sort: this.props.sort, sortRelevance: this.props.sortRelevance, value: this.props.value, values: this.state.options }, this.props.children) :
            null;
        const inputValue = (this.props.value.value === '') ?
            this.props.placeholder :
            this.props.value.value;
        return (React.createElement("div", { className: cx('hire-forms-select', this.props.className), ref: (node) => {
                this.node = node;
            } },
            React.createElement("div", { className: "input-container", onClick: this.handleInputClick },
                React.createElement("div", { className: cx({
                        input: true,
                        placeholder: this.props.value.value === '',
                    }) }, inputValue),
                React.createElement("button", null, "\u25BE")),
            options));
    }
}
Select.defaultProps = {
    options: [],
    value: { key: null, value: null },
};
const isKeyValueMap = (map) => (map != null) && map.hasOwnProperty("key") && map.hasOwnProperty("value");
exports.castKeyValue = (item) => isKeyValueMap(item) ?
    item :
    {
        key: item,
        value: item
    };
exports.default = Select;
