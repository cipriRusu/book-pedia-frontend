import { Card, CardContent, CardFooter, CardHeader } from "../../components/ui/card";

interface ICustomCard {
    title: string,
    content: string,
    footer: string
}

const CustomCard = ({ title, content, footer }: ICustomCard) => {
    return <Card className="w-[25%] mx-4 mt-12 py-0">
        <img className="hover:scale-x-102 duration-700 cursor-pointer" src="https://picsum.photos/seed/picsum/600/400?grayscale" />
        <CardHeader>
            <h1 className="bold text-xl">{title}</h1>
        </CardHeader>
        <CardContent>
            {content}
        </CardContent>
        <CardFooter>
            {footer}
        </CardFooter>
    </Card>
}

export default CustomCard;
