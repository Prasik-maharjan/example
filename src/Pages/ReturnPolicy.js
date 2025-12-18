export default function ReturnPolicy() {
  return (
    <div className="">
      <div className="relative w-full h-96">
        <img
          src="image.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30">
          <h1 className="text-4xl font-bold mb-2">Return Policy</h1>
          <p className="text-lg">Home / Returns</p>
        </div>
      </div>
{/*  */}
      <div className="flex justify-between  m-16">
        <div>
          <h1 className="text-2xl">Return Poilcy</h1>
        </div>
        <div>
          <h1 className="text-xl">Follow Us</h1>
          <p className="py-3">
            <b>Subscription</b> Subscribe to
            <br /> our newsletter and receive a<br /> selection of cool articles
            <br /> every weeks
          </p>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Enter your email"
              className="border-[1px] rounded-md p-2"
            />
            <button className="px-4 py-2 bg-black text-white rounded-md mt-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
