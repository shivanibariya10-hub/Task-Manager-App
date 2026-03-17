import "./WhyChoose.css";

const WhyChoose = () => {
  return (
    <section className="why-section">
      <div className="why-container">

        {/* LEFT TEXT */}
        <div className="why-text">
          <h2>
            Engineered for <br/>
            <span className="text-gradient">Peak Performance</span>
          </h2>
          <p className="subtitle">
            We've stripped away the clutter to give you a tool that acts as an extension of your mind. Fast, fluid, and beautifully designed.
          </p>

          <ul className="why-list">
            <li>Zero friction task capturing</li>
            <li>Intelligent priority algorithms</li>
            <li>Real-time team synchronization</li>
            <li>Bank-grade data encryption</li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="why-image">
          <img 
            src="/calendar_mockup_1773723200072.png" 
            alt="App Interface Mockup"
            className="image-glow"
          />
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
