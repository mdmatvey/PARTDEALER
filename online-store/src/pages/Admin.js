import React from 'react'
import ControlPanel from '../components/ControlPanel'
import AdminControl from '../components/AdminControl'
import Orders from '../components/Orders'

const Admin = () => {
  /* HARD CODED USER DATA */
  const user = {
    role: 'admin',
    password: 'simple_password'
  }
  /* HARD CODED USER DATA */

  return (
        <ControlPanel button1={'Управление'} button2={'Заказы'} FirstTab={AdminControl} SecondTab={Orders} user={user} />
  )
}

export default Admin
