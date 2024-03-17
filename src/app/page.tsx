import Profile from "@/components/Profile/Profile";
import ExperienceBar from "../components/ExperieneBar/ExperienceBar";
import styles from './page.module.css'
import CompletedChallenges from "@/components/CompletedChallenges/CompletedChallenges";
import Countdown from "@/components/Countdown/Countdown";
import Head from "next/head";
import { Metadata } from "next";
import ChallengeBox from "@/components/ChallengeBox/ChallengeBox";
import { CountdownProvider } from "@/hooks/CountdownContext";
import Cookies from 'js-cookie'
import { cookies } from "next/headers";
import { ChallengesProvider } from "@/hooks/ChallengesContext";

export const metadata: Metadata = {
  title: 'Início | move.it',
  icons: [{ url: 'favicon.png', type: 'image/png' }]
}

export default async function Home  () {

  const nextCookies = cookies()
  const cookieLevel = nextCookies.get('level')
  const cookiecurrentExperience = nextCookies.get('currentExperience')
  const cookiechallengesCompleted = nextCookies.get('challengesCompleted')


  return (
    <ChallengesProvider
      level={Number(cookieLevel?.value)}
      currentExperience={Number(cookiecurrentExperience?.value)}
      challengesCompleted={Number(cookiechallengesCompleted?.value)}
    >
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
    </ChallengesProvider>

  )
}