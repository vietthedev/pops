export const TASK_STATUS = {
  TODO: 0,
  IN_PROGRESS: 1,
  DONE: 2,
  DELETED: 3,
  CANCELED: 4
}

export const TASK_LIST_ITEM_STYLES = {
  [TASK_STATUS.TODO]: {
    ICON: 'assignment',
    COLOR: 'grey'
  },
  [TASK_STATUS.IN_PROGRESS]: {
    ICON: 'autorenew',
    COLOR: 'blue'
  },
  [TASK_STATUS.DONE]: {
    ICON: 'assignment_turned_in',
    COLOR: 'green'
  },
  [TASK_STATUS.DELETED]: {
    ICON: 'delete',
    COLOR: 'red'
  },
  [TASK_STATUS.CANCELED]: {
    ICON: 'cancel',
    COLOR: 'black'
  }
}

export const TASK_ACTION = {
  START: {
    name: 'Start',
    value: TASK_STATUS.IN_PROGRESS,
    color: 'primary'
  },
  DONE: {
    name: 'Done',
    value: TASK_STATUS.DONE,
    color: 'secondary'
  },
  DELETE: {
    name: 'Delete',
    value: TASK_STATUS.DELETED
  },
  CANCEL: {
    name: 'Cancel',
    value: TASK_STATUS.CANCELED
  }
}

export const TASK_DOABLE_ACTION = {
  [TASK_STATUS.TODO]: [TASK_ACTION.START, TASK_ACTION.DELETE],
  [TASK_STATUS.IN_PROGRESS]: [TASK_ACTION.DONE, TASK_ACTION.CANCEL],
  [TASK_STATUS.DONE]: [TASK_ACTION.DELETE],
  [TASK_STATUS.CANCELED]: [TASK_ACTION.DELETE],
  [TASK_STATUS.DELETED]: []
}
