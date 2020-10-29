import React, { useState } from 'react';
import ExpenditureList from './ExpenditureList';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  card: {
    margin: 5,
    width: "calc(100vw/3)",
  },
  header: {
    padding: 5,
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid black",
  },
  content: {
    padding: 5,
    marginTop: -1,
    border: "1px solid black",
  },
})

function ExpenditureCategoryCard({ category }) {
  const [isOpen, setIsOpen] = useState(true);
  const classes = useStyles()

  return <div className={classes.card}>
    <div className={classes.header}>
      <div>
        {category}
      </div>
      <button onClick={() => setIsOpen(!isOpen)}>
        Toggle
      </button>
    </div>
    <div className={classes.content}>
      {isOpen && <ExpenditureList />}
    </div>
  </div>
}

export default ExpenditureCategoryCard;
