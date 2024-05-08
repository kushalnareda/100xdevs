export const RevenueCard =({
    title,
    showWarning,
    orderCount,
    amount
}) => {
    return <div className="bg-white rounded shadow-md p-4">
        <div className="text-gray-700">
            <div className="flex ml-1 jutify-center">
                <div>{title}</div>
                <div className="ml-0.5 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-6 stroke-1.5 hover:stroke-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="flex justify-between">
            
            <div className="font-semibold text-2xl pt-2 jutify-center">
                ₹{amount}
            </div>
            {orderCount ? <div className="flex cursor-pointer underline flex flex-col justify-center ">
                <div className="flex jutify-center">
                    <div className="text-blue-400 underline font-medium">
                    {orderCount} order(s)
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-6 stroke-blue-400 hover:stroke-2" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div> :null}
            
        </div>
    </div>
}