"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { 
  FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaEnvelope, FaPhone 
} from "react-icons/fa";

const faqs = [
  { question: "How does this platform work?", answer: "We use AI to match you with job opportunities and provide career insights." },
  { question: "Is it free to use?", answer: "Yes, our basic features are free with premium options available." },
  { question: "Can I customize my resume?", answer: "Yes, you can generate and edit resumes based on your profile." },
  { question: "How accurate is the job matching?", answer: "Our AI continuously improves by analyzing user preferences and hiring trends." },
  { question: "Can I apply to jobs directly through the platform?", answer: "Yes, you can apply directly to job postings from our platform." },
  { question: "Does this platform offer career advice?", answer: "Yes, we provide career insights, interview tips, and resume-building guidance." },
  { question: "How can I contact support?", answer: "You can reach our support team through email or live chat on the website." },
];

const testimonials = [
  {
    image: "/shadcn.png",
    author: "ShadCN UI",
    role: "UI/UX Designer",
    // company: "Google",
    quote: "This platform transformed my job search experience!"
  },
  {
    image: "/gemini.png",
    author: "Gemini",
    role: "AI Specialist",
    // company: "Microsoft",
    quote: "A must-have tool for career growth!"
  },
  {
    image: "/clerk.png",
    author: "Clerk Auth",
    role: "Authentication Engineer",
    // company: "AuthCorp",
    quote: "Made authentication integration feel like magic!"
  },
  {
    image: "/orm.jpeg",
    author: "Prisma",
    role: "Database ORM Expert",
    // company: "Amazon",
    quote: "Helped me land my dream job effortlessly!"
  },

    {
      image: "/neondn.jpeg",
      author: "Neondb",
      role:"Database",
      quote:" A serverless, autoscaling Postgres database built for the cloud, optimized for modern web apps."

    }
];


const FAQSection = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(-1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Find answers to common questions about our platform</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg p-4 bg-gray-900 text-white shadow-lg">
              <button
                className="w-full text-left font-semibold text-lg flex justify-between items-center"
                onClick={() => setSelectedQuestion(selectedQuestion === index ? -1 : index)}
              >
                {faq.question}
                <span>{selectedQuestion === index ? "▲" : "▼"}</span>
              </button>
              {selectedQuestion === index && (
                <p className="mt-3 text-white border-t pt-3">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stat = () => {
  return (
    <div>
      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { value: "50+", label: "Industries Covered" },
              { value: "1000+", label: "Interview Questions" },
              { value: "95%", label: "Success Rate" },
              { value: "24/7", label: "AI Support" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <h3 className="text-4xl font-bold">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
     {/* Testimonials Section */}
<section className="w-full py-12 md:py-24 bg-gray-900 overflow-hidden">
  <div className="container mx-auto px-4 md:px-6">
    <h2 className="text-3xl font-bold text-center mb-12">Technologies Powering the Features Behind This Application</h2>

    {/* Outer Wrapper to mask overflow */}
    <div className="overflow-hidden w-full">
      {/* Animated Row */}
      <div className="testimonial-loop">
        {testimonials.concat(testimonials).map((testimonial, index) => (
          <Card 
            key={index} 
            className="bg-gray-900 text-white shadow-lg rounded-lg p-6 min-w-[300px] hover:scale-105 transition-transform"
          >
            <CardContent className="pt-6">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative h-16 w-16">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={64}
                      height={64}
                      className="rounded-full object-cover border-2 border-primary"
                      priority
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary">{testimonial.company}</p>
                  </div>
                </div>
                <blockquote className="p-4 rounded-lg border-l-4 border-primary shadow">
                  <p className="text-muted-foreground italic">&quot;{testimonial.quote}&quot;</p>
                </blockquote>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="w-full overflow-hidden">
        <div className="mx-auto py-24 bg-gradient-to-r from-black to-blue-400 rounded-lg">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-3 px-4">
            <h2 className="text-3xl font-bold text-black sm:text-4xl md:text-5xl">
              Ready to Accelerate Your Career?
            </h2>
            <p className="mx-auto max-w-[600px] text-white/80 md:text-xl">
              Join thousands of professionals advancing their careers with AI-powered guidance.
            </p>
            <Link href="/dashboard" passHref>
              <Button size="lg" variant="secondary" className="h-11 mt-5 animate-bounce">
                Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-14">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <div>
            <h2 className="text-xl font-bold">YourCompany</h2>
            <p className="mt-3 text-gray-400">Empowering careers with AI-driven solutions.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Quick Links</h2>
            <ul className="mt-3 space-y-2">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold">Resources</h2>
            <ul className="mt-3 space-y-2">
              <li><Link href="/blog">Blog & Insights</Link></li>
              <li><Link href="/faq">FAQs</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold">Stay Connected</h2>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full rounded-l-lg bg-gray-800 border border-gray-700"
            />
            <Button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg">Submit</Button>
            <div className="mt-5 text-gray-400">
              <p className="flex items-center gap-2"><FaEnvelope /> ayanmondal4906@gmail.com</p>
              <p className="flex items-center gap-2"><FaPhone /> +91 9142794658</p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center space-x-6">
          <FaFacebook size={24} />
          <FaTwitter size={24} />
          <FaLinkedin size={24} />
          <FaInstagram size={24} />
          <FaYoutube size={24} />
        </div>
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500">
          <p>© {new Date().getFullYear()} AyZenAi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Stat;
