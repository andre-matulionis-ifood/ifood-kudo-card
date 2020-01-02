import React from 'react'
import OptionList from './option-list'
import Kudo from './kudo'

export default function KudoManager({ lang }) {
  const [message, setMessage] = React.useState('')
  const [type, setType] = React.useState(null)

  return (
    <div>
      <OptionList
        lang={lang}
        dataName='kudo-types'
        onChange={value => setType(value)}
      />
      <textarea onChange={e => setMessage(e.target.value)}></textarea>
      <Kudo
        typeId={type && type.id}
        typeLabel={type && type.labels[lang]}
        message={message}
      />
    </div>
  )
}
