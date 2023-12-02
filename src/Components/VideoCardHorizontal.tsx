import { useRouter } from "next/router";

interface videoType{
    thumbnail:string,
    authorImage:string,
    title:string,
    author:string,
    views:string,
    timestamp:string
}

export default function VideoCardHorizontal(props:videoType)
{
    const router = useRouter();

    return(
        <div className="grid grid-cols-12 w-97 mb-1 ml-4">
            <div className="m-2 cursor-pointer col-span-5" onClick={() => router.push("/video/1")}>
                <img   src={props.thumbnail} className="rounded-xl"></img>
            </div>
            <div className="col-span-7 pt-2">
                <div>{props.title}</div> 
                <div className="text-gray-500 text-xs">{props.author}</div> 
                <div className="text-gray-500 text-xs">{props.views} | {props.timestamp}</div> 
            </div>
        </div>
        
    )
}