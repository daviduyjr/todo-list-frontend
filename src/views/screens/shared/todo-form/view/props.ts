import { FormInstance } from 'antd';
import { ITodo } from 'src/interfaces/models';

export interface IProps {
    isModalOpen: boolean;
    handleModalOnCancel: () => void;
    method: string;
    formTodo: FormInstance;
    handleCreateToDoSubmit: () => void;
    submitting: boolean;
    todo: ITodo | undefined | null;
    handleUpdateToDoSubmit: (todo: ITodo) => void;
}