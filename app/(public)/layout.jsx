import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"



const PublicLayout = ({children}) => {
  return (
      <div>
          <Navbar />
          <main>
              {children}
          </main>
          <Footer />
    </div>
  )
}
export default PublicLayout