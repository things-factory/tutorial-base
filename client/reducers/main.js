import { UPDATE_TUTORIAL } from '../actions/main'

const INITIAL_STATE = {
  tutorial: 'ABC'
}

const tutorial = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_TUTORIAL:
      return { ...state }

    default:
      return state
  }
}

export default tutorial
