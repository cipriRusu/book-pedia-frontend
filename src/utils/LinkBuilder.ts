export const FRONTPAGE_API_CALL = async () => {
    const req = await fetch(`${import.meta.env.VITE_API_ADDRESS}:${import.meta.env.VITE_API_PORT}/${import.meta.env.VITE_FRONTPAGE_ROUTE}`);
    const data = await req.json()
    return data;
}

export const LISTING_API_CALL = async (searchParams: any) => {
    const req = await fetch(`${import.meta.env.VITE_API_ADDRESS}:${import.meta.env.VITE_API_PORT}/${import.meta.env.VITE_LISTING_ROUTE}?${searchParams}`);
    const data = await req.json();
    return data;
}

export const ARTICLE_API_CALL = async (articleId: string) => {
    const req = await fetch(`${import.meta.env.VITE_API_ADDRESS}:${import.meta.env.VITE_API_PORT}/${import.meta.env.VITE_ARTICLE_ROUTE}/${articleId}`);
    const data = await req.json();
    return data;
}

export const TAGS_API_CALL = async () => {
    const req = await fetch(`${import.meta.env.VITE_API_ADDRESS}:${import.meta.env.VITE_API_PORT}/${import.meta.env.VITE_TAGS_ROUTE}`);
    const data = await req.json();
    return data;
}