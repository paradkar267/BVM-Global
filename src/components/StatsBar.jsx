import React from 'react';
import { Globe2, GitBranch, Users2, Calendar } from 'lucide-react';

export default function StatsBar() {
  return (
    <section className="stats-bar-section">
      <div className="container">
        <div className="stats-grid">
          {/* Stat 1 */}
          <div className="stat-item">
            <div className="stat-icon-wrapper">
              <Globe2 style={{ width: 26, height: 26 }} />
            </div>
            <div>
              <div className="stat-number">25+</div>
              <div className="stat-label">Countries Served</div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="stat-item">
            <div className="stat-icon-wrapper">
              <GitBranch style={{ width: 26, height: 26 }} />
            </div>
            <div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Trade Routes Connected</div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="stat-item">
            <div className="stat-icon-wrapper">
              <Users2 style={{ width: 26, height: 26 }} />
            </div>
            <div>
              <div className="stat-number">100+</div>
              <div className="stat-label">Clients Served</div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="stat-item">
            <div className="stat-icon-wrapper">
              <Calendar style={{ width: 26, height: 26 }} />
            </div>
            <div>
              <div className="stat-number">20+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
