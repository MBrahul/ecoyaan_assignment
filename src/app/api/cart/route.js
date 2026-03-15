import { NextResponse } from "next/server";

export async function GET() {

    const products = [
        {
            product_id: 101,
            product_name: "Advance Teeth Whitening Serum (30 ml)",
            product_price: 299,
            discount: 10,
            quantity: 2,
            image: "https://prod-cdn.ecoyaan.com/cdn/seller-docs/66/product/2474/images/pi/2474-0a92efab-1770969703.png",
            desc: `Dull teeth? Not today! Our Teeth Whitening Serum is your secret weapon for an instantly brighter smile. Whether it's an exciting date, an important meeting, or just a "feeling yourself" day, this serum delivers visible results fast.`
        },
        {
            product_id: 102,
            product_name: "Vitamin C Face Brightening Serum (30 ml)",
            product_price: 449,
            discount: 15,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
            desc: `Unlock your glow with our Vitamin C Brightening Serum. Packed with stabilized ascorbic acid and niacinamide, this lightweight formula fades dark spots, evens skin tone, and leaves your skin looking radiant within weeks of regular use.`
        },
        {
            product_id: 104,
            product_name: "Charcoal Deep Cleanse Face Wash (100 ml)",
            product_price: 199,
            discount: 5,
            quantity: 3,
            image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop",
            desc: `Activated charcoal works like a magnet to pull out dirt, oil, and toxins from deep within your pores. Our Charcoal Face Wash leaves your skin feeling squeaky clean, fresh, and balanced without stripping its natural moisture barrier.`
        },
        {
            product_id: 105,
            product_name: "Retinol Anti-Aging Night Cream (50 g)",
            product_price: 799,
            discount: 25,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop",
            desc: `Turn back the clock while you sleep. Our Retinol Night Cream works overnight to reduce fine lines, wrinkles, and uneven texture. Enriched with shea butter and peptides, wake up to visibly firmer, smoother, and more youthful-looking skin.`
        },
        {
            product_id: 106,
            product_name: "SPF 50 Mineral Sunscreen Lotion (75 ml)",
            product_price: 349,
            discount: 12,
            quantity: 2,
            image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=400&h=400&fit=crop",
            desc: `Protect your skin from UVA and UVB rays with our lightweight SPF 50 Mineral Sunscreen. Non-greasy, non-comedogenic, and reef-safe, it blends invisibly into all skin tones. Your daily defense against sun damage, hyperpigmentation, and premature aging.`
        },
        {
            product_id: 107,
            product_name: "Rose Water Hydrating Face Toner (100 ml)",
            product_price: 249,
            discount: 8,
            quantity: 2,
            image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=400&fit=crop",
            desc: `Pure Bulgarian rose water meets modern skincare in our calming face toner. It tightens pores, balances your skin's pH, and preps your face for better serum absorption. A refreshing mist that feels like a bouquet of roses on your skin every single morning.`
        },
        {
            product_id: 108,
            product_name: "Niacinamide 10% Pore Minimizing Serum (30 ml)",
            product_price: 499,
            discount: 18,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
            desc: `Visibly minimize pores, control excess sebum, and fade blemishes with our dermatologist-recommended Niacinamide 10% Serum. Formulated with zinc PCA to regulate oil production, this serum is your go-to solution for a shine-free, glass-skin finish.`
        }
    ]

    const totalSavings = products.reduce((accu, curr) => {
        return accu + Math.floor((curr.product_price * curr.discount) / 100);
    }, 0);
    const subTotal = products.reduce((accu, curr) => {
        return accu + curr.product_price - Math.floor((curr?.product_price * curr?.discount) / 100);
    }, 0);


    const cart = {
        totalProducts: products.length,
        subTotal,
        totalSavings,
        products,
        shippingFee:40
    };

    return NextResponse.json(cart);
}

