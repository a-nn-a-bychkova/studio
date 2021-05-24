import Container from '../components/Container';
import s from './Views.module.css';

export default function HomeView() {
  return (
    <Container>
      {/* <h1 className={s.Name}>artknown antist</h1> */}
      <img src="/images/artknown.jpg" alt="ARTKNOWN ANTIST" />
    </Container>
  );
}
