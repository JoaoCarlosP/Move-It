'use client'

import React from 'react'
import styles from './CompletedChallenges.module.css'
import useChallenges from '@/hooks/ChallengesContext'

function CompletedChallenges() {
  const { challengesCompleted } = useChallenges()

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}

export default CompletedChallenges