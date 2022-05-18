import React from 'react'

import { LanguageContainer, LanguageSelect } from './languageStyles'

const LanguageWidget = () => {
  return (
    <LanguageContainer>
      <LanguageSelect>
        <option value="en-US">en</option>
        <option value="es-ES">es</option>
        <option value="fr">fr</option>
      </LanguageSelect>
    </LanguageContainer>
  )
}

export default LanguageWidget