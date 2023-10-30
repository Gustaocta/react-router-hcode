import './discover.scss';
import image1 from '../../assets/images/discover1.webp';
import image2 from '../../assets/images/discover2.webp';
import image3 from '../../assets/images/discover3.webp';
import image4 from '../../assets/images/discover4.webp';

const Discover = () => {

    return (
        <section id="discover">

            <h2>Descubra</h2>

            <div className="discover-container">
                <div className="discover-item">
                    <img src={image1} alt="Porsche Exclusive Manufaktur" />
                    <h3>Porsche Exclusive Manufaktur</h3>
                </div>
                <div className="discover-item">
                    <img src={image2} alt="Porsche Finder" />
                    <h3>Porsche Finder</h3>
                </div>
                <div className="discover-item">
                    <img src={image3} alt="Porsche e Performance" />
                    <h3>Porsche e Performance</h3>
                </div>
                <div className="discover-item">
                    <img src={image4} alt="Porsche Lyfestyle" />
                    <h3>Porsche Lyfestyle</h3>
                </div>
            </div>

        </section>
    )

}

export default Discover;