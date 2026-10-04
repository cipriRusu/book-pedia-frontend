import { Routes } from "react-router"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./components/Hero";
import CustomCard from "./components/CustomCard";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="flex w-6xl mx-auto">
        <div className="mx-4 my-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since 1966,
          when designers at Letraset and James Mosley, the librarian at St Bride Printing Library
          in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's
          Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop
          publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.
        </div>
      </div>
      <div className="flex w-6xl mx-auto">
        {[1, 2, 3, 4].map((x: number) => {
          return <CustomCard key={x} title="Placeholder" content="Placeholder" footer="Placeholder" />
        })}
      </div>
      <Routes>
      </Routes>
      <Footer />
    </>
  )
}

export default App
