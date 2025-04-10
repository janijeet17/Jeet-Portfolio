import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 

    
  

  function handleSubmit(e: React.FormEvent) {
      e.preventDefault();
      setLoading(true);

      // Simulate form submission
      setTimeout(() => {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
          duration: 5000,
        });

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });

        setLoading(false);
      }, 1500);
    }

    emailjs.init("-0RZZI3AxnKQKSMp_"); // ✅ INIT with your public key
    
    const sendMail = () => {
      const params = {
        name: (document.getElementById("name") as HTMLInputElement).value,
        email: (document.getElementById("email") as HTMLInputElement).value,
        subject: (document.getElementById("subject") as HTMLInputElement).value,
        message: (document.getElementById("message") as HTMLTextAreaElement).value,
      };
    
      emailjs.send("service_pkngjrt", "template_855j29y", params)
        .then((res) => {
          console.log("Email sent successfully!", res.status, res.text);
        })
        .catch((err) => {
          console.error("Failed to send email:", err);
        });
    };
    

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="portfolio-container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-portfolio-dark">Contact Me</h1>
            <p className="text-xl text-gray-600">
              Have a project in mind or want to connect? Reach out and let's start a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="portfolio-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-portfolio-dark">Send Me a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email"  className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject of your message"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write your message here..."
                    className="w-full min-h-[150px]"
                  />
                </div>
                
                <Button 
                  type="submit"
                  onClick={sendMail} 
                  className="btn-primary w-full"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-portfolio-dark">Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  Feel free to reach out to me using the contact form or through any of the methods below.
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-4 text-portfolio-dark">Email</h3>
                <p className="text-gray-600">janijeet50@gmail.com</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-4 text-portfolio-dark">Location</h3>
                <p className="text-gray-600">Mahesana, Gujarat</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-4 text-portfolio-dark">Social Media</h3>
                <div className="flex flex-wrap gap-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-portfolio-primary hover:text-portfolio-secondary transition-colors">LinkedIn</a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-portfolio-primary hover:text-portfolio-secondary transition-colors">GitHub</a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-portfolio-primary hover:text-portfolio-secondary transition-colors">Twitter</a>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-4 text-portfolio-dark">Working Hours</h3>
                <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 bg-portfolio-primary text-white">
        <div className="portfolio-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your ideas to life. I'm excited to hear about your project!
          </p>
          {/* <Button className="bg-white text-portfolio-primary hover:bg-gray-100 font-medium py-2 px-6 rounded-md transition-colors duration-200">
            Check My Availability
          </Button> */}
        </div>
      </section>
    </div>
  );
};

export default Contact;
