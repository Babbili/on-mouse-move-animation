import React, { useState } from 'react'
import styles from './App.module.scss';

function App() {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  function mouseMove(e) {
    setX(e.pageX - e.target.offsetLeft)
    setY(e.pageY - e.target.offsetTop)

    document.documentElement.style.setProperty('--x', `${x}px`)
    document.documentElement.style.setProperty('--y', `${y}px`)
  }

  return (
    <div className={styles.card} onMouseMove={(e) => mouseMove(e)} >
      <h2>On Mouse Move Animation</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid nobis tenetur at voluptatibus, eligendi veniam quo assumenda, ullam, sunt alias beatae. Cumque eum commodi explicabo sed hic molestias ipsa voluptas! 🐈</p>
    </div>
  )
}

export default App