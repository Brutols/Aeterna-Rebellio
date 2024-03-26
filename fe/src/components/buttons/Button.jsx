import React from 'react'
import styles from './button.module.css'

const Button = ({text, variant, href}) => {

    const variants = {
        sm: "sm",
        md: "md",
        lg: "lg",
    }

  return (
    <button type='button' className={`${styles[variants[variant]]} ${styles.btn}`} >
        <a href={href}>{text}</a>
    </button>
  )
}

export default Button