const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto py-8">
      {Array(8)
        .fill("")
        .map((_, i) => (
          <div
            key={i}
            className="w-[240px] h-[270px] bg-gray-100 rounded-lg shadow p-4 flex flex-col items-center animate-pulse"
          >
            <div className="w-full h-36 bg-gray-200 rounded mb-3" />
            <div className="h-5 w-3/4 bg-gray-200 rounded mb-2" />
            <div className="h-4 w-2/3 bg-gray-200 rounded mb-2" />
            <div className="h-4 w-1/2 bg-gray-200 rounded mb-2" />
            <div className="h-3 w-1/3 bg-gray-200 rounded" />
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
