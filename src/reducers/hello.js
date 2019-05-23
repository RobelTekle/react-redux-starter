const defaulState = {
  sentece: 'Hello World !',
}

const hello = (state = defaulState, action) => {
  switch (action.type) {
    case 'CHANGE_SENTENCE':
      return { sentece: action.payload }
    default:
      return state
  }
}

export default hello
