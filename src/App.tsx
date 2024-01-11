import Listing from './components/Listing'
import etsy from './data/etsy.json'
import './App.css'

function App() {
  return (
    <Listing items={etsy.filter((obj) => obj.state === 'active')}/>
  )
}

export default App