import { useEffect, useState } from "react";
import type { IArticle } from "../interfaces/IFrontPage";
import { useSearchParams } from "react-router";
import { LISTING_API_CALL } from "../utils/LinkBuilder";

const Listing = () => {
    //TODO: Develop listing page further
    let [articles, setArticles] = useState<IArticle[] | null>();
    const [searchParams, _setSearchParams] = useSearchParams();

    useEffect(() => {
        const fetchListings = async () => {
            const data = await LISTING_API_CALL(searchParams);
            setArticles(data);
        }
        fetchListings();
        return () => {
            setArticles(null);
        }
    }, [searchParams])

    return <div className="mx-auto max-w-6xl px-4 py-5">
        {articles?.map((x: IArticle) => {
            return <h1>{x.title}</h1>
        })}</div>
}

export default Listing;