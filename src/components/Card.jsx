import React from "react";

const Card = ({ image, name, price }) => {
  return (
    <div className="w-full mt-4 p-6 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="w-12 h-12" src={image} alt="Drink Image" />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {name}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
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
