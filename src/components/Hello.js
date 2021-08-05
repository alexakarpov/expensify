import React from 'react'

const Hello = (props) => <div>{props.message}</div>

Hello.defaultProps = {
  message: 'OHAI',
}

export default Hello
