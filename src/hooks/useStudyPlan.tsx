import { useReducer } from 'react'
import type {FilterId, State, SubjectId } from '../types/TodoItem'
import type { Action } from '../types/TodoAction'

const initialState: State = {
  tasks: [],
  filter: 'all',
  error: '',
}

const ERROR_MESSAGE = 'Escribe un título de al menos 3 caracteres.'

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'add': {
      const title = action.title.trim()
      if (title.length < 3) {
        return { ...state, error: ERROR_MESSAGE }
      }
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: crypto.randomUUID(),
            title,
            subject: action.subject,
            done: false,
          },
        ],
        error: '',
      }
    }
    case 'toggle':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.id ? { ...task, done: !task.done } : task,
        ),
      }
    case 'remove':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      }
    case 'setFilter':
      return { ...state, filter: action.filter }
    default:
      return state
  }
}

export function useStudyPlan() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addTask = (title: string, subject: SubjectId) =>
    dispatch({ type: 'add', title, subject })
  const toggleTask = (id: string) => dispatch({ type: 'toggle', id })
  const removeTask = (id: string) => dispatch({ type: 'remove', id })
  const setFilter = (filter: FilterId) =>
    dispatch({ type: 'setFilter', filter })

  const total = state.tasks.length
  const pending = state.tasks.filter((t) => !t.done).length
  const done = state.tasks.filter((t) => t.done).length

  const visibleTasks = state.tasks.filter((task) => {
    if (state.filter === 'pending') return !task.done
    if (state.filter === 'done') return task.done
    return true
  })

  return {
    tasks: visibleTasks,
    filter: state.filter,
    error: state.error,
    total,
    pending,
    done,
    addTask,
    toggleTask,
    removeTask,
    setFilter,
  }
}