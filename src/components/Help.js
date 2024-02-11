import useHelp from "../hooks/useHelp";
import { Link } from "react-router-dom";
import IssuesList from "./IssuesList";
import { useState } from "react";
import useSupport from "../hooks/useSupport";

const Help = () => {
  const [query, setQuery] = useState("");

  const support = useSupport();
  const issue = useHelp(query);

  const issues = (type) => {
    setQuery(type);
  };

  return issue.length === 0 ? null : (
    <div className="w-full px-28 py-8 relative top-20 mb-20 bg-[#37718e]">
      <h2 className="text-white font-bold text-3xl mb-2">Help & Support</h2>
      <p className="text-white text-sm">
        Let's take a step ahead and help you better.
      </p>
      <div className="w-full bg-white mt-8 flex p-5">
        <div className="w-2/12 bg-[#edf1f7]">
          <ul className="">
            {support?.data?.map((x, i) => (
              <Link
                key={x.title}
                onClick={() => {
                  issues(x.type);
                }}
              >
                <li
                  className={`ml-5 py-6 px-5 font-bold text-[#535665] cursor-pointer`}
                >
                  {x.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="w-10/12 min-h-[80vh] pt-9 pl-12 bg-white">
          <div>
            {issue?.data?.map((x) => (
              <IssuesList key={x.id} info={x} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
