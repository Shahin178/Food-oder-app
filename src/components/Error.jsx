import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-5xl font-bold text-red-500 mb-2">OOPS!!</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Something went wrong!
        </h2>
        <h3 className="text-lg text-gray-500">
          {err.status}: {err.statusText}
        </h3>
      </div>
    </div>
  );
};

export default Error;
