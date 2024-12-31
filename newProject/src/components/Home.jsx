import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { addToPaste, updatePaste } from '../redux/pasteSlice'
function Home() {
    const [title,setTitle]=useState('')
    const [value,setValue]=useState('')
    const dispatch=useDispatch();
    const [searchParam,setSearcchParams]=useSearchParams();
    const pasteId=searchParam.get("pasteId")
    function createPaste()
    {
       const paste={
        title:title,
        content:value,
        _id:pasteId || Date.now().toString(36),
        createdAt: new Date().toISOString()
        }
        if(pasteId)
        {
            //update
            dispatch(updatePaste(paste))
        }
        else{
            //Create
            dispatch(addToPaste(paste))
        }
        setTitle('')
        setValue('')
        setSearcchParams({})
    }
  return (
   <div>
     <div className='flex flex-row gap-7'>
        <input className='p-1 pl-4 w-[66%] rounded-2xl place-content-between mt-2'
        type="text"
        placeholder='Enter Title Here'
        value={title}
        onChange={(e)=> setTitle(e.target.value)} />

        <button className='rounded-2xl p-2 mt-2' 
        onClick={createPaste}>{pasteId?"Update My Paste":"Create My Paste"}</button>
    </div>
    <div className='mt-4'>
        <textarea className='rounded-2xl mt-4 min-w-[500px] p-4'
        value={value}
        placeholder='Enter Content Here'
        onChange={(e)=>setValue(e.target.value)}
        rows={20}/>
    </div>
   </div>
  )
}

export default Home