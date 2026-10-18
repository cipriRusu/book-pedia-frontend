import { Routes, Route } from "react-router"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./components/Hero";
import CustomCard from "./components/CustomCard";
import { Spinner } from "../components/ui/spinner";
import { useEffect, useState } from "react";
import { FRONTPAGE_API_CALL } from "./utils/LinkBuilder";
import type { IFrontPageCard } from "./interfaces/IFrontPage";

function App() {
  const [frontPage, setFrontPage] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let getData = async () => {
      let data = await FRONTPAGE_API_CALL();

      //Added timeout to make the loader visible. Wil be removed in a future version
      await new Promise(resolve => setTimeout(resolve, 5000));

      setIsLoading(false);
      setFrontPage(data);
    }

    getData();
  }, [])

  return (
    <>
      {isLoading ?
        <>
          {/*TODO: Add Loading text*/}
          <Spinner className="size-16 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        </>
        :
        <>
          <Header isLoading={isLoading} header={frontPage?.header} topHeader={frontPage?.topHeader} frontPageBody={""} cards={[]} />
          <Routes>
            <Route index element={
              <>
                <Hero />
                <div className="flex w-6xl mx-auto">
                  <div className="mx-4 my-12">
                    {frontPage?.frontPageBody}
                  </div>
                </div>
                <div className="flex max-w-6xl mx-auto">
                  {frontPage?.cards?.map((card: IFrontPageCard, index: number) => {
                    return <CustomCard key={index} title={card?.title} content={card?.content} footer={card?.footer} />
                  })}
                </div>
              </>
            }>
            </Route>
            <Route path="/all" element={<></>}></Route>
          </Routes>
          <Footer />
        </>
      }
    </>
  )
}

export default App;
