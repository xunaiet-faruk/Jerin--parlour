
const BookingList = () => {
    return (
        <div className="mt-20">
            <div className="group relative max-w-[350px] overflow-hidden bg-gradient-to-r from-[#cbe1f5] via-[#a6aaad] to-[#c7c9ca] px-6 py-6 text-white shadow">
                <span className="absolute left-[-40%] top-[30%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-r from-[#0064c2] via-[#49aef7] to-[#c7e0f1] duration-300 group-hover:top-[-30%] group-hover:blur-sm"></span>
                <span className="absolute right-[-40%] top-[-40%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-tr from-[#babec2] via-[#d0d2d4] to-[#c0c6c9] duration-300 group-hover:top-[40%] group-hover:blur-sm"></span>
                <div className="relative z-20 space-y-6">
                    <h1 className="text-2xl font-bold">Cookies.</h1>
                    <p> By using this website you automatically accept that we use cookies.<a href="#" className="border-b"> What for?</a></p>
                    <button className="bg-[#cfd1d3] px-6 py-2">Understood</button>
                </div>
            </div>
        </div>
    );
};

export default BookingList;