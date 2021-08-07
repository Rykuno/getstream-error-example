import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>Open console and navigate between users on the top bar</h2>
      <h3 style={{ color: "black" }}>You should see a error such as below</h3>

      <code style={{ color: "red" }}>
        TypeError: Cannot read property {"cancel"} of undefined at
        FeedManager.eval (FeedManager.js?3b0e:917) at step
        (tslib.es6.js?9ab4:102) at Object.eval [as next] (tslib.es6.js?9ab4:83)
        at fulfilled (tslib.es6.js?9ab4:73)
      </code>
    </div>
  );
}
