import React from "react";
import imagegrande from "../../images/rose.jpg";
import Image from "react-bootstrap/Image";
import image1 from "../../images/figure.jpg";
import image2 from "../../images/parfum1.jpg";
import image3 from "../../images/parfum2.jpg";
import image4 from "../../images/img4.jpg";
import image5 from "../../images/img5.jpg";
import image6 from "../../images/parfum.jpg";
import image7 from "../../images/rose1.jpg";
import { Button } from "react-bootstrap";
import "../../App.css";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="shopcontenent">
      <div className="card">
        <div className="img1">
          <Image src={imagegrande} />
        </div>
      </div>

      <div className="secondsection">
        <h1> NOS CATEGORIES </h1>
        <div className="photo">
          <div className="leftsection">
            <img src={image1} />

            <div className="firstcouple">
              <img src={image2} />
              <img src={image3} />
            </div>
          </div>
          <div className="rightsection">
            <div className="secondcouple">
              <img src={image4} />
              <img src={image5} />
            </div>
            <img src={image6} />
          </div>
        </div>
      </div>
      <div className="amira">
        <div className="img2">
          {" "}
          <img src={image7} />
        </div>
        <div className="paragraphe">
          <h1>Idées Cadeaux</h1>
          <p>
            Nouveautés chez Ecovillage Natural Beauty ! Profitez de nos
            merveilleux coffrets cadeaux pour faire plaisir à vos proches ! Ne
            ratez pas une occasion d’offrir le cadeau de rêve qui réunit tous
            les produits cosmétiques de notre marque. 100% tunisiens avec de
            vraies valeurs, nous mettons à votre disposition toutes sortes de
            coffrets homme ou coffret femme pour toutes les occasions. Retrouvez
            également des idées cadeaux individuels portant sur une gamme en
            particulier ou un produit précis. Ayez la possibilité de réunir tout
            ce que vous voulez dans un coffret pour le plaisir d’offrir le
            cadeau rêvé de notre marque.
          </p>

          <Button variant="primary">En Savoir Plus</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
