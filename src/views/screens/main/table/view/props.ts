import type { ITodo } from 'src/interfaces/models';
import type { IPaginationSetting } from '../../dashboard/view/props';

export interface IProps {
    isTableLoading: boolean;
    todos: ITodo[];
    paginationSettings: IPaginationSetting;
    handleChangePagination: (pagination: any) => void;
    handleUpdateTodo: (todo: ITodo) => void;
    handleSwitchChange: (id: string, checked: boolean) => void;
    handleDeleteTodo: (todo: ITodo) => void;
}