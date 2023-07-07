import React from 'react'
import Button from './Button'

const Header = ({onAdd ,onShow}) => {
  return (
    <>
        <header className='d-flex justify-content-between bg-dark text-white header'>
            <h2>React Practice</h2>
            <Button color={onShow? 'red' : 'green'} text={onShow? 'Close' : 'Add'} change={onAdd}/>
        </header>
    </>
  )
}

export default Header