import { TaskItem } from './TaskItem'
import type { Task } from '../types/TodoItem'

type TaskListProps = {
  tasks: Task[]
  onToggle: (id: string) => void
  onRemove: (id: string) => void
}

export function TaskList({ tasks, onToggle, onRemove }: TaskListProps) {
  return (
    <section className="task-panel" aria-label="Tareas">
      {tasks.length === 0 ? (
        <p className="empty-state">No hay tareas para este filtro.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onRemove={onRemove}
            />
          ))}
        </ul>
      )}
    </section>
  )
}