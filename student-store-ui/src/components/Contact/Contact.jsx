import "./Contact.css";

export default function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="content">
        <h1>Contact Us</h1>
        <div className="box">
          <div className="text">
            <p>Email: code@path.org</p>
            <p>Phone: 1-800-CODEPATH</p>
            <p>Address: 123 Fake Street, San Francisco, CA</p>
            <p className="socials">
              Socials:
              <img src="https://publish.illinois.edu/sacnasuiuc/files/2015/06/facebook-logo-png-transparent-background.png" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png" />
              <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" />
            </p>
          </div>
          <div className="media">
            <img src="https://clipart-library.com/img1/1056946.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
