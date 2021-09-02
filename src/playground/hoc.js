import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
    <h1>Ohai</h1>
    <p>The info is {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>private info</p>}
      <WrappedComponent {...props} />
    </div>
  )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>gotta login first</p>
      )}
    </div>
  )
}
const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info='...from the info prop' />,
  document.getElementById('root')
)
