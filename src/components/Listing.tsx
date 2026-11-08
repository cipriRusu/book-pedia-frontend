import { useEffect, useState } from "react";
import type { IArticle, ITag } from "../interfaces/IFrontPage";
import { useSearchParams } from "react-router";
import { LISTING_API_CALL, TAGS_API_CALL } from "../utils/LinkBuilder";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../../components/ui/accordion";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";

const Listing = () => {
    //TODO: Develop listing page further
    let [articles, setArticles] = useState<IArticle[] | null>();
    //TODO: Implement tag handling in params
    let [_tags, setTags] = useState<ITag[] | null>();

    const [searchParams, _setSearchParams] = useSearchParams();

    useEffect(() => {
        const fetchTags = async () => {
            const data = await TAGS_API_CALL();
            setTags(data);
        }

        fetchTags();
        return () => {
            setTags(null);
        }
    }, [])

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
        <Accordion className="px-4 pb-5" type="multiple">
            <AccordionItem value="item-1">
                <AccordionTrigger>Article Filters</AccordionTrigger>
                <AccordionContent>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        {articles?.map((article: IArticle, index: number) => {
            return <Card key={index} className="flex mb-16">
                <CardHeader>
                    <CardTitle><h1>{article.title}</h1></CardTitle>
                    <CardDescription>{article.description}</CardDescription>
                </CardHeader>
                <CardFooter>{article.footer}</CardFooter>
            </Card>
        })}</div>
}

export default Listing;