import Container from '../components/Container';
import s from './Views.module.css';

const styles = {
  div: {
    display: 'block',
    textAlign: 'center',
  },
  ul: {
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '20px',
    paddingLeft: '0px',
    paddingRight: '0px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  li: {
    width: 'calc((100%-50px)/3)',
    marginRight: '15px',
    listStyleType: 'none',
  },
  img: {
    display: 'block',

    marginRight: '15px',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
};

export default function EventsView() {
  return (
    <div style={styles.div}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <img
            src="/images/Schoolpub-28-05-2021.jpg"
            className={s.Image}
            alt="Schoolpub 28.05.2021 poster"
          />
        </li>
        <li style={styles.li}>
          <img
            src="/images/Fazenda-1-05-2021.jpg"
            className={s.Image}
            alt="Fazenda 01.05.2021 poster"
          />
        </li>
        <li style={styles.li}>
          <img
            src="/images/Heisenberg-14-02-2021.jpg"
            className={s.Image}
            alt="Heisenberg 14.02.2021 poster"
          />
        </li>
      </ul>
    </div>
  );
}
