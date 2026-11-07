import { Card, CardContent, CardFooter, CardHeader } from "../../components/ui/card";
import type { IFrontPageCard } from "../interfaces/IFrontPage";
import { useNavigate } from "react-router"

const CustomCard = ({ primary_key, title, content, footer }: IFrontPageCard) => {
    let navigate = useNavigate();

    return <Card onClick={() => { navigate(`article/${primary_key}`) }} className="w-[20%] mx-4 mt-12 py-0 cursor-pointer">
        {/*TODO: Add image to data*/}
        <img className="hover:scale-x-102 duration-700 cursor-pointer" src="https://picsum.photos/seed/picsum/600/400?grayscale" />
        <CardHeader>
            <h1 className="bold text-xl">{title}</h1>
        </CardHeader>
        <CardContent className="line-clamp-3">
            {content}
        </CardContent>
        <CardFooter>
            <div className="line-clamp-2">
            {footer}
            </div>
        </CardFooter>
    </Card>
}

export default CustomCard;
