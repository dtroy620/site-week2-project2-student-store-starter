import "./Logo.css";

export default function Logo({ setShowDescription }) {
  return (
    <div className="logo" onClick={() => setShowDescription(false)}>
      <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wfsonfv0p92plryzwijf" />
    </div>
  );
}
