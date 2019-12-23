import React from 'react'
import optionsData from './options-data.json'

export default function OptionList({ lang, dataName, onChange }) {
  const options = React.useMemo(
    () =>
      optionsData[dataName].map(({ id, labels }) => ({
        id,
        label: labels[lang]
      })),
    [lang, dataName]
  )

  function handleIdChange(selectedId) {
    const selectedOption = optionsData[dataName].find(o => o.id === selectedId)
    onChange(selectedOption)
    console.log({ selectedId, selectedOption })
  }

  return (
    <select onChange={e => handleIdChange(e.target.value)}>
      {options.map(({ id, label }) => (
        <option key={id} value={id}>
          {label}
        </option>
      ))}
    </select>
  )
}
