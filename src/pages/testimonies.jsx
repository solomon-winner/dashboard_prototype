const Testimonies = () => {
    return (
    <div className="ml-[13rem] bg-white-100 min-h-screen">
      <div className=" max-w-5xl mx-auto p-6 ">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="bg-white rounded-lg shadow p-6 transition-transform transform hover:-translate-y-1">
            <div className="text-4xl font-bold text-blue-500 my-4" id="subscribersCount">300</div>
            <h2 className="text-base font-semibold text-gray-800">Total Testimonies</h2>

          </div>
          <div className="bg-white rounded-lg shadow p-6 transition-transform transform hover:-translate-y-1">
            <div className="text-4xl font-bold text-blue-500 my-4" id="testimoiesCount">200</div>
            <h2 className="text-base font-semibold text-gray-800">Verified of Testimonies</h2>

          </div>
          <div className="bg-white rounded-lg shadow p-6 transition-transform transform hover:-translate-y-1">
            <div className="text-4xl font-bold text-blue-500 my-4" id="testimoiesCount">90%</div>
            <h2 className="text-base font-semibold text-gray-800">Percentage of Verified Testimonies</h2>

          </div>
          {/* <div className="bg-white rounded-lg shadow p-6 transition-transform transform hover:-translate-y-1">
            <h2 className="text-xl font-semibold text-gray-800">Total Songs</h2>
            <div className="text-4xl font-bold text-blue-500 my-4" id="songCount">300</div>
          </div> */}
          {/* <div className="bg-white rounded-lg shadow p-6 transition-transform transform hover:-translate-y-1">
            <h2 className="text-xl font-semibold text-gray-800">Number of Visitors</h2>
            <div className="text-4xl font-bold text-blue-500 my-4" id="visitorCount">Loading...</div>
            <div className="chart">
            </div>
          </div> */}
          {/* <div className="bg-white rounded-lg shadow p-6 transition-transform transform hover:-translate-y-1">
            <h2 className="text-xl font-semibold text-gray-800">Subscriber Growth Rate</h2>
            <div className="text-4xl font-bold text-green-500 my-4" id="subscriberRate">Loading...</div>
            <div className="chart">
            </div>
          </div> */}
          {/* <div className="bg-white rounded-lg shadow p-6 transition-transform transform hover:-translate-y-1">
            <h2 className="text-xl font-semibold text-gray-800">Content Engagement</h2>
            <div className="text-4xl font-bold text-red-500 my-4" id="engagementRate">Loading...</div>
            <div className="chart">
            </div>
          </div> */}
         
        </div>
      </div>
    </div>
    )
}

export default Testimonies;