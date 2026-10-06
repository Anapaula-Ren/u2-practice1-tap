export type SubjectId = 'programacion' | 'matematicas' | 'historia'
export type FilterId = 'all' | 'pending' | 'done'

export type Action =
| {type: 'add'; title: string; subject: SubjectId}
| {type: 'toggle'; id: string}
| {type: 'remove'; id: string}
| {type: 'setFilter'; filter: FilterId}

