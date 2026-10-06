export type SubjectId = 'programacion' | 'matematicas' | 'historia'
export type FilterId = 'all' | 'pending' | 'done'

export type Task = {
  id: string
  title: string
  subject: SubjectId
  done: boolean
}

export type State = {
  tasks: Task[]
  filter: FilterId
  error: string
}

