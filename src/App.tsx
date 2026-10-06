import { Header } from './components/Header'
import { TaskFilters } from './components/TaskFilters'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import { TaskSummary } from './components/TaskSummary'
import { useStudyPlan } from './hooks/useStudyPlan'

export default function App() {
  const {
    tasks,
    filter,
    error,
    total,
    pending,
    done,
    addTask,
    toggleTask,
    removeTask,
    setFilter,
  } = useStudyPlan()

  return (
    <main className="app">
      <Header />
      <section className="layout">
        <TaskForm onAdd={addTask} error={error} />
        <section className="board">
          <TaskSummary total={total} pending={pending} done={done} />
          <TaskFilters active={filter} onChange={setFilter} />
          <TaskList
            tasks={tasks}
            onToggle={toggleTask}
            onRemove={removeTask}
          />
        </section>
      </section>
    </main>
  )
}