import React from "react";

const Card = ({ image, name, price }) => {
  return (
    <div className="w-full mt-4 p-4 sm:p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-100 dark:divide-gray-700"
        >
          <li className="py-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="flex-shrink-0">
                {/* <img
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-sm"
                  src={image}
                  alt={name}
                /> */}
              </div>
              <div className="flex-1 min-w-0 text-center sm:text-left">
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  {name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Available now
                </p>
              </div>
              <div className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                {price}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
