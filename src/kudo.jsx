import React from 'react'
import pt from 'prop-types'
import style from './kudo.module.scss'

const propTypes = {
  type: pt.string,
  message: pt.string
}

export default function Kudo({ type, message }) {
  return (
    <div className={style.main}>
      <h1>{type ? type.label : ''}</h1>
      <p>{message}</p>
    </div>
  )
}

Kudo.propTypes = propTypes
