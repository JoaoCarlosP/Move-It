import React from 'react'
import styles from './LevelUpModal.module.css'
import Image from 'next/image'
import useChallenges from '@/hooks/ChallengesContext'

function LevelUpModal() {
  const { level, setIsLevelModalOpen } = useChallenges()

  return (
    <div className={styles.overlay}>
    <div className={styles.container}>
      <header>{level}</header>
      <strong>Parabéns</strong>
      <p>Você alcançou um novo level</p>

      <button type='button' onClick={() => setIsLevelModalOpen(false)}>
        <Image
          src='/icons/close.svg'
          alt='close icon'
          width={40}
          height={40}
        />
      </button>
    </div>
    </div>
  )
}

export default LevelUpModal