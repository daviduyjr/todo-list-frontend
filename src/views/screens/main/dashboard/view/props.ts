import { ITodo } from 'src/interfaces/models';

export interface IPaginationSetting {
    current: number;
    pageSize: number;
}

export interface IProps {
    isTableLoading: boolean;
    paginationSettings: IPaginationSetting;
    handleChangePagination: (pagination: any) => void;
    handleCreateTodo: () => void;
    isModalOpen: boolean;
    handleModalOnCancel: () => void;
    method: string;
    submitDone: () => void;
    contextHolder: any;
    handleUpdateTodo: (todo: ITodo) => void;
    todo: ITodo | undefined | null;
    handleSwitchChange: (id: string, checked: boolean) => void;
    handleDeleteTodo: (todo: ITodo) => void;
}