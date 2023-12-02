import { useRouter } from "next/router";


interface videoType{
    thumbnail:string,
    authorImage:string,
    title:string,
    author:string,
    views:string,
    timestamp:string
}

function VideoCard(props:videoType)
{
    const router = useRouter();

    return(
        <div className="m-2 cursor-pointer" onClick={() => router.push("/video/1")}>
            <img   src={props.thumbnail} className="rounded-xl"></img>
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-2">
                    <img   src={props.authorImage} className="rounded"></img>
                </div>
                <div className="col-span-10 text-sm pl-2">
                    <div>{props.title}</div> 
                    <div className="col-span-10 text-gray-500 text-xs">{props.author}</div> 
                    <div className="col-span-10 text-gray-500 text-xs">{props.views} | {props.timestamp}</div> 
                </div>

            </div>
        </div>
    )
}

export default VideoCard;




