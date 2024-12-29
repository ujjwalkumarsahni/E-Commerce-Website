import React from 'react'
import { useOutletContext } from 'react-router-dom';

const CardIteml = ({cardItem}) => {
  const {isDarkMode} = useOutletContext();
  return (
    <>
      {Array.from(cardItem).map((el, i) => {
        return <div key={i} className={`CardEffect ${isDarkMode ? 'dark-mode' : 'light-mode'}`}></div>
      })}
    </>
  )
}

export default CardIteml