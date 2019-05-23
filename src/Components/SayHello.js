import React from 'react'
import { connect } from 'react-redux'
import { string, func } from 'prop-types'

import { changeSentence } from '../actions/hello'

const SayHello = ({ sentece, changeSentence }) => (
  <>
    <p>{sentece}</p>
    <button
      className="say-hello"
      type="button"
      onClick={() => changeSentence(
        sentece === 'Hello World !' ? 'Hello Dev !' : 'Hello World !',
      )
      }
    >
      <span role="img" aria-label="waving hand">
        👋
      </span>
      Say Hello !
    </button>
  </>
)

SayHello.propTypes = {
  sentece: string.isRequired,
  changeSentence: func.isRequired,
}

const mapStateToProps = state => ({
  sentece: state.hello.sentece,
})

const mapDispatchToProps = {
  changeSentence,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SayHello)
