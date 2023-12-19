import './statistics.css';

const Statistics = ({ title, stats }) => {
  const LiRend = stats.map(stat => (
    <li class="item" key={stat.id}>
      <span class="label">{stat.label}</span>
      <span class="percentage">{stat.percentage}%</span>
    </li>
  ));
  return (
    <section class="statistics">
      {title && <h2 class="title">Upload stats</h2>}
      <ul class="stat-list">{LiRend}</ul>
    </section>
  );
};

export default Statistics;
