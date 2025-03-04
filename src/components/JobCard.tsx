interface JobCardProps {
  title: string;
  company: string;
  location: string;
  duration: string;
  salary: string;
  posted: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, company, location, duration, salary, posted }) => {
  return (
    <div className="p-4 border rounded-lg shadow bg-white flex justify-between items-start">
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600">{company} <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">Actively Hiring</span></p>
        <p className="text-gray-500">{location} • {duration} • ₹{salary}/month</p>
        <p className="text-gray-400">{posted} ago • Internship with job offer</p>
        <div className="mt-2 flex space-x-4">
          <button className="bg-blue-500 text-white px-3 py-1 rounded">Apply Now</button>
          <button className="text-blue-600">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
