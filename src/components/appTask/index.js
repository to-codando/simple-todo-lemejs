
import template from './template'
import styles from './styles'
import { store } from '../../store'

const appTask = ({ props }) => {

  const hooks = () => ({
    afterOnRender
  })

  const afterOnRender = ({ on, queryOnce }) => {
    onClickTask(on, queryOnce)
  }

  const onClickTask = (on, queryOnce) => {
    const taskElement = queryOnce('li')
    on('click', taskElement, selectTask)
  }

  const selectTask = () => {
    const {tasks} = store.get()
    const taskId = +props.id
    const newTasks = tasks.map( task => 
        task.id === taskId 
          ? ({ ...task, selected:true }) 
          : ({ ...task, selected: false })
    )
    store.set({ tasks: [...newTasks]})
  }

  return {
    template,
    styles,
    hooks
  }

}

export { appTask };