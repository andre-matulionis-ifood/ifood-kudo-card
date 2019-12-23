import React from 'react'
import OptionList from './option-list'
import KudoManager from './kudo-manager'

function App() {
  const [lang, setLang] = React.useState({ id: 'br' })

  return (
    <div className='App'>
      <OptionList
        dataName='lang'
        lang={lang.id}
        onChange={lng => setLang(lng)}
      />
      <KudoManager lang={lang.id} />
    </div>
  )
}

export default App
