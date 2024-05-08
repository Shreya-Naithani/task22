import React,{useState ,useEffect} from 'react'
import { useFetch } from '../Hooks/fetch.js'

const Main = () => {
  
  const {getData,loading}= useFetch('https://jsonplaceholder.typicode.com/photos?_limit=20');
 
  return (
    
    <div>
      { loading ? (<div className='text-white flex justify-center items-center mt-[200px]'>Loading...</div>):
        getData.length == 0 ? (<div>No Data found </div>): 
        (
          <div className='grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
            {
              
          getData.map((item)=>(
            
            <div key={item.id} className='flex flex-col justify-center items-center py-2 mb-3 border-2'>
             <img className='h-[200px]' src={item.url}/>
          <p className='text-white'>{item.title.slice(0,25)}</p>
          </div>

          
        ))
            }
          </div>
        )
      }
    </div>
  )
}

export default Main
