import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector,} from 'react-redux'

function Paste() {
  const pastes=useSelector((state)=>state.paste.pastes)
  const dispatch=useDispatch();
  const [searchTerm,setSearchTerm]=useState('')
  const filteredData=pastes.filter(
    (paste)=>paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  return (

    <div>
      <input className='p-2 rounded-2xl min-w-[600px] mt-4' type="search "
      placeholder='Search Here' 
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)}/>

      <div className='flex flex-col gap-5 mt-5'>
        {
          filteredData.length >0 &&
          filteredData.map(
            (paste) => {return (
              <div className='border'>
                {paste.title}
              </div>
            )}
          )
          
        }

      </div>
    </div>
  )
}

export default Paste