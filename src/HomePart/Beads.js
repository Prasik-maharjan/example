import { experties } from "../Data";



 function ProductCard({ data }) {
    return (
      <div className="bg-white  rounded-xl">
        <div className="relative">
          <img
            src={data.image}
            className="w-full h-40 object-cover rounded-lg"
            alt=""
          />
          <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-md">
            Popular
          </span>
        </div>

        <h3 className="mt-3 font-semibold">{data.name}</h3>
        <div className="flex items-center text-yellow-500">★★★★★</div>
        <p className="text-sm ">NPR {data.price}</p>
      </div>
    );
  }

export default function Beads() {
    return(
        <div>
            <div className="bg-white max-w-6xl mx-auto px-6 py-16 flex gap-10">
        <div className="flex-1">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src="https://lumbinihandicraft.infinitydevelopmententerprise.com/storage/01K68AMC3QX9DRQP2YAY77WR4B.jpg"
            alt=""
          />
        </div>
        <div className="flex-1 my-32">
          <h1 className="text-3xl ">Our beads collection</h1>
          <button className="px-6 py-2 bg-black text-white rounded-full">
            View More
          </button>
        </div>
      </div>
      <div>
        <div className="bg-white max-w-6xl mx-auto px-6 py-16 flex gap-10">
                  <div className="flex-1">
                    <img
                      src="https://lumbinihandicraft.infinitydevelopmententerprise.com/home-collections/collection3.jpg"
                      alt=""
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
        
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-6">
                      Featured Beads Collection
                    </h2>
        
                    {/* PRODUCT GRID */}
                    <div className="grid grid-cols-2 gap-6">
                      {experties.map((e, i) => (
                        <ProductCard key={i} data={e} />
                      ))}
                    </div>
        
                   
                    <div className="mt-6">
                      <button className="px-6 py-3 bg-black text-white rounded-full">
                        View More
                      </button>
                    </div>
                  </div>
                </div>
      </div>
        </div>
    );
}