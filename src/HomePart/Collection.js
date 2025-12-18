export default function Collection() {
    return(
        <div>
        <h1 className="text-3xl font-bold text-center">
          Take Memories with you
        </h1>
        <p className="text-center mt-2">
          Design your own bracelet or Mala with our easy bead customization
          tool. Pick the beads that speak to you.
        </p>
        

        {/* IMAGE */}
        <div className="grid grid-cols-5 gap-4 mt-10">
          <img
            src="https://lumbinihandicraft.infinitydevelopmententerprise.com/storage/products/01K4M50ZX2BVCJWNY0GNDYB1HG.png"
            alt=""
            className="w-full h-48 object-cover rounded-xl"
          />
          <img
            src="https://lumbinihandicraft.infinitydevelopmententerprise.com/storage/products/01K4M4XCJQ604S8D9JB1G2XQYT.jpg"
            alt=""
            className="w-full h-48 object-cover rounded-xl"
          />
          <img
            src="https://lumbinihandicraft.infinitydevelopmententerprise.com/storage/products/01K4M57SKBJ9ERCH0VGZPJ9HAK.jpg"
            alt=""
            className="w-full h-48 object-cover rounded-xl"
          />
          <img
            src="https://lumbinihandicraft.infinitydevelopmententerprise.com/storage/products/01K4M5R3M1XXXYB56T12J9EX4G.jpg"
            alt=""
            className="w-full h-48 object-cover rounded-xl"
          />
          <img
            src="https://lumbinihandicraft.infinitydevelopmententerprise.com/storage/products/01K4M67J5PA4TVKWDSRCREX78R.jpg"
            alt=""
            className="w-full h-48 object-cover rounded-xl"
          />
        </div>

        <div className="flex justify-center mt-6">
          <button className="px-6 py-2 bg-black text-white rounded-full">
            Explore Collection
          </button>
        </div>
        </div>
    );
}
