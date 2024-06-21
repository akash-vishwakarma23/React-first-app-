// conditional renderring 
import React from 'react'

export const Card = () => {

  const data = [
    {image: 'https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name:"Amazon Basics",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor mollitia minima dolores.",Instock : false},
    {image: 'https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name:"Apple",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",Instock: true},
    {image: 'https://images.unsplash.com/photo-1494366222322-387658a1a976?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name:"Digital Product",description:"Lorem ipsum dolor sit amet consectetur",Instock : true},
    
  ]
  return (
    <div className='w-full h-screen flex items-center justify-center gap-10 bg-zinc-200'>
        {data.map((elem,index)=>(
          <div key={index} className='w-52 bg-zinc-100  rounded-md overflow-hidden'>
          <div className='h-32 bg-zinc-300'>
            <img className='w-full h-full object-cover' src= {elem.image} alt="" />
          </div>
          <div className='w-full px-3 py-4'>
              <h2 className='font-semibold'>{elem.name}</h2>
              <p className='text-xs mt-5'>{elem.description}</p>
              <button className={`px-3 py-1 ${elem.Instock ? "bg-blue-600":"bg-red-600"} text-zinc-100 rounded mt-2 text-xs`}>{elem.Instock ? "In Stock" :"Out Of Stock"}</button>
          </div>

      </div>
        ))}
    </div>
  )
}
