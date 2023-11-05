import React from 'react'

function small_alert(props) {
  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div id="liveToast" className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <strong className="me-auto">Netplex</strong>
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body">
          {props.msg}
        </div>
      </div>
    </div>
  )
}

export default small_alert