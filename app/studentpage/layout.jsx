import Sidebar from "../components/SideBar"
import Navbar from "../components/navbar"
import { MyContextProvider } from "../lib/MyContext"


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MyContextProvider>
        <div className="flex">
        <div className="flex-[1]">
          <Sidebar />
        </div>

        <div className="flex-[4] bg-gray-100 px-5">
          <Navbar/>
          <main className="">
            {children}
          </main>
        </div>
        
        </div>
        </MyContextProvider>
        </body>
      
    </html>
  )
}