export default function About() {
  return (
    <div>
      <div className="  pt-16 z-0 gap-10 flex ">
        <div className="flex-1">
          <h2 className="text-3xl font-bold">Inspired By Craftsmanship</h2>
          <p className="font-semibold mt-4">Crafting with a soul</p>
          <p className="mt-3  leading-relaxed">
            Our artisans put their heart and soul into every piece they create,
            ensuring that each item is not just a product, but a work of art
            that tells a story.
          </p>
        </div>
        <div className="flex-1"></div>
        <div className="flex-1 items-center">
          <div className="w-full h-64 rounded-xl overflow-hidden relative">
            <img
              src="https://lumbinihandicraft.infinitydevelopmententerprise.com/home-collections/collection2.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <button className="absolute inset-0 m-auto w-16 h-16 bg-white/80 rounded-full flex items-center justify-center"></button>
          </div>
        </div>
      </div>

      {/* SERVICE */}
      <div className="w-100% grid grid-cols-3 justify-between ">
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div>
            <p className="text-3xl font-bold">100%</p>
            <p className="">Satisfied Customers</p>
          </div>
          <div>
            <p className="text-3xl font-bold">7k+</p>
            <p className="">Products sold</p>
          </div>
          <div>
            <p className="text-3xl font-bold">20k</p>
            <p className="">Returning Customers</p>
          </div>
          <div>
            <p className="text-3xl font-bold">100%</p>
            <p className="">Satisfaction Rate</p>
          </div>
        </div>
        <div></div>
        <div className="text-end">
          <p className="my-10">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="px-6 py-2 bg-black text-white rounded-full">
            More About Us
          </button>
        </div>
      </div>

      {/* MIDDLE PART */}
      <div className="p-10 w-full z-10 bg-black flex justify-around text-white mt-12">
        <div>
          <h1 className="font-bold">High Quality</h1>
          <p className="text-xs">high quality stuffs</p>
        </div>
        <div>
          <h1 className="font-bold">Warranty</h1>
          <p className="text-xs">Over 3 years</p>
        </div>
        <div>
          <h1 className="font-bold">Free Shipping</h1>
          <p className="text-xs">All over World</p>
        </div>
        <div>
          <h1 className="font-bold">24/7 Support</h1>
          <p className="text-xs">Customer Support</p>
        </div>
      </div>
    </div>
  );
}
