import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_3.jpg";
import "./gallery.css";

const Gallery = () => {
  const gallerylength = 15;
  const images = [];

  for (let i = 1; i <= gallerylength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab pariatur
        atque, aliquid architecto expedita voluptatum est! Dignissimos harum
        quae consectetur?
      </Header>
      <section className="gallery">
        <div className="container gallery_container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
