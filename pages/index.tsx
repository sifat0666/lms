import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="flex gap-5 flex-col items-center justify-center h-full">
      <h1>Explore our curriculam</h1>
      <h1>Meet teachers</h1>
    </div>
  );
};

export default Home;
