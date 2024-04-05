export default function Signin()
{
    return(
        <div className="h-screen flex items-center justify-center bg-teal-50">

            <div className="h-1/2 w-1/4 flex md:bg-white md:shadow-2xl shadow-gray-400 rounded-xl mt-[6%] p-8 min-w-96 flex-col bg-teal-50">

                <div className="h-1/6 flex flex-wrap">

                    <h1 className="text-3xl font-semibold">Sign In</h1>
                    <br/>
                    <p className="text-xs font-medium mt-[1%]">Connect to grants and microloans the easy way.</p>
                    
                </div>
                
                <div className="h-1/2 flex gap-[1%] flex-wrap mt-[10%]">
                    <input type="text" placeholder="Email" className="h-[35%] w-full rounded-md border-green-600 border-solid border-2 p-2 focus:outline-none focus:ring-0 focus:border-green-800"/>
                    <br/>
                    <input type="password" placeholder="Password" className="h-[35%] w-full rounded-md border-green-600 border-solid border-2 p-2 focus:outline-none focus:ring-0 focus:border-green-800"/>
                    <a href="hi" className="mt-[2%] font-semibold text-green-600 text-sm hover:text-green-800 hover:underline">Forgot your password?</a>
                </div>
                

                <button type="submit" className=" bg-green-600 text-white h-[20%] mt-[8%] max-h-14 rounded-full hover:bg-green-800 duration-200">Sign In</button>
                
                

            </div>

        </div>
    )
}