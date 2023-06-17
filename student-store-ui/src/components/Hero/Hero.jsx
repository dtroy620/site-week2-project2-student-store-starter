import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <div className="intro">
          <h1>Welcome!</h1>
          <h1>Find Your Merch!</h1>
          <p>
            We have all kinds of goodies. Click on any of the items to start
            filling up your shopping cart. Checkout whenever you're ready.
          </p>
        </div>
        <div className="media">
          <img
            className="hero-img"
            src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/76622/four-leaf-clover-clipart-xl.png"
          />
        </div>
      </div>
    </div>
  );
}
