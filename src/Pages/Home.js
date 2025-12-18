import Collection from "../HomePart/Collection";
import Product from "../HomePart/Product";
import About from "../HomePart/About";
import Beads from "../HomePart/Beads";


export default function Home() {
  return (
    <div className="bg-white w-full pt-10 max-w-6xl mx-10 px-6 py-16">
      <Collection />
      <Product />
      <About />
      <Beads/>
    </div>
  );
}
