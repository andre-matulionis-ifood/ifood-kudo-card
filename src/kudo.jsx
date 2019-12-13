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
      <h1 className={style.header}>{type ? type.label : ''}</h1>
      <div className={style.message}>{message}</div>
    </div>
  )
}

Kudo.propTypes = propTypes
