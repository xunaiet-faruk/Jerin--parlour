import AdminTotalcount from "./AdminTotalcount";
import AnalysisChart from "./AnalysisChart";




const Adminhome = () => {
    return (
        <div className="mt-9">
            <div className="flex justify-center items-center">
                <img className="w-[300px] animate-pulse" src="https://i.ibb.co/q91hL9z/image-removebg-preview-83.png" alt="" />
            </div>
            <AdminTotalcount/>    
            <AnalysisChart/>
            
        </div>
    );
};

export default Adminhome;