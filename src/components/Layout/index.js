import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <div className='stars'></div>
        <div className='stars2'></div>
        <div className='stars3'></div>
      <div className="tab"></div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout