import { SlidersHorizontal } from "lucide-react";

const FilterOptions = () => {
  return (
    <aside className="w-72 p-4 border rounded-lg bg-white shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">Filter Options</h2>
        <SlidersHorizontal className="w-5 h-5 text-gray-500" />
      </div>

      {/* Profile Section */}
      <div className="mb-4">
        <h3 className="font-medium text-gray-700">Profile</h3>
        <div className="bg-blue-500 text-white px-3 py-1 rounded mt-2 flex items-center justify-between w-fit">
          Engineering <span className="ml-2 cursor-pointer text-xs">✖</span>
        </div>
      </div>

      {/* Job Category */}
      <div className="mb-4">
        <h3 className="font-medium text-gray-700">Job Category</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4" /> <span>Full-time</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4" /> <span>Part-time</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4" /> <span>Internships</span>
          </label>
        </div>
      </div>

      {/* Location */}
      <div className="mb-4">
        <h3 className="font-medium text-gray-700">Location</h3>
        <input type="text" placeholder="e.g. Delhi" className="border rounded w-full px-2 py-1 mt-2" />
        <div className="space-y-2 mt-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4" /> <span>Work from home</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4" /> <span>On-site</span>
          </label>
        </div>
      </div>

      {/* Salary Range */}
      <div className="mb-4">
        <h3 className="font-medium text-gray-700">Salary Range (₹)</h3>
        <input type="range" className="w-full mt-2" />
        <div className="flex justify-between text-sm text-gray-500 mt-1">
          <span>0</span><span>2K</span><span>4K</span><span>6K</span><span>8K</span><span>10K</span>
        </div>
      </div>

      {/* Duration */}
      <div className="mb-4">
        <h3 className="font-medium text-gray-700">Duration</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4" /> <span>1 month</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4" /> <span>6 months</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4" /> <span>More</span>
          </label>
        </div>
      </div>

      {/* Clear All Button */}
      <button className="text-blue-600 text-sm hover:underline">Clear All</button>
    </aside>
  );
};

export default FilterOptions;
