import { useState, type FormEvent } from 'react'
import type { SubjectId } from '../types/TodoItem'

type TaskFormProps = {
  onAdd: (title: string, subject: SubjectId) => void
  error: string
}

export function TaskForm({ onAdd, error }: TaskFormProps) {
  const [title, setTitle] = useState('')
  const [subject, setSubject] = useState<SubjectId>('programacion')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onAdd(title, subject)
    if (title.trim().length >= 3) {
      setTitle('')
      setSubject('programacion')
    }
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Nueva tarea</h2>
      <p className="form-help">
        El título es obligatorio y debe tener al menos 3 caracteres.
      </p>

      <label htmlFor="title">Título</label>
      <input
        id="title"
        name="title"
        type="text"
        placeholder="Ej. Repasar los hooks"
        autoComplete="off"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="subject">Materia</label>
      <select
        id="subject"
        name="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value as SubjectId)}
      >
        <option value="programacion">Programación</option>
        <option value="matematicas">Matemáticas</option>
        <option value="historia">Historia</option>
      </select>

      <p className="form-error" role="alert">
        {error}
      </p>

      <button type="submit" className="submit-button">
        Agregar tarea
      </button>
    </form>
  )
}