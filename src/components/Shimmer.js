const Shimmer = () => {
    return (
        <div className="lg:px-40 md:px-20 px-10 relative top-24 mb-28 flex flex-wrap">
            {Array(10).fill(" ").map((x,index)=>(
            <div className="w-[22%] mb-4 rounded-2xl hover:scale-95 transition-all">
                <div className="w-full h-48 rounded-2xl object-fill">
                    <img className="w-full h-full rounded-2xl bg-[#aaa]" alt="" />
                </div>
                <div className="p-2 w-full">
                    <h3 className="text-[#02060cbf] w-full h-6 mb-2 bg-[#aaa]"></h3>
                    <h4 className="text-[#02060cbf] mb-2 h-5 bg-[#aaa] w-[30%]"></h4>
                    <p className="text-[#02060c99] mb-2 h-5 bg-[#aaa] w-full"></p>
                    <span className="text-[#02060c99] h-5 bg-[#aaa] w-full"></span>
                </div>
            </div>))}
        </div>
    )
  }
  
  export default Shimmer;