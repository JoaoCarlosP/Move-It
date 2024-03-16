import React from 'react'
import styles from './CompletedChallenges.module.css'

function CompletedChallenges() {
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  )
}

export default CompletedChallenges