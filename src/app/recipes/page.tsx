import Footer from '@/components/footer/footer'
import Nav from '@/components/nav/nav'
import  Construcao  from '@/components/construction/construction'
 
import React from 'react'

function Recipes() {
  return (
    <div>
      <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col min-h-screen py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Construcao />
      </main>
    </div>
    </div>
  )
}

export default Recipes
