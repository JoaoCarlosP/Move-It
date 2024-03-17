'use client'

import React, { useContext, useMemo } from 'react'

import styles from './ChallengeBox.module.css'
import Image from 'next/image'
import useChallenges from '@/hooks/ChallengesContext'

function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useChallenges()
  
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
              className={styles.challengeFailedButton}
              onClick={resetChallenge}
            >
              Falhei
            </button>

            <button
              type='button'
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