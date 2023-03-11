import PostDetailChart from "../../../components/admin/Charts/PostDetailChart";
import Bchart from "../../../components/admin/Charts/Bchart";

function Dashboard() {
  
  return (
    <div className="w-full ">
      <div className="container mx-auto flex items-start justify-center ">
        <div className="lg:flex  md:w-full sm:w-full px-20 mx-auto items-start justify-center py-10 ">
          <PostDetailChart />
          <Bchart />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;