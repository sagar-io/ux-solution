import Categories from "../../Category"
import NavBar from "../../NavBar"
import Hero from "../../Hero"
import TagLine from "../../TagLine"

const Home = () => {
  return (
    <div className="home-wrapper">
      <NavBar />
      <Hero />
      <TagLine/>
      <Categories />
    </div>
  )
}

export default Home