import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
export default function Home() {
  const { authState, logout } = useAuth();
    // const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center min-h-screen bg-primary-content shadow-lg ">
      
<div className="font-sans bg-gradient-to-br from-blue-50 via-white to-pink-50 text-gray-800">
      {/* Hero Section */}
      <section className="py-24 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden">
        
        {/* Hero Text */}
        <div className="z-10 w-full lg:w-1/2 space-y-6">
          
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Find Your <span className="text-primary ">Perfect Career</span>
          </h1>
          <p className="text-lg max-w-xl">
            Take the guesswork out of your future. Get personalized career paths based on your skills and interests.
          </p>
          <button className="btn btn-primary rounded px-8 py-3 text-lg shadow-md transition hover:scale-105">
            {authState.isAuthenticated ?
            ( <><Link to="/dashboard">Get Started</Link></>) :(<> <Link to="/Login">Get Started</Link> </> ) 
          }
          </button>
        </div>

        {/* Hero Image */}
        <div className="z-10 w-full lg:w-1/2 mt-10 lg:mt-0 ">
          <img
            src="https://images.pexels.com/photos/8197545/pexels-photo-8197545.jpeg"
            alt="Career Illustration"
            className="w-full max-w-xl mx-auto drop-shadow-xl rounded-l-[40%] rounded-lg"
          />
        </div>
      </section>

          {/* 💼 Enhanced About Us Section */}
<section className="bg-white px-6 lg:px-20 py-20 mt-[-3rem] rounded-t-[3rem] shadow-inner">
  <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">
    Who We Are
  </h2>

  <div className="grid md:grid-cols-3 gap-10">
    {/* Mission */}
    <div className="card bg-warning shadow-md   hover:scale-105 border hover:shadow-lg transition duration-300 text-center p-6">
      <div className="flex justify-center mb-4">
        <div className="bg-primary/10 text-primary rounded-full p-4 text-3xl">
          🎯
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
      <p className="text-gray-600">
        To help individuals discover meaningful careers through smart, personalized tools and guidance that adapt to their unique paths.
      </p>
    </div>

    {/* Vision */}
    <div className="card bg-warning shadow-md border hover:shadow-lg transition duration-300 text-center p-6 hover:scale-105">
      <div className="flex justify-center mb-4">
        <div className="bg-secondary/10 text-secondary rounded-full p-4 text-3xl">
          👁️
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
      <p className="text-gray-600">
        To become the global leader in AI-driven career discovery — empowering millions to unlock their true potential and purpose.
      </p>
    </div>

    {/* Values */}
    <div className="card bg-warning shadow-md border hover:shadow-lg transition duration-300 text-center p-6 hover:scale-105">
      <div className="flex justify-center mb-4">
        <div className="bg-accent/10 text-accent rounded-full p-4 text-3xl">
          💡
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">Our Values</h3>
      <p className=" text-gray-600">
        We believe in transparency, innovation, inclusion, and empowering every user to grow through clear and accessible career insights.
      </p>
    </div>
  </div>
</section>

      {/* Features Section */}
      <section className="bg-white px-6 lg:px-20 py-20 mt-[-3rem] rounded-t-[3rem] shadow-inner" id='features'>
        <h2 className="text-4xl font-bold text-center mb-14">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[{
            title: "AI-Powered Suggestions",
            desc: "Get matched with careers that fit your personality and skills.",
            img: "https://cdn-icons-png.flaticon.com/512/4359/4359960.png"
          }, {
            title: "Expert Guidance",
            desc: "Step-by-step roadmap built by industry professionals.",
            img: "https://cdn-icons-png.flaticon.com/512/4368/4368702.png"
          }, {
            title: "Career Support And Guidance",
            desc: "All-time support by industory professionals.",
            img: "https://cdn-icons-png.flaticon.com/512/4202/4202849.png"
          }].map((f, i) => (
            <div
              key={i}
              className="card bg-primary-content border shadow-md hover:shadow-xl transition duration-300 hover:scale-105"
            >
              <figure className="px-10 pt-10">
                <img src={f.img} alt={f.title} className="w-20" />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-xl">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
      </section>

   <section id="working" className="px-6 lg:px-20 py-20 mt-[-3rem] rounded-t-[3rem] shadow-inner text-center bg-white">
      <h3 className="text-4xl font-bold mb-12">How It Works</h3>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="card bg-success text-success-content p-8  shadow-md hover:shadow-xl hover:scale-105 transition duration-300" >
          <img src="https://img.icons8.com/ios-filled/100/4a90e2/question-mark.png" alt="loading image" className="mx-auto mb-4 "  />
          <h4 className="text-xl font-semibold mb-2">1. Take the Quiz</h4>
          <p>Quick, fun and insightful. Learn about your true strengths.</p>
        </div>
        <div className="card bg-success text-success-content backdrop-blur-lg p-8 shadow-md hover:shadow-xl hover:scale-105 transition duration-300" >
          <img src="https://img.icons8.com/ios-filled/100/4a90e2/artificial-intelligence.png" alt="loading image" className="mx-auto mb-4" />
          <h4 className="text-xl font-semibold mb-2">2. Smart Matching</h4>
          <p>Our AI connects you with careers you'll actually love.</p>
        </div>
        <div className="card bg-success text-success-content backdrop-blur-lg p-8 shadow-md hover:shadow-xl hover:scale-105 transition duration-300" data-aos="fade-up">
          <img src="https://img.icons8.com/ios-filled/100/4a90e2/rocket.png" alt="loading image" className="mx-auto mb-4" />
          <h4 className="text-xl font-semibold mb-2">3. Take Action</h4>
          <p>Explore resources and create a roadmap to success.</p>
        </div>
      </div>
    </section>

      {/* Reviews Section */}
      <section className=" bg-success-content px-6 lg:px-20 py-20 mt-[-3rem] rounded-t-[3rem] shadow-inner" id='reviews'>
        <h2 className="text-4xl font-bold text-center mb-14">Hear Our Users</h2>
        <div className="grid md:grid-cols-3 gap-8">
            <div
              className="card bg-secondary-content shadow-md p-6  hover:shadow-xl transition duration-300 backdrop-blur-lg hover:backdrop-blur-none font-bold hover:scale-105">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.pexels.com/photos/17733758/pexels-photo-17733758.jpeg"
                  alt="user"
                  className="w-12 h-12 rounded"
                />
                <div>
                  <h4 className="font-semibold">Sarma Ji Ka Ladka </h4>
                  <div className="text-yellow-500 text-sm">★★★★★</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 my-4">
                “This tool helped me discover a career I didn't even know existed. Highly recommended!”
              </p>
            </div>
            <div
              className="card bg-secondary-content shadow-md p-6  hover:shadow-xl transition duration-300 backdrop-blur-lg hover:backdrop-blur-none hover:scale-105 font-bold">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.pexels.com/photos/4783536/pexels-photo-4783536.jpeg"
                  alt="user"
                  className="w-12 h-12 rounded"
                />
                <div>
                  <h4 className="font-semibold"> Daniel R., Oregon </h4>
                  <div className="text-yellow-500 text-sm">★★★★★</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                “The insights were spot-on and helped me find a path in environmental science.”
              </p>
            </div>
            <div
              className="card bg-secondary-content shadow-md p-6  hover:shadow-xl transition duration-300 backdrop-blur-lg hover:backdrop-blur-none hover:scale-105 font-bold">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.pexels.com/photos/18999207/pexels-photo-18999207.jpeg"
                  alt="user"
                  className="w-12 h-12 rounded"
                />
                <div>
                  <h4 className="font-semibold">Amelia T., Chicago </h4>
                  <div className="text-yellow-500 text-sm">★★★★★</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                “BrightPath gave me clarity I've been searching for. I'm now studying product design!”
              </p>
            </div>
        </div>
        <div className="flex justify-center mt-8 ">
          <div className="avatar-group -space-x-5">
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
    </div>
  </div>
  <div className="avatar avatar-placeholder">
    <div className="bg-neutral text-neutral-content w-12">
      <span>+99</span>
    </div>
  </div>
</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-24 bg-gradient-to-r from-purple-50 to-blue-100 px-6 lg:px-20 mt-[-3rem] rounded-t-[3rem] shadow-inner">
        <h2 className="text-4xl font-bold mb-6">Ready to shape your future?</h2>
        <p className="text-lg mb-8 text-gray-600">Take our smart quiz and explore your ideal career path today!</p>
        <button className="btn btn-secondary text-lg px-10 py-3 transition hover:scale-105 shadow-md">
          <Link to={authState.isAuthenticated ? "/quiz":"/login"}>Get Started</Link>
          
        </button>
      </section>

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
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#working" className="hover:underline">Mechanism</a></li>
              <li><a href="#reviews" className="hover:underline">Testimonials</a></li>
              <li><Link to="/aboutus" className='hover:underline'>About Owner</Link> </li>
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

      
  
 

 



</div>
  );
}
