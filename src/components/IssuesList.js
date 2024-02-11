import { useState } from "react";

const IssuesList = ({info}) => {

  const [showList,setShowList]=useState(false);
  
  const handleClick=()=>{
    setShowList(!showList);
  }
  
  const {title,hyperLinkText,options,description}=info;  

  return (
    <div className="w-full border-b border-[#d4d5d9]">
        <button onClick={handleClick} className="w-full text-[#3d4152] flex gap-2 justify-between items-center text-left py-6 hover:text-orange-600">
            <span className="text-lg">{title}</span>
            <span>🔽</span>
        </button>
        {showList &&
            <div>
                <h5 className="text-[#fc8019] mr-5 cursor-pointer pb-5 inline-block font-semibold">{hyperLinkText}</h5>
                {options.length>0 ?
                    <div className="pb-7">
                    <button className="text-[#fc8019] h-10 border border-[#fc8019] px-4 font-bold text-sm">SEND AN EMAIL</button>
                    <p className="mt-1 text-[#93959f] text-xs">{options[0]?.waitTime}</p>
                    </div>:
                    <div className="text-[#686b78] text-sm pr-12 pb-7 whitespace-pre-wrap">
                        {description}
                    </div>
                }
            </div>
        }
    </div>
  )
}

export default IssuesList;