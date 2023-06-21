import { ThemeProvider } from 'styled-components'
import { HashRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyled } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CyclesContextProvider } from './contexts/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HashRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </HashRouter>
      <GlobalStyled />
    </ThemeProvider>
  )
}
