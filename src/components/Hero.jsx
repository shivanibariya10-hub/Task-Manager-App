import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import img1 from "../assets/images/hero1.png";
import img2 from "../assets/images/hero2.png";
import img3 from "../assets/images/hero3.png";

export default function Hero() {
  const images = [img1, img2, img3];
  const [current, setCurrent] = useState(0);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: `url(${images[current]})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-inner">
        <h1>Manage Your Tasks Easily</h1>
        <p>
          A secure task manager app with user authentication to organize
          your daily work efficiently.
        </p>

        <div className="hero-buttons">
         
        </div>
      </div>
    </section>
  );
}
