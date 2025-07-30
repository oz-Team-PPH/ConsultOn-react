const FeatureCard = ({ icon, title, description, gradientClass }) => {
  return (
    <div className="feature-card">
      <div className={`feature-icon ${gradientClass}`}>{icon}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

export default FeatureCard;
