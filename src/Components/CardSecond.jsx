// event handling 
import React from 'react'

export const CardSecond = () => {
     
    var buttonClick = ()=>{alert("download song")}
    const data = [
        {name:"heeriye",description:"he er alle alle alle alle"},
        {name:"mahiya ve",description: "mahiya ve alle alle alle"}
    ]

  return (
    <div className='w-full h-screen px-3 py-4 bg-zinc-200 flex flex-col items-center justify-center gap-5 '>
        {data.map((elem,index)=>(
                <div className='w-72 px-2 py-1 bg-zinc-100 rounded-md'>
                <h1 className='font-semibold text-lg'>{elem.name}</h1>
                <p className='mt-2 text-sm'>{elem.description}</p>
                <button onClick={buttonClick} className=' bg-blue-700 text-zinc-100 px-2 py-1 rounded mt-2 text-xs'>Download</button>
            </div>

        ))}
    </div>
  )
}
