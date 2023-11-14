import { useEffect } from "react"
import { Link } from "react-router-dom"
useEffect

export default function ErrorPage() {
  useEffect(() => {
    document.title = "Error"
  }, [])
  return (
    <div className=" flex items-center text-center mt-[40vh] flex-col font-['Bebas_Neue'] text-5xl text-dark dark:text-white">
      <p>SOMETHING HAPENNED</p>
      <Link className="text-xl text-light-blue-900" to="/">Back to the Homepage</Link>
    </div>
  )
}