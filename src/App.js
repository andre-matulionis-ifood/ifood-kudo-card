import React from 'react'
import KudoManager from './kudo-manager'

function App() {
  const [lang, setLang] = React.useState('br')
  function handleLangChange(e) {
    setLang(e.target.value)
  }
  return (
    <div className='App'>
      <select onChange={handleLangChange}>
        <option value='br'>Português</option>
        <option value='en'>Inglês</option>
        <option value='es'>Espanhol</option>
      </select>
      <KudoManager lang={lang} />
    </div>
  )
}

export default App
