import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

interface PortfolioItem {
  id: number;
  img: string;
  title: string;
  github: string;
  demo: string;
}

const data: PortfolioItem[] = [
  {
    id: 1,
    img: IMG1,
    title: "Crypto",
    github: "https://github.com/WanWin04",
    demo: "https://github.com/WanWin04",
  },
  {
    id: 2,
    img: IMG2,
    title: "Crypto",
    github: "https://github.com/WanWin04",
    demo: "https://github.com/WanWin04",
  },
  {
    id: 3,
    img: IMG3,
    title: "Crypto",
    github: "https://github.com/WanWin04",
    demo: "https://github.com/WanWin04",
  },
  {
    id: 4,
    img: IMG4,
    title: "Crypto",
    github: "https://github.com/WanWin04",
    demo: "https://github.com/WanWin04",
  },
  {
    id: 5,
    img: IMG5,
    title: "Crypto",
    github: "https://github.com/WanWin04",
    demo: "https://github.com/WanWin04",
  },
  {
    id: 6,
    img: IMG6,
    title: "Crypto",
    github: "https://github.com/WanWin04",
    demo: "https://github.com/WanWin04",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="Portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, img, title, github, demo }) => (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item-img">
              <img src={img} alt={title} />
            </div>

            <h3>{title}</h3>
            <div className="portfolio_item-cta">
              <a href={github} className="btn">
                Github
              </a>
              <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;