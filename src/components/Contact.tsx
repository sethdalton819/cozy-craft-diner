import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
    },
    {
      icon: Mail,
      title: "Email",
      content: "reservations@labellemaison.com",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "123 Gourmet Street, Culinary District",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Tue-Sun: 5PM - 11PM",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reserve your table or reach out with any questions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Send us a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="bg-background border-border resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-light text-primary"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <Card
                key={info.title}
                className="p-6 flex items-start gap-4 bg-card border-border hover:shadow-soft transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">{info.title}</h4>
                  <p className="text-muted-foreground">{info.content}</p>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="rounded-lg overflow-hidden shadow-medium h-[400px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841278876676!2d-73.98784368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Restaurant Location"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
