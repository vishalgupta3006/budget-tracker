import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Text } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Text
          h2
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
            borderBottom: "1px solid red"
          }}
          className={styles["sub-heading"]}
          weight="bold"
        >
          Expense Tracker
        </Text>
      </main>
    </>
  );
};

export default Dashboard;