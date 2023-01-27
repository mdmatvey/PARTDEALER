import React from 'react'
import ControlPanel from '../components/ControlPanel'
import UserControl from '../components/UserControl'
import Orders from '../components/Orders'

const User = () => {
  /* HARD CODED USER DATA */
  const user = {
    role: 'user',
    phone: '89991234567',
    address: 'Zalupinsk city, Krasnoznamenskaya st.',
    email: 'marklyan@gmail.com',
    password: 'simple_password'
  }
  /* HARD CODED USER DATA */

  return (
        <ControlPanel button1={'Данные'} button2={'Заказы'} FirstTab={UserControl} SecondTab={Orders} user={user} />
  )
}

export default User
