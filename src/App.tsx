import { QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18next from './config/i18n'
import Router from './router'
import { MToastContainer } from './components/MToastContainer'
import queryClient from './utils/queryClient'
import 'swiper/css'
import './styles/App.css'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <MToastContainer />
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </I18nextProvider>
    </BrowserRouter>
  )
}

export default App