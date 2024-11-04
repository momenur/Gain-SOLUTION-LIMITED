type TSearchProps = {
  placeholder?: string;
  hidden?: string;
};

const SearchFiled = ({ placeholder }: TSearchProps) => {
  return (
    <div className="w-full">
      <div className="relative w-full ">
        <div className="absolute inset-y-0 left-0 flex items-center w-full pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="search"
          className="block w-full px-4 py-2 pl-10 text-gray-800 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 "
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
};

export default SearchFiled;
