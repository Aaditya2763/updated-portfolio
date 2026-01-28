import React from "react";
import { motion } from "framer-motion";
import { Download, User, Phone, Mail, MapPin, Calendar, Star } from "lucide-react";

const CV = () => {
  // The resume PDF is served from the public folder at /resume/Aditya%20resume.pdf
  // Clicking the Download Resume link should always load that PDF.

  const techSkills = [
    { name: "Java", rating: 4 },
    { name: "JavaScript", rating: 4 },
    { name: "React.js", rating: 4 },
    { name: "React Native", rating: 3 },
    { name: "HTML5", rating: 4 },
    { name: "CSS3", rating: 4 },
    { name: "Bootstrap", rating: 3 },
    { name: "Node.js", rating: 4 },
    { name: "Express.js", rating: 4 },
    { name: "RESTful APIs", rating: 4 },
    { name: "MongoDB", rating: 4 },
    { name: "DynamoDB", rating: 3 },
    { name: "JWT", rating: 4 },
    { name: "Passport.js", rating: 3 },
    { name: "AWS", rating: 3 },
    { name: "Git", rating: 4 },
    { name: "GitHub", rating: 4 },
    { name: "Razorpay/cashfree", rating: 4 },

  ];

  const personalSkills = [
    { name: "Public Speaking", rating: 4 },
    { name: "Leadership", rating: 4 },
    { name: "Problem Solving", rating: 5 },
    { name: "Team Collaboration", rating: 4 },

  ];

  return (
    <section
      id="cv"
      className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-indigo-900/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Aditya Singh — Resume</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 mx-auto mb-6 rounded-full"></div>

          <motion.a
            href="/resume/Aditya%20resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </motion.a>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-8">
          {/* Objective */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Software Developer with 2.5+ years of experience building scalable web and mobile applications. Experienced in MERN stack, React Native, payment integrations, and cloud services.
            </p>
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold mb-6">Education</h3>
          <div className="space-y-6">
            <div className="border-l-4 border-indigo-600 pl-6 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-r-lg">
              <h4 className="font-bold text-lg">
                M.C.A.
              </h4>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                Maharshi Dayanand University
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Year of Completion: 2026 | Score: 7.5
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-6 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-r-lg">
              <h4 className="font-bold text-lg">Java & Full Stack Development</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Coding Blocks — Comprehensive training in Java and Full Stack development (projects and hands-on labs)</p>
            </div>
            <div className="border-l-4 border-green-600 pl-6 bg-green-50 dark:bg-green-900/20 p-4 rounded-r-lg">
              <h4 className="font-bold text-lg">Agentic AI & AWS</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Udemy — Completed courses on Agentic AI concepts and AWS cloud services</p>
            </div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold mb-6">Experience</h3>
          <div className="space-y-6">
            <div className="border-l-4 border-red-600 pl-6 bg-red-50 dark:bg-red-900/20 p-4 rounded-r-lg">
              <h4 className="font-bold text-lg">Software Developer</h4>
              <p className="text-red-600 dark:text-red-400 font-medium">
                Alphaway Global Pvt. Limited
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                June 2025 – Present
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Developed responsive, high-performance pages and booking workflows for a student-accommodation platform.</li>
                <li>Built and integrated RESTful APIs and implemented secure client-side validation.</li>
                <li>Designed and integrated a chatbot for real-time user assistance.</li>
              </ul>
            </div>
            <div className="border-l-4 border-purple-600 pl-6 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-r-lg">
              <h4 className="font-bold text-lg">Full Stack Developer (MERN)</h4>
              <p className="text-purple-600 dark:text-purple-400 font-medium">
                National Marketing Project Inc.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                March 2024 – May 2025
              </p>
              <p className="text-gray-600 dark:text-gray-300">Designed, developed, and maintained production-ready web applications, integrated payment gateways (Razorpay, HDFC), and built RESTful APIs for scalable backend services.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-r-lg">
              <h4 className="font-bold text-lg">Full Stack Developer</h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium">
                Red Positive (OPC) Service Pvt. Limited
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Sept 2022 – Feb 2024
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Led a small team to build React Native mobile apps and scalable Node.js backends.</li>
                <li>Used AWS and DynamoDB for cloud-based data storage and performance optimization.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold mb-6">Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">Technical Skills</h4>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {techSkills.map((skill, i) => (
                  <div key={i} className="p-3 rounded-lg border border-gray-200 dark:border-gray-600 text-sm font-medium text-gray-800 dark:text-gray-100 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10 flex items-center justify-between">
                    <span>{skill.name}</span>
                    <div className="flex items-center space-x-1">
                      <div className="flex -space-x-1">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star key={idx} size={14} className={idx < skill.rating ? "fill-amber-400 text-amber-400" : "text-gray-300 dark:text-gray-600"} />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{skill.rating}/5</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400">Personal Skills & Languages</h4>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {personalSkills.map((skill, i) => (
                  <div key={i} className="p-3 rounded-lg border border-gray-200 dark:border-gray-600 text-sm font-medium text-gray-800 dark:text-gray-100 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/10 dark:to-blue-900/10 flex items-center justify-between">
                    <span>{skill.name}</span>
                    <div className="flex items-center space-x-1">
                      <div className="flex -space-x-1">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star key={idx} size={14} className={idx < skill.rating ? "fill-amber-400 text-amber-400" : "text-gray-300 dark:text-gray-600"} />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{skill.rating}/5</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements & Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold mb-6">Achievements & Awards</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="p-3 bg-gradient-to-r from-grey-50 to-grey-100 dark:from-grey-900/10 dark:to-grey-900/20 rounded-lg border border-grey-200 dark:border-grey-700">
                <p className="text-sm font-medium">Udemy Certificate — Full Stack Web Development</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/10 dark:to-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
                <p className="text-sm font-medium">Udemy Certificate — AWS (Cloud Services)</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/10 dark:to-blue-900/10 rounded-lg border border-green-200 dark:border-green-700">
                <p className="text-sm font-medium">Employee of the Year — Alphaway Global Pvt. Limited</p>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CV;
