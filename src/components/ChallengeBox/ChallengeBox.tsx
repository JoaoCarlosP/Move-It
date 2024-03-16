'use client'

import React, { useContext } from 'react'

import styles from './ChallengeBox.module.css'
import Image from 'next/image'

function ChallengeBox() {
  const hasActiveChallenge = true


  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <Image
              src="icons/body.svg"
              alt="icon body"
              width={140}
              height={112}
            />

            <strong>Novo desafio</strong>

            <p>Levante e faça uma caminhada de 3min</p>
          </main>

          <footer>
            <button
              type='button'
              className={styles.challengeFailedButton}
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