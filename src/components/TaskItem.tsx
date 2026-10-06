import type { SubjectId, Task } from '../types/TodoItem'

const subjects: Record<SubjectId, string> = {
  programacion: 'Programación',
  matematicas: 'Matemáticas',
  historia: 'Historia',
}

type TaskItemProps = {
  task: Task
  onToggle: (id: string) => void
  onRemove: (id: string) => void
}

export function TaskItem({ task, onToggle, onRemove }: TaskItemProps) {
  return (
    <li className={task.done ? 'task is-done' : 'task'}>
      <label className="task-check">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
        />
        <span>{task.title}</span>
      </label>
      <span className={`badge badge-${task.subject}`}>
        {subjects[task.subject]}
      </span>
      <button
        type="button"
        className="delete-button"
        onClick={() => onRemove(task.id)}
      >
        Eliminar
      </button>
    </li>
  )
}