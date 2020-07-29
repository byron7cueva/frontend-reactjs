import React from 'react'
import '../../css/spinner.css'

export const Spinner = () => (
  <div className='center'>
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
)