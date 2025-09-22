 const Contact = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow p-8 mt-10">
      <h1 className="font-bold text-3xl mb-6 text-blue-700 text-center">Contact Us</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Name"
        />
        <input
          type="text"
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Message"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold rounded-lg p-3 mt-2 hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;