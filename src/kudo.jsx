import React from 'react'
import pt from 'prop-types'
import html2canvas from 'html2canvas'
import { saveAs } from 'file-saver'
import style from './kudo.module.scss'

const propTypes = {
  type: pt.string,
  message: pt.string
}

export default function Kudo({ type, message }) {
  const kudoRef = React.useRef()

  function onSaveClick() {
    ;(async () => {
      const canvas = await html2canvas(kudoRef.current)
      canvas.toBlob(blob => {
        saveAs(blob, 'kudo.png')
      })
    })()
  }

  return (
    <div>
      <button onClick={onSaveClick}>Salvar</button>
      <div className={style.main} ref={kudoRef}>
        <h1 className={style.header}>{type ? type.label : ''}</h1>
        <div className={style.message}>{message}</div>
      </div>
    </div>
  )
}

Kudo.propTypes = propTypes
