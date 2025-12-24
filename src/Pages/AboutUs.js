import { about } from "../Data";

function Team({ team }) {
  return (
    <div className="border-[1px] rounded-md shadow-md">
      <div>
        <img
          className="w-full h-52 object-cover rounded-lg"
          src={team.image}
          alt=""
        />
      </div>
      <div className="pr-24 p-3">
        <h1 className="text-xl">{team.employee}</h1>
        <p>{team.post}</p>
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <div className="m-16">
      {/* WELCOME */}
      <div className="grid grid-cols-3 gap-10">
        <div>
          <h1 className="text-5xl pb-3">Welcome to Lumbini Handicrafts</h1>
          <i>Crafting Tradition, Inspiring the Future</i>
          <p className="pt-3">
            At Lumbini Handicrafts, we celebrate Nepal’s heritage through
            authentic handmade products. Each item tells a story — a story of
            culture, creativity, and craftsmanship passed down for generations.
            Our mission is to empower local artisans, promote sustainable
            livelihoods, and share Nepal’s artistry with the world.
          </p>
        </div>
        <div>
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://lumbinihandicraft.infinitydevelopmententerprise.com/storage/01K7GKT0YRK2P3XR2HYJ0755CY.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-40 object-cover rounded-lg"
            src="https://lumbinihandicraft.infinitydevelopmententerprise.com/home-collections/collection2.jpg "
            alt=""
          />
          <p>
            At Lumbini Handicrafts, we celebrate Nepal’s heritage through
            authentic handmade products. Each item tells a story — a story of
            culture, creativity, and craftsmanship passed down for generations.
            Our mission is to empower local artisans, promote sustainable
            livelihoods, and share Nepal’s artistry with the world.
          </p>
        </div>
      </div>

      {/* SERVICE */}
      <div className="flex gap-20 my-16">
        <div>
          <div>
            <p className="text-3xl font-semi-bold">100%</p>
            <p className="">Satisfied Customers</p>
          </div>
          <div>
            <p className="text-3xl font-semi-bold">70k+</p>
            <p className="">Products sold</p>
          </div>
        </div>
        <div>
          <p className="text-3xl font-semi-bold">20k</p>
          <p className="">Returning Customers</p>
        </div>
      </div>

      {/* VISION AND ISSION */}
      <div>
        <div>
          <h1 className="text-2xl text-center">Our Vision and Mission</h1>
        </div>
        <div className="grid grid-cols-2 gap-10 my-10">
          <div>
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://lumbinihandicraft.infinitydevelopmententerprise.com/storage/01K7GKT0YZG2MP49QTGFZ5SRK4.jpg"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-xl">Our Mission</h1>
            <p>
              Our mission is to empower local artisans and preserve their
              traditional craftsmanship by connecting their handmade creations
              to the global market. We are dedicated to supporting artisan
              communities by offering fair opportunities, promoting ethical
              production, and ensuring that their art and culture continue to
              thrive in a modern world. Each product we share is a reflection of
              our commitment to sustainability, authenticity, and creativity. We
              carefully curate and promote items that are not only beautiful but
              also meaningful — products that carry the warmth of human effort
              and the essence of cultural heritage.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 my-10">
          <div>
            <h1 className="text-xl">Our Vission</h1>
            <p>
              Our vision is to create a world where the art of handmade
              craftsmanship is celebrated, valued, and preserved for future
              generations. We dream of becoming a global destination for
              authentic, handcrafted products that reflect the soul of
              tradition, culture, and human creativity. In a world dominated by
              mass production, we aspire to keep the beauty of individuality
              alive — where every creation carries a story, every detail
              reflects devotion, and every purchase supports a dream. Through
              our platform, we aim to bridge the gap between skilled artisans
              and conscious consumers, inspiring appreciation for the artistry,
              patience, and love poured into every handcrafted masterpiece. We
              believe that true luxury lies not in perfection, but in the human
              touch that gives each piece its character and heart.
            </p>
          </div>
          <div>
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://lumbinihandicraft.infinitydevelopmententerprise.com/storage/01K7GKT0YXPA3YDHVPBY2F504Q.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      

      {/* OUR TEAM */}
      <div className="flex gap-7">
        {about.map((a, i) => (
          <Team key={i} team={a} />
        ))}
      </div>
    </div>
  );
}
