import VideoCardHorizontal from "@/Components/VideoCardHorizontal";

export default function Search()
{

    const video = {
        thumbnail:"/thumbnail1.png",
        authorImage:"/author1.png",
        title:"LEO - Naa Ready Song Video | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander",
        author:"Sony Music South",
        views:"15M",
        timestamp:"11 days ago"
    }
    
    return(
        <VideoCardHorizontal thumbnail={video.thumbnail} authorImage={video.authorImage} title={video.title} author={video.author} views={video.views} timestamp={video.timestamp}></VideoCardHorizontal>
    )
}