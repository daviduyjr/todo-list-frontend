import { IProps as IViewProps } from './view/props';

export interface IProps extends Omit<IViewProps, 
    'formTodo' | 'handleCreateToDoSubmit' | 'submitting' |
    'handleUpdateToDoSubmit'
    > {
    submitDone: () => void;
}