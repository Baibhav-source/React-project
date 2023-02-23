import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

import "./about.css";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim facilis
        molestias perferendis aliquid nam laboriosam, minus autem ut possimus
        voluptate.
      </Header>

      <section className="about_story">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={StoryImage} />
          </div>
          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              qui cum velit ipsa pariatur dolor, neque doloribus voluptas
              nostrum praesentium non veritatis quidem minima! A vitae expedita
              molestias deserunt omnis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
              ipsa. Modi impedit, minima nesciunt ipsa qui dicta doloribus vitae
              consequuntur iure id aliquam commodi beatae iste labore laudantium
              reprehenderit maxime.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              impedit optio, tempora magnam ipsa soluta?
            </p>
          </div>
        </div>
      </section>

      <section className="about_Vision">
        <div className="container about_vision-container">
          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              qui cum velit ipsa pariatur dolor, neque doloribus voluptas
              nostrum praesentium non veritatis quidem minima! A vitae expedita
              molestias deserunt omnis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
              ipsa. Modi impedit, minima nesciunt ipsa qui dicta doloribus vitae
              consequuntur iure id aliquam commodi beatae iste labore laudantium
              reprehenderit maxime.
            </p>
          </div>
          <div className="about_section-image">
            <img src={VisionImage} />
          </div>
        </div>
      </section>

      <section className="about_mission">
        <div className="container about_mission-container">
          <div className="about_section-image">
            <img src={MissionImage} />
          </div>
          <div className="about_section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              qui cum velit ipsa pariatur dolor, neque doloribus voluptas
              nostrum praesentium non veritatis quidem minima! A vitae expedita
              molestias deserunt omnis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
              ipsa. Modi impedit, minima nesciunt ipsa qui dicta doloribus vitae
              consequuntur iure id aliquam commodi beatae iste labore laudantium
              reprehenderit maxime.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              impedit optio, tempora magnam ipsa soluta?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
