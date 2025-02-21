import Categories from "../components/Categories"
import Footer from "../components/Footer"
import Listings from "../components/Listings"
import Navbar from "../components/Navbar"
import Slide from "../components/Slide"

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Slide />
      <Categories />
      <Listings />
      <Footer />
    </>
  )
}

export default HomePage