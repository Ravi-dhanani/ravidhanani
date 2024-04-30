import React from "react";
interface IProductWishlistProps {
  isLike: number | undefined;
  setIsLike: React.Dispatch<React.SetStateAction<number>>;
  item: any;
}
export default function ProductWishlist(props: IProductWishlistProps) {
  const { isLike, item, setIsLike } = props;
  return (
    <div>
      <div className=" bg-green-700 rounded-full">
        {isLike === item?.id || isLike !== 0 ? (
          <div className="sm:p-[9px] p-[4px] items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="sm:w-6 sm:h-6 h-5 w-5"
              onClick={() => setIsLike(0)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
        ) : (
          <div className="sm:p-[9px] p-[4px] items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="sm:w-6 sm:h-6 h-5 w-5"
              onClick={() => setIsLike(item?.id)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
