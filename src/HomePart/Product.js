import { products } from "../Data";


  function Products({ product }) {
    return (
      <div className="hover:shadow-xl">
        <div>
          <img
            className="w-full h-40 object-cover rounded-lg"
            src={product.image}
            alt=""
          />
        </div>
        <div className="flex flex-col items-center p-4">
          <h1 className="text-xl">{product.product}</h1>
          <p className="font-semibold">NPR {product.pr}</p>
          <div className="flex items-center text-yellow-500">★★★★★</div>
        </div>
      </div>
    );
  }
export default function Product() {
  return (
    <div className="mt-16">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">Products</h1>
        <button className="px-6 py-2 bg-black text-white rounded-full">View More</button>
      </div>
      <div className="grid grid-cols-5 gap-5 mt-5">
        {products.map((p, i) => (
          <Products key={i} product={p} />
        ))}
      </div>
    </div>
  );
}
