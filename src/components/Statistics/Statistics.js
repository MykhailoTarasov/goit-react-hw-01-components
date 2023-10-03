import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomHexColor } from 'utilits/randomColor';

export const Statistics = ({ title, stats }) => {
    return (
      <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>
        <ul className={css.statList}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li className={css.item} key={id} style={{backgroundColor: getRandomHexColor()}}>
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    );
  };

  Statistics.prototype ={
    title: PropTypes.string,
    stats: PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
})
}