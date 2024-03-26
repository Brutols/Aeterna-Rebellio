import React from 'react'
import styles from './button.module.css'

const Button = ({text, variant, href, type}) => {

    const variants = {
        sm: "sm",
        md: "md",
        lg: "lg",
    }

  return (
    <button type={type} className={`${styles[variants[variant]]} ${styles.btn}`} >
        <a href={href}>{text}</a>
    </button>
  )
}

export default Button