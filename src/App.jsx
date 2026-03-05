import { ToastContainer } from 'react-toastify'
import Banner from './Banner/Banner'
import AllCustomer from './CustomerTickets/AllCustomer'
import Foother from './Foother/Foother'
import Navber from './Navber/Navber'

function App () {
  return (
    <>
      <div className=''>
        <Navber></Navber>
        <AllCustomer></AllCustomer>
        <Foother></Foother>
         <ToastContainer />
      </div>
    </>
  )
}

export default App
