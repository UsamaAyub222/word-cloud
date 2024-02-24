import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import WordCloud from "@/components/WordCloud";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <WordCloud />
    </div>
  );
}
