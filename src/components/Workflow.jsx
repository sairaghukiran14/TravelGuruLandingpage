import { CheckCircle2 } from "lucide-react";
import travelImg from "../assets/travel.jpg"; // Replace with a relevant travel image
// import { checklistItems } from "../constants";

const travelChecklistItems = [
  {
    title: "Plan Your Itinerary",
    description: "Easily organize destinations, activities, and travel dates in one place.",
  },
  {
    title: "Track Bookings",
    description: "Keep all your flight, hotel, and transport bookings at your fingertips.",
  },
  {
    title: "Collaborate with Friends",
    description: "Share your travel plans and coordinate seamlessly with your travel companions.",
  },
  {
    title: "Get Smart Suggestions",
    description: "Receive personalized recommendations for attractions, food, and experiences.",
  },
];

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Simplify your{" "}
        <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          travel planning.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2 flex items-center" >
          <img src={travelImg} alt="Travel Planning" className="rounded-xl"/>
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {travelChecklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
