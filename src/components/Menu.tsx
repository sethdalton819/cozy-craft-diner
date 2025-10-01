import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import foodImage1 from "@/assets/food-1.jpg";
import foodImage2 from "@/assets/food-2.jpg";
import foodImage3 from "@/assets/food-3.jpg";
import foodImage4 from "@/assets/food-4.jpg";
import foodImage5 from "@/assets/food-5.jpg";
import foodImage6 from "@/assets/food-6.jpg";

const menuCategories = [
  {
    title: "Starters",
    items: [
      {
        name: "Truffle Carpaccio",
        description: "Thinly sliced beef with truffle oil and parmesan",
        price: "$28",
        image: foodImage1,
      },
      {
        name: "Lobster Bisque",
        description: "Rich cream soup with fresh herbs",
        price: "$24",
        image: foodImage6,
      },
    ],
  },
  {
    title: "Main Dishes",
    items: [
      {
        name: "Wagyu Steak",
        description: "Premium cut with seasonal vegetables",
        price: "$85",
        image: foodImage2,
      },
      {
        name: "Seafood Linguine",
        description: "Fresh pasta with mixed seafood",
        price: "$42",
        image: foodImage4,
      },
    ],
  },
  {
    title: "Desserts",
    items: [
      {
        name: "Chocolate Soufflé",
        description: "Dark chocolate with vanilla ice cream",
        price: "$18",
        image: foodImage3,
      },
    ],
  },
  {
    title: "Drinks",
    items: [
      {
        name: "Signature Cocktail",
        description: "House special with premium spirits",
        price: "$16",
        image: foodImage5,
      },
    ],
  },
];

const Menu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="menu" className="py-24 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Menu
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of culinary masterpieces
          </p>
        </motion.div>

        <div className="grid gap-12">
          {menuCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-3xl font-semibold text-primary mb-8 text-center">
                {category.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card
                    key={item.name}
                    className="overflow-hidden group hover:shadow-gold transition-all duration-300 cursor-pointer bg-card border-border"
                  >
                    <div className="flex flex-col sm:flex-row">
                      <div className="relative sm:w-48 h-48 sm:h-auto overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-xl font-semibold text-primary">
                            {item.name}
                          </h4>
                          <span className="text-xl font-bold text-gold">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
