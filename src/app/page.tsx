import Profile from "@/components/Profile/Profile";
import ExperienceBar from "../components/ExperieneBar/ExperienceBar";
import styles from './page.module.css'
import CompletedChallenges from "@/components/CompletedChallenges/CompletedChallenges";
import Countdown from "@/components/Countdown/Countdown";
import Head from "next/head";
import { Metadata } from "next";
import ChallengeBox from "@/components/ChallengeBox/ChallengeBox";
import { CountdownProvider } from "@/hooks/CountdownContext";

export const metadata: Metadata = {
  title: 'Início | move.it',
  icons: [{ url: 'favicon.png', type: 'image/png' }]
}

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>

          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}
