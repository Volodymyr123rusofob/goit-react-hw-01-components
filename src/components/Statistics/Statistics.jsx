import './statistics.css';
import GetRandomHexColor from 'function/colorRandom';

const Statistics = ({ title, stats }) => {
  const LiRend = stats.map(stat => (
    <li
      style={{
        backgroundColor: GetRandomHexColor(),
      }}
      className="item-stat"
      key={stat.id}
    >
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}%</span>
    </li>
  ));
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">{LiRend}</ul>
    </section>
  );
};

export default Statistics;
