import { observer } from 'mobx-react'
import React, { Component } from 'react'

import { CONTAINER_ID } from './lib/constants'
import events from './lib/events'
import runnablesStore from './runnables/runnables-store'

import Header from './header/header'
import Runnables from './runnables/runnables'

@observer
class Reporter extends Component {
  componentWillMount () {
    events.listen(this.props.runner)
  }

  render () {
    return (
      <div className='reporter' id={CONTAINER_ID}>
        <Header />
        <Runnables runnablesStore={runnablesStore} specPath={this.props.specPath} />
      </div>
    )
  }
}

export default Reporter
