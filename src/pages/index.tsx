import Navbar from '../components/Navbar';
import FilterOptions from "@/components/FilterOptions";
import JobCard from "@/components/JobCard";
import Leaderboard from "@/components/Leaderboard";



export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex">
        <FilterOptions />
        <main className="flex-1 p-6 space-y-4">
          <JobCard
            title="Digital Marketing"
            company="Tiyana Corporation"
            location="Mumbai"
            duration="3 months"
            salary="15,000 - 20,000"
            posted="3 weeks"
          />
          <JobCard
            title="Digital Marketing"
            company="Tiyana Corporation"
            location="Mumbai"
            duration="3 months"
            salary="15,000 - 20,000"
            posted="Just now"
          />
           <JobCard
            title="Digital Marketing"
            company="Tiyana Corporation"
            location="Mumbai"
            duration="3 months"
            salary="15,000 - 20,000"
            posted="Just now"
          />
        </main>
        <Leaderboard />
      </div>
    </div>
  );
}
