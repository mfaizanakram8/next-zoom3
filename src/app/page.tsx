import React from 'react'

const page = () => {
  return (
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="pic.jfif" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “I am Front End Developer. I have recently engaged in BS Computer Science. I have learned a lot about coding and programming during my time at university. I have worked on some projects and I think I did a good job.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          muhammad faizan akram
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Staff Engineer, mantech
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page