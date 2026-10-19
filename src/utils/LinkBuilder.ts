export const FRONTPAGE_API_CALL = async () => {
    const req = await fetch(`${import.meta.env.VITE_API_ADDRESS}:${import.meta.env.VITE_API_PORT}/${import.meta.env.VITE_FRONTPAGE_ROUTE}`);
    const data = await req.json()
    return data;
}
