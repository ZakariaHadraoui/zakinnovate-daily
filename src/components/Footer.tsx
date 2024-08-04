import React from 'react'

function Footer() {
  return (
	
<footer className="relative bg-blueGray-200 pt-8 pb-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl fonat-semibold text-blueGray-700">Keep reading!</h4>
       
       
      </div>
    
    </div>
    <hr className="my-6 border-blueGray-300"/>
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2024</span><a className="text-blueGray-500 hover:text-gray-800" /> zakinnovate daily by 
          <a className="text-blueGray-500 hover:text-blueGray-800"> zakaria hadraoui</a>.
        </div>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer