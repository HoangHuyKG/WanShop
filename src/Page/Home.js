import React from 'react'
import Header from '../Component/Header'
import Categories from '../Component/Categories'
import Item from '../Component/Item'
export default function Home() {
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <Header />
      <div className='gird'>
        <div className='row'>
          <Categories />
          <div className='row-10'>
            <Item />
          </div>
        </div>
      </div>
    </div>
  )
}
