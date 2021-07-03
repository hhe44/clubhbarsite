import Link from "next/link";
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import styles from "../styles/home.module.scss";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


const Home = ({ allPostsData }) => {
  return (
    <>
      <Navbar isHomePage={true} />
      <Hero />
      <div className={styles.container}>
      <ul className={styles.posts}>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <Date dateString={date} />
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};
export default Home;
