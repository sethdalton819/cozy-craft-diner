import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import foodImage1 from "@/assets/food-1.jpg";
import foodImage2 from "@/assets/food-2.jpg";
import foodImage3 from "@/assets/food-3.jpg";
import foodImage4 from "@/assets/food-4.jpg";
import foodImage5 from "@/assets/food-5.jpg";
import foodImage6 from "@/assets/food-6.jpg";
import aboutImage1 from "@/assets/about-1.jpg";
import aboutImage2 from "@/assets/about-2.jpg";

const galleryImages = [
  { src: foodImage1, alt: "Gourmet appetizer" },
  { src: foodImage2, alt: "Premium steak" },
  { src: aboutImage1, alt: "Restaurant interior" },
  { src: foodImage3, alt: "Dessert" },
  { src: foodImage5, alt: "Signature cocktail" },
  { src: aboutImage2, alt: "Chef at work" },
  { src: foodImage4, alt: "Pasta dish" },
  { src: foodImage6, alt: "Fresh salad" },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A visual journey through our culinary creations and ambiance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 border-0">
            {selectedImage !== null && (
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-auto rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
