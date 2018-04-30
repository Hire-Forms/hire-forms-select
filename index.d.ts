/// <reference types="react" />
import * as React from 'react';
import { IOptionComponentProps, SortTypes } from 'hire-forms-options';
export interface IKeyValue {
    key: string | number;
    value: string;
}
export interface IProps {
    async?: (done: (response: IKeyValue[]) => void) => void;
    className?: string;
    onChange: (ev: any) => void;
    optionComponent?: React.StatelessComponent<IOptionComponentProps>;
    options: IKeyValue[];
    placeholder?: string;
    sortOn?: SortTypes;
    sortRelevance?: boolean;
    value: IKeyValue;
}
export interface IState {
    options: IKeyValue[];
    visible: boolean;
}
declare class Select extends React.Component<IProps, IState> {
    state: {
        options: IKeyValue[];
        visible: boolean;
    };
    private node;
    static defaultProps: Partial<IProps>;
    componentDidMount(): void;
    componentWillReceiveProps({options}: {
        options: any;
    }): void;
    componentWillUnmount(): void;
    private handleDocumentClick;
    private handleInputClick;
    private handleOptionsSelect;
    hideOptions(): void;
    render(): JSX.Element;
}
export declare const castKeyValue: (item: any) => IKeyValue;
export default Select;
