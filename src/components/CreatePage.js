import React from 'react'

const Create = (props) => <div>{props.message}</div>

Create.defaultProps = {
  message: 'CREATE',
}

export default Create
