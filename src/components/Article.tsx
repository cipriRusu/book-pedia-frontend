import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { IArticle } from "../interfaces/IFrontPage";

const Article = () => {
    const { id } = useParams();
    const [article, setArticle] = useState<IArticle | null>(null);

    useEffect(() => {
        const fetchArticle = async () => {
            const res = await fetch(`http://localhost:3001/article/${id}`);
            const data = await res.json();
            setArticle(data);
        }
        fetchArticle();
        return () => {
            setArticle(null);
        }
    }, [id]);

    return <div className="mx-auto max-w-6xl px-4 py-5">
        <h1 className="text-2xl font-semibold">{article?.title}</h1>
        <div>{article?.description}</div>
    </div>
}

export default Article;