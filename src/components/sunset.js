import React from "react"

const Sunset = (props) => {
  // If the `onClick` prop exists, call it with 'dark'
  const handleClick = () => props.onClick && props.onClick('dark');
  console.log('ola');

  return (
    <button alt="this is a moon" onClick={handleClick}>🌙</button>
  )
}

export default Sunset;