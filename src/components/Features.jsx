import { FaUserShield, FaTasks, FaChartLine, FaTachometerAlt } from "react-icons/fa";

export default function Features() {
  return (
    <section className="features">
      <h2 className="features-title">Key Features</h2>

      <div className="feature-cards">
        {/* Card 1 */}
        <div className="feature-card">
          <div className="icon-wrapper">
            <FaUserShield size={40} color="#4CAF50" />
          </div>
          <h3>Secure Login & Signup</h3>
          <p>
            Users can register and login securely. Each user can access only
            their own tasks.
          </p>
        </div>

        {/* Card 2 */}
        <div className="feature-card">
          <div className="icon-wrapper">
            <FaTasks size={40} color="#FF9800" />
          </div>
          <h3>Manage Tasks Easily</h3>
          <p>
            Create, edit, and delete tasks with ease to organize your daily work.
          </p>
        </div>

        {/* Card 3 */}
        <div className="feature-card">
          <div className="icon-wrapper">
            <FaChartLine size={40} color="#2196F3" />
          </div>
          <h3>Track Task Progress</h3>
          <p>
            Monitor pending and completed tasks to stay productive and focused.
          </p>
        </div>

        {/* Card 4 */}
        <div className="feature-card">
          <div className="icon-wrapper">
            <FaTachometerAlt size={40} color="#9C27B0" />
          </div>
          <h3>Personalized Dashboard</h3>
          <p>
            Each user gets a personal dashboard with task summary and quick
            actions.
          </p>
        </div>
      </div>
    </section>
  );
}
