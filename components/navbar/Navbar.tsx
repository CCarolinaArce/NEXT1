import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import ActiveLink from "../active-link/ActiveLink"



// const temporalAsync = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(true)
//         }, 2000)
//     })
// }

const navItems = [

  { path: "/about", name: "About" },
  { path: "/pricing", name: "Pricing" },
  { path: "/contact", name: "Contact" },
]

const Navbar = async () => {

  //  await temporalAsync()

  return (
    <div>
      <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">

        <Link href={"/"} className="flex items-center">
        <HomeIcon className="mr-2"></HomeIcon>
        <span>HOME!</span>
        </Link>

        <div className="flex flex-1"></div>

        {
          navItems.map(navItem => (
           <ActiveLink key={ navItem.path } path={ navItem.path } text={ navItem.name } />
            
          ))
        }

  

      </nav>
    </div>
  )
}

export default Navbar
