import Banner from './Banner/Banner'
import AllCustomer from './CustomerTickets/AllCustomer'
import Foother from './Foother/Foother'
import Navber from './Navber/Navber'

function App () {
  return (
    <>
      <div className=''>
        <Navber></Navber>
        <Banner></Banner>
        <AllCustomer></AllCustomer>
        <Foother></Foother>
      </div>
    </>
  )
}

export default App
