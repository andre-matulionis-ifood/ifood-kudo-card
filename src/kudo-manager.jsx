import React from 'react'
import Kudo from './kudo'
import typeOptionsLang from './options.json'

const formatOptionLang = lang => ({ id, labels }) => ({
  id,
  label: labels[lang]
})

export default function KudoManager({ lang }) {
  const [message, setMessage] = React.useState('')
  const formatTypeOption = React.useCallback(formatOptionLang(lang), [lang])
  const typeOptions = React.useMemo(
    () => typeOptionsLang.map(formatTypeOption),
    [formatTypeOption]
  )
  const [typeOptionId, setTypeOptionId] = React.useState(typeOptions[0].id)
  const typeOption = React.useMemo(
    () => formatTypeOption(typeOptionsLang.find(o => o.id === typeOptionId)),
    [formatTypeOption, typeOptionId]
  )

  function handleTypeChange(val) {
    setTypeOptionId(val)
  }

  function handleMessageChange(val) {
    setMessage(val)
  }

  return (
    <div>
      <select onChange={e => handleTypeChange(e.target.value)}>
        {typeOptions.map(({ id, label }) => (
          <option value={id}>{label}</option>
        ))}
      </select>
      <textarea onChange={e => handleMessageChange(e.target.value)}></textarea>
      <Kudo type={typeOption} message={message} />
    </div>
  )
}
