import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Article = () => {
    const { id } = useParams();
    const [article, setArticle] = useState<any>(null);

    useEffect(() => {
        const fetchArticle = async () => {
            const res = await fetch(`http://localhost:3001/article/${id}`);
            const data = await res.json();
            setArticle(data);
        }
        fetchArticle();
    }, [id]);

    return <>
        <h1 className="">{article?.title}</h1>
    </>
}

export default Article;