import React from 'react'
import { Star } from 'lucide-react'

const CustomerReviews = () => {
    const reviews = [
        {
            id: 1,
            title: "Pizza Beef",
            review: "Absolutely delicious pizza with a crispy crust and juicy beef toppings.",
            user: "jehan",
            date: "May 4, 2026",
            star: 5,
        },
        {
            id: 2,
            title: "Chicken Burger",
            review: "The burger was fresh, flavorful, and perfectly cooked.",
            user: "nimal",
            date: "May 5, 2026",
            star: 4,
        },
        {
            id: 3,
            title: "Seafood Pasta",
            review: "Creamy pasta with a generous amount of seafood. Highly recommended.",
            user: "kasun",
            date: "May 6, 2026",
            star: 5,
        },
        {
            id: 4,
            title: "Chocolate Cake",
            review: "Soft, rich, and full of chocolate flavor. Perfect dessert.",
            user: "sahan",
            date: "May 7, 2026",
            star: 4,
        }
    ];

    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-black text-black">
                        Customer Reviews
                    </h1>
                    <p className="text-gray-500 mt-1">
                        What our customers say about our food
                    </p>
                </div>

                <div className="hidden md:flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-2xl font-semibold">
                    <Star size={18} fill="currentColor" />
                    4.9 Rating
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {
                    reviews.map((data) => {
                        return (
                            <div
                                key={data.id}
                                className="group bg-white border border-orange-100 rounded-3xl p-6 shadow-sm hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-5">
                                    <div>
                                        <h1 className="text-2xl font-bold text-black">
                                            {data.title}
                                        </h1>

                                        <div className="flex items-center gap-1 mt-2">
                                            {
                                                [...Array(data.star)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={18}
                                                        className="text-orange-500 fill-orange-500"
                                                    />
                                                ))
                                            }
                                        </div>
                                    </div>

                                    <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center text-xl font-bold uppercase shadow-lg">
                                        {data.user.charAt(0)}
                                    </div>
                                </div>

                                <p className="text-gray-600 leading-7 text-[15px]">
                                    {data.review}
                                </p>

                                <div className="mt-6 flex items-center justify-between">
                                    <div>
                                        <h2 className="font-semibold text-black capitalize">
                                            {data.user}
                                        </h2>
                                        <p className="text-sm text-gray-400">
                                            {data.date}
                                        </p>
                                    </div>

                                    <div className="bg-orange-50 text-orange-600 px-4 py-2 rounded-xl text-sm font-semibold">
                                        Verified Review
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CustomerReviews