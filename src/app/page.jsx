import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">

      {/* hero secction */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24 relative overflow-hidden">


        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] bg-green-100 rounded-full opacity-50 blur-3xl" />
          <div className="absolute bottom-[-60px] right-[-60px] w-[300px] h-[300px] bg-emerald-100 rounded-full opacity-60 blur-2xl" />
        </div>


        <span className="mb-6 inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full">
          🌿 Sustainable Shopping
        </span>


        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight max-w-3xl">
          Shop Smart.{" "}
          <span className="text-green-600">Save More.</span>{" "}
          Live Better.
        </h1>

 
        <p className="mt-6 text-gray-500 text-lg sm:text-xl max-w-xl leading-relaxed">
          Discover curated products that are good for you and the planet. Every purchase saves you money while making a difference.
        </p>


        <div className="mt-10 flex flex-col sm:flex-row items-center">
          <Link
            href="/cart"
            className="flex items-center gap-2 border-2 border-gray-200 hover:border-green-400 hover:text-green-600 transition-all duration-150 text-gray-600 font-semibold px-8 py-4 rounded-2xl text-base"
          >
            🛒 View Your Cart
          </Link>
        </div>


        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 font-medium">
          <span className="flex items-center gap-2">✅ Free Delivery</span>
          <span className="flex items-center gap-2">♻️ Eco Friendly</span>
          <span className="flex items-center gap-2">🔒 Secure Checkout</span>
          <span className="flex items-center gap-2">💰 Best Prices</span>
        </div>
      </section>

      
      <div className="border-t border-gray-100 bg-green-50 px-6 py-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: "10K+", label: "Happy Customers" },
            { value: "500+", label: "Products" },
            { value: "₹2M+", label: "Total Savings" },
            { value: "4.9★", label: "Avg Rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-extrabold text-green-700">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}