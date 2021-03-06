import React from 'react'
import { Helmet } from 'react-helmet'
import OptionList from './option-list'
import KudoManager from './kudo-manager'

function App() {
  const [lang, setLang] = React.useState({ id: 'br' })

  return (
    <div className='App'>
      <Helmet>
        <link
          href='https://fonts.googleapis.com/css?family=Kalam&display=swap'
          rel='stylesheet'
        />
      </Helmet>
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
