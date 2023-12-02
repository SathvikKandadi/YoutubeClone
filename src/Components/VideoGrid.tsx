import VideoCard from "./VideoCard"

const videos = [
    {
        thumbnail:"/thumbnail1.png",
        authorImage:"/author1.png",
        title:"LEO - Naa Ready Song Video | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander",
        author:"Sony Music South",
        views:"15M",
        timestamp:"11 days ago"
    },
    {
        thumbnail:"/thumbnail1.png",
        authorImage:"/author1.png",
        title:"LEO - Naa Ready Song Video | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander",
        author:"Sony Music South",
        views:"15M",
        timestamp:"11 days ago"
    },
    {
        thumbnail:"/thumbnail1.png",
        authorImage:"/author1.png",
        title:"LEO - Naa Ready Song Video | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander",
        author:"Sony Music South",
        views:"15M",
        timestamp:"11 days ago"
    },
    {
        thumbnail:"/thumbnail1.png",
        authorImage:"/author1.png",
        title:"LEO - Naa Ready Song Video | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander",
        author:"Sony Music South",
        views:"15M",
        timestamp:"11 days ago"
    },
    {
        thumbnail:"/thumbnail1.png",
        authorImage:"/author1.png",
        title:"LEO - Naa Ready Song Video | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander",
        author:"Sony Music South",
        views:"15M",
        timestamp:"11 days ago"
    },

]


export default function VideoGrid()
{
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {videos.map((video) => (
                <VideoCard thumbnail={video.thumbnail} authorImage={video.authorImage} title={video.title} author={video.author} views={video.views} timestamp={video.timestamp}></VideoCard>
            ))}
        </div>
       
    )
}