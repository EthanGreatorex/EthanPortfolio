import { FaHtml5, FaCss3, FaJs, FaReact, FaWindows, FaApple, FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import "../css/techcarousel.css";

export default function TechCarousel() {
  const icons = [
    <FaHtml5 />,
    <FaCss3 />,
    <FaJs />,
    <SiTypescript />,
    <FaReact />,
    <FaPython />,
    <FaApple />,
    <FaWindows />
  ];

  return (
    <div className="carousel-wrapper">
      <div className="carousel-track">
        {icons.map((icon, i) => (
          <div key={i} className="carousel-item">
            {icon}
          </div>
        ))}

        {icons.map((icon, i) => (
          <div key={`dup-${i}`} className="carousel-item">
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}