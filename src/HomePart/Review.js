import { review } from "../Data";


function ReviewCard({ review }) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md border-[1px]">
        <h1 className="font-semibold text-xl">John</h1>
        <div className="flex items-center text-yellow-500">★★★★★</div>
        <p className="text-lg py-4">
          The products are authentic and beautifully made. Will buy again.
        </p>
        <span className="text-sm">2025-09-09</span>
      </div>
    );
  }

export default function Review(){
    return(
        <div>
        <div className=" max-w-6xl mx-auto px-6 py-16">
        <div className="flex">
          <h1 className="text-xl text-center justify-center ">
            Outstanding Reviews
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-6">
          {review.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>
        </div>
    );
}