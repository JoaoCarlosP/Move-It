'use client'

import React, { useContext, useMemo } from 'react'

import styles from './ChallengeBox.module.css'
import Image from 'next/image'
import useChallenges from '@/hooks/ChallengesContext'
import useCountdown from '@/hooks/CountdownContext'

function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useChallenges()
  const { resetCountdown } = useCountdown()
  
  const svg = useMemo(() => {
   switch (activeChallenge?.type) {
    case 'body':
      return 'icons/body.svg'
    case 'eye':
      return 'icons/eye.svg'
    case 'mindfulness':
      return 'icons/mindfulness.svg'
    default:
      return ''
   }
  }, [activeChallenge])

  const handleChallengeSucceeded = () => {
    completeChallenge()
    resetCountdown()
  }

  const handleChallengeFailed = () => {
    resetChallenge()
    resetCountdown()
  } 

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <Image
              priority
              src={svg}
              alt="icon body"
              width={140}
              height={112}
            />

            <strong>Novo desafio</strong>

            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type='button'
              onClick={handleChallengeFailed}
              className={styles.challengeFailedButton}
            >
              Falhei
            </button>

            <button
              type='button'
              onClick={handleChallengeSucceeded}
              className={styles.challengeSucceededButton}
            >
              Completei
            </button> 
          </footer>
        </div>
      ) : (
      <div className={styles.challengeNotActive}>
        <strong>Finalize um ciclo para receber um desafio</strong>

        <p>
          <Image
            src="icons/level-up.svg"
            alt="Level Up"
            width={60}
            height={80}
          />
          Avance de level completando desafios
        </p>
      </div>
      )}
    </div>
  )
}

export default ChallengeBox