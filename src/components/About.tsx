import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutImage1 from "@/assets/about-1.jpg";
import aboutImage2 from "@/assets/about-2.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey of passion, flavor, and unforgettable moments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src={aboutImage1}
              alt="Restaurant interior"
              className="rounded-lg shadow-strong w-full h-[400px] object-cover hover-lift"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-lg -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-semibold text-primary mb-4">
              A Legacy of Excellence
            </h3>
            <p className="text-muted-foreground mb-4">
              For over two decades, La Belle Maison has been the epitome of fine
              dining excellence. Our commitment to using only the finest
              ingredients, coupled with innovative culinary techniques, has
              earned us a place in the hearts of food connoisseurs.
            </p>
            <p className="text-muted-foreground">
              Every dish tells a story, every flavor a memory. Our chefs craft
              each plate with passion and precision, ensuring that your dining
              experience is nothing short of extraordinary.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="order-2 md:order-1"
          >
            <h3 className="text-3xl font-semibold text-primary mb-4">
              Crafted with Passion
            </h3>
            <p className="text-muted-foreground mb-4">
              Our culinary team, led by award-winning chefs, brings together
              traditional techniques and modern innovation. We source locally
              whenever possible, supporting our community while delivering the
              freshest flavors to your table.
            </p>
            <p className="text-muted-foreground">
              From intimate dinners to grand celebrations, we create moments
              that last a lifetime. Welcome to La Belle Maison, where every meal
              is an experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="relative order-1 md:order-2"
          >
            <img
              src={aboutImage2}
              alt="Chef preparing food"
              className="rounded-lg shadow-strong w-full h-[400px] object-cover hover-lift"
            />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/20 rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
