export default function Signup()
{
    return(
        <div className="h-screen lg:grid lg:grid-cols-3 flex items-center justify-center bg-teal-50 px-20">

            <div className="col-span-2 h-1/2 md:bg-white md:shadow-2xl shadow-gray-400 rounded-xl lg:p-10 md:p-5 flex flex-col max-h-[400px]">

                <div className="flex pb-5">
                    <h1 className="text-4xl font-semibold">Create An Account</h1>
                </div>

                <div className="h-3/4 grid md:grid-cols-2 md:grid-rows-3 w-full gap-x-4 gap-y-7 max-h-[300px] ">
                    <div>
                        <input type="text" placeholder="Full Name" className="h-full w-full rounded-md border-green-600 border-solid border-2 p-2 focus:outline-none focus:ring-0 focus:border-green-800 max-h-[80px]"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Email" className="h-full w-full rounded-md border-green-600 border-solid border-2 p-2 focus:outline-none focus:ring-0 focus:border-green-800 max-h-[80px]"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Phone Number (optional)" className="h-full w-full rounded-md border-green-600 border-solid border-2 p-2 focus:outline-none focus:ring-0 focus:border-green-800 max-h-[80px]"/>
                    </div>
                    <div>
                        <input type="password" placeholder="Password" className="h-full w-full rounded-md border-green-600 border-solid border-2 p-2 focus:outline-none focus:ring-0 focus:border-green-800 max-h-[80px]"/>
                    </div>
                    <div className="flex items-center">
                    <input type="checkbox" id="notifs" className="rounded-md"/>
                    <label for="notifs" className="ml-2 font-semibold text-green-600 text-md hover:text-green-800">Updates on Email/ Phone?</label>
                    </div>
                    <div className="flex items-center justify-center">
                        <button type="submit" className=" bg-green-600 text-white h-full w-full rounded-full hover:bg-green-800 duration-200 mb-4 max-h-[60px]">Sign Up</button>
                    </div>
                </div>

            </div>

        </div>
    )
}