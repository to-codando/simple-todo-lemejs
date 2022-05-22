
import template from './template'
import styles from './styles'
import { store } from '../../store'

const appRemoveTask = () => {

  const hooks = () => ({
    afterOnInit
  })

  const afterOnInit = ({ on, queryOnce }) => {
    onClickButton(on, queryOnce)
  }

  const onClickButton = (on, queryOnce) => {
    const button = queryOnce('button')
    on('click', button, removeTask)
  }

  const removeTask = () => {
    const {tasks} = store.get()
    const newTasks = tasks.filter( task => !task.selected)
    store.set({ tasks: [...newTasks]})
  }

  return {
    template,
    styles,
    hooks
  }

}

export { appRemoveTask };