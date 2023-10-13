import image from "./images/image-product-desktop.jpg";
import "./App.css";

function App() {
  return (
    <>
      <div className="card">
        <img src={image} alt="perfume bottle" />
        <div className="card-content">
          <h4>PERFUME</h4>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="price">
            <h1>$149.99</h1>
            <p>$169.99</p>
          </div>
          <button>Add to Cart</button>
          
        </div>
      </div>
    </>
  );
}

export default App;
