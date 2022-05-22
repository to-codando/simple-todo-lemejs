import { routerFactory } from "lemejs"

import { appNotFound } from "../components/appNotFound"
import { appTaskList } from "../components/appTaskList"

const router = routerFactory()

router.add({
  hash: '/',
  validator: /^#\/$/,
  component: appTaskList,
  isInitial: true
})

router.add({
  hash: 'not-found',
  validator: /^#\/not-found$/,
  component: appNotFound,
  isDefault: true
})

export { router }