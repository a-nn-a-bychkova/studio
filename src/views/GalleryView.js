import Container from '../components/Container';

const styles = {
  li: {
    listStyleType: 'none',
  },
};

export default function GalleryView() {
  return (
    <Container>
      <ul>
        <li style={styles.li}>
          <img src="/images/example-image.jpg" />
        </li>
        <li style={styles.li}>
          <img src="/images/example-image.jpg" />
        </li>
        <li style={styles.li}>
          <img src="/images/example-image.jpg" />
        </li>
        <li style={styles.li}>
          <img src="/images/example-image.jpg" />
        </li>
        <li style={styles.li}>
          <img src="/images/example-image.jpg" />
        </li>
        <li style={styles.li}>
          <img src="/images/example-image.jpg" />
        </li>
      </ul>
    </Container>
  );
}
