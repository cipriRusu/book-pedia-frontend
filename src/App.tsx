import { Routes } from "react-router"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./components/Hero";
import CustomCard from "./components/CustomCard";
import { useEffect, useState } from "react";

function App() {
  const [header, setHeader] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let getData = async () => {
      //TODO: Extract method
      //TODO: Create .env to handle API calls and routes
      let req = (await fetch("http://localhost:3001/frontpage"));
      let data = await req.json()

      //Added timeout to make the loader visible. Wil be removed in a future version
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      setIsLoading(false);
      setHeader(data);
    }

    getData();
  }, [])

  return (
    <>
      <Header isLoading={isLoading} header={header} />
      <Hero />
      <div className="flex w-6xl mx-auto">
        <div className="mx-4 my-12">
          {header?.frontPageBody}
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
