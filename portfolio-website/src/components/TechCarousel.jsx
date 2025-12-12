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

  // Create multiple sets for seamless infinite loop
  const totalSets = 3;

  return (
    <div className="carousel-wrapper">
      <div className="carousel-track">
        {Array.from({ length: totalSets }).map((_, setIndex) =>
          icons.map((icon, i) => (
            <div key={`set-${setIndex}-item-${i}`} className="carousel-item">
              {icon}
            </div>
          ))
        )}
      </div>
    </div>
  );
}