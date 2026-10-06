import type { FilterId } from '../types/TodoItem'

const filters = [
  { id: 'all', label: 'Todas' },
  { id: 'pending', label: 'Pendientes' },
  { id: 'done', label: 'Completadas' },
] as const

type TaskFiltersProps = {
  active: FilterId
  onChange: (filter: FilterId) => void
}

export function TaskFilters({ active, onChange }: TaskFiltersProps) {
  return (
    <div className="filters" role="group" aria-label="Filtrar tareas">
      {filters.map((filter) => (
        <button
          key={filter.id}
          type="button"
          className={filter.id === active ? 'filter is-active' : 'filter'}
          data-filter={filter.id}
          onClick={() => onChange(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}