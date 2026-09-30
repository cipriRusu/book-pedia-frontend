import { Card, CardContent, CardFooter, CardHeader } from "../../components/ui/card";

const CustomCard = () => {
    return <Card className="w-[25%] mx-4 mt-12 py-0">
        <img className="hover:scale-x-102 duration-700 cursor-pointer" src="https://picsum.photos/seed/picsum/600/400?grayscale" />
        <CardHeader>
            <h1 className="bold text-xl">Placeholder</h1>
        </CardHeader>
        <CardContent>
            Placeholder
        </CardContent>
        <CardFooter>
            PlaceHolder
        </CardFooter>
    </Card>
}

export default CustomCard;
