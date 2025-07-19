import React from "react";
import{Link} from 'react-router-dom';
import { FaUserGraduate, FaMapMarkerAlt, FaBullseye, FaLightbulb } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br to-info/50 from-info-cintent pt-10 rounded-2xl shadow-lg">
      <div className="max-w-6xl mx-auto mb-35">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <img
            src="../images/my-img.jpeg"
            alt="Mayank Singh Rajpoot"
            className="w-72 h-72 rounded-full shadow-lg mb-6 border-2 border-primary"
          />
          <h1 className="text-5xl font-extrabold text-primary mb-3">
            Mayank Singh Rajpoot
          </h1>
          <p className="text-lg text-accent-content max-w-2xl italic">
Figuring out your future can be tough. As an engineering student, I've been there — and that's why I built this platform to help students choose the right career with confidence and clarity.         </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="card bg-primary-content shadow-xl hover:shadow-2xl hover:scale-104 transition duration-300">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-3">
                <FaUserGraduate className="text-primary text-2xl" />
                <h2 className="card-title text-primary text-2xl">Education</h2>
              </div>
              <p>
                I'm studying B.Tech at Lovely Professional University. I'm passionate about building tools that solve real problems, especially around student careers.
              </p>
            </div>
          </div>
          <div className="card bg-primary-content hover:scale-104 shadow-xl hover:shadow-2xl transition duration-300">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-3">
                <FaMapMarkerAlt className="text-secondary text-2xl" />
                <h2 className="card-title text-secondary text-2xl">Location</h2>
              </div>
              <p>
                I'm from Patna, Bihar — a city full of dreams and energy. I want to empower students from all over to explore great career options.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Goal */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="card bg-primary-content hover:scale-104 shadow-xl hover:shadow-2xl border-l-4 transition duration-300 border-primary">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-3">
                <FaLightbulb className="text-primary text-2xl" />
                <h2 className="text-xl font-semibold text-primary">My Mission</h2>
              </div>
              <p>
                To guide students toward careers that match their interests and strengths — with smart tools and simple advice.
              </p>
            </div>
          </div>
          <div className="card bg-primary-content hover:scale-104 shadow-xl hover:shadow-2xl border-l-4 border-secondary transition duration-300">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-3">
                <FaBullseye className="text-secondary text-2xl" />
                <h2 className="text-xl font-semibold text-secondary">My Goal</h2>
              </div>
              <p>
                To remove the confusion from career choices — and help students move forward with confidence and clarity.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4 text-accent-content">
            Let's Build Your Future
          </h2>
          <p className="text-info-content mb-6">
            I'm just getting started — and so are you. Let's take the next step together.
          </p>
          <div className="flex justify-center">
          <a
            href="https://www.linkedin.com/in/mayank-singh-rajpoot-910b29297/"
            target="blank"
            className="btn btn-primary btn-wide hover:scale-105 transition-transform duration-300 flex items-center gap-2"
          >
            Connect on LinkedIn
          </a>
          </div>
        </div>
      </div>
      {/* Footer Section */}
            <footer className="bg-base-100 text-base-content px-6 lg:px-20 py-20 mt-[-3rem] rounded-t-[3rem] shadow-inner">
              <div className="grid md:grid-cols-3 gap-10">
                <div>
                  <h3 className="font-bold text-lg mb-2">About</h3>
                  <p className="text-sm text-gray-600">
                    BrightPath helps students and professionals find personalized career directions using modern technology and insights.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Quick Links</h3>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li><Link to="/" className='hover:underline'>Home</Link> </li>
                    
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Contact</h3>
                  <p className="text-sm">Email: mayanksinghrajpoot01@gmail.com</p>
                  <p className="text-sm">Phone: +91 77395 04569</p>
                  <div className="flex space-x-4 mt-3">
                    <a href="https://www.facebook.com/facebook/"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-5" /></a>
                    <a href="https://www.instagram.com/_singh_mayank___/"><img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Twitter" className="w-5" /></a>
                    <a href="https://www.linkedin.com/in/mayank-singh-rajpoot-910b29297/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/640px-LinkedIn_icon.svg.png" alt="LinkedIn" className="w-5" /></a>
                  </div>
                </div>
              </div>
              <div className="text-center text-sm text-gray-500 mt-10">
                © {new Date().getFullYear()} BrightPath. All rights reserved.
              </div>
            </footer>

    </div>
  );
};

export default AboutUs;
