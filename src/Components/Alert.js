import React from 'react'

export const Alert = (props) => {
  props.alert && console.log(props.alert.msg)

  return (
      
      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{props.alert.msg}</strong>
  
  </div>

  )
}

export default Alert;