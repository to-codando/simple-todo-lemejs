
import template from './template'
import styles from './styles'

import { appTask } from '../appTask'
import { appCreateTask } from '../appCreateTask'
import { appRemoveTask } from '../appRemoveTask'

import { store } from '../../store'
import { observerFactory } from 'lemejs'

const appTaskList = () => {

  const state = observerFactory({ ...store.get() })

  store.on(({ tasks }) => {
    state.set({ tasks: [...tasks] })
  })

  const  children = () => ({
    appCreateTask,
    appTask,
    appRemoveTask
  })

  return {
    state,
    template,
    styles,
    children
  }

}

export { appTaskList };