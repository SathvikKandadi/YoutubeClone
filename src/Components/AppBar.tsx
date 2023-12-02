import SearchBar from "./SearchBar";
import SignIn from "./SignIn";

export default function AppBar()
{
    return(
        <div className="flex flex-row justify-between">
            <div className="m-2 hover:cursor-pointer"><img className="w-1/2" src="/logo.png"></img></div>
            <div >
                <SearchBar></SearchBar>
            </div>
            <div> <SignIn></SignIn></div>
        </div>
    )
}