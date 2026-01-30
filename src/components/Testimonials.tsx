
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import LazyImage from './LazyImage';

const testimonials = [
  {
    id: 1,
    name: "Sabeel Khan",
    role: "Senior Developer",
    company: "PayU India",
    image: "https://media.licdn.com/dms/image/v2/D5603AQF73eVBY0rQ9g/profile-displayphoto-scale_400_400/B56ZqVcApMJoAg-/0/1763443742803?e=1771459200&v=beta&t=3PJwTzI42-hNfN6eyKM9-vljG5DbWiuwAzWRbsIP4AQ",
    content: "Aditya showed great enthusiasm during his internship. His attention to detail in testing and willingness to learn made him a valuable team member.",
    rating: 5
  },
  {
    id: 2,
    name: "Ashutosh Payasi ",
    role: "Senior Software Engineer",
    company: "Alphaway Global Pvt. Limited",
    image: "https://site-images.ams3.cdn.digitaloceanspaces.com/images/bg-images/employee-images/teamimg.png",
    content: "Aditya is one of our most dedicated employee. His practical approach to learning and consistent effort in projects sets him apart from his peers.",
    rating: 5
  },
  {
    id: 3,
    name: "Maitry Upreti",
    role: "Founder & CEO",
    company: "Alphaway Global Pvt. Limited",
    image: "https://site-images.ams3.cdn.digitaloceanspaces.com/images/bg-images/employee-images/WhatsApp%20Image%202025-11-20%20at%202.09.25%20PM.jpeg",
    content: "Aditya consistently delivered high-performance, user-friendly features and owned complex UI and API integrations. He improved user engagement with solutions like a custom chatbot and showed strong problem-solving and communication. I highly recommend him for frontend or Software developer roles.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Testimonials</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what clients and collaborators have to say about working with me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600"
            >
              <div className="absolute top-6 right-6 text-purple-600 dark:text-purple-400 opacity-20">
                <Quote size={40} />
              </div>

              <div className="mb-6">
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <LazyImage
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                  width={48}
                  height={48}
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Ready to work together? Let's create something amazing!
          </p>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
