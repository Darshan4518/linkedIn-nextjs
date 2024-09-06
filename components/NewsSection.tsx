import { AlertCircleIcon } from "lucide-react";

interface NEWS_ITEMS {
  heading: string;
  timeAndreads: string;
}

const NewsSection = () => {
  const newsItems: NEWS_ITEMS[] = [
    {
      heading: "India's Space Mission Success",
      timeAndreads: "4h ago - 973 readers",
    },
    {
      heading: "Economic Growth Forecast",
      timeAndreads: "4h ago - 210 readers",
    },
    {
      heading: "Monsoon Rains Cause Flooding",
      timeAndreads: "4h ago - 713 readers",
    },
    {
      heading: "New Educational Policies Announced",
      timeAndreads: "4h ago - 448 readers",
    },
    {
      heading: "India's Trade Relations with the U.S.",
      timeAndreads: "4h ago - 385 readers",
    },
  ];
  return (
    <div className=" hidden md:block  bg-white dark:bg-gray-800 p-3 my-3 sm:p-5 rounded-lg shadow-md h-fit">
      <div className=" flex justify-between items-center my-2">
        <h3 className=" font-bold ">LinkedIn News</h3>
        <AlertCircleIcon className=" w-5 h-5" />
      </div>
      {newsItems?.map((news, ind: number) => {
        return (
          <div key={ind} className=" my-3">
            <h3 className=" font-semibold my-1">{news.heading}</h3>
            <p className=" font-semibold text-gray-500 text-sm">
              {news.timeAndreads}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default NewsSection;
