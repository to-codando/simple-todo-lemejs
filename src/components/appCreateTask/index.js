import { observerFactory } from 'lemejs';

import template from './template'
import styles from './styles'

import { store} from '../../store'

const appCreateTask = () => {

  const hooks = () => ({
    afterOnInit
  })

  const afterOnInit = ({ on, queryOnce }) => {
    onInputType(on, queryOnce)
  }

  const onInputType = (on, queryOnce) => {
    const input = queryOnce('input')
    on('keyup', input, createTask)
  }

  const createTask = ({ target, keyCode }) => {
    if(keyCode !== 13) return
    const { tasks } = store.get()
    const { value: title } = target
    const id = createId()
    const task = { id, title }
    store.set({ tasks: [ ...tasks, task ]})
  }

  const createId = () => {
    const { tasks } = store.get()
    return tasks.length + 1
  }

  return {
    template,
    styles,
    hooks
  }

};

export { appCreateTask };