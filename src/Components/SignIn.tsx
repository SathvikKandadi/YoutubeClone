export default function SignIn()
{
    return(
        <button>
            <div className="border border-gray-500 rounded-3xl p-2 m-2 flex flex-row justify-between hover:bg-sky-950">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#007bff" className="w-6 h-6 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-blue-500 font-bold text-sm mr-1 mt-3/5">Sign in</div>
            </div>
        </button>
    )
}