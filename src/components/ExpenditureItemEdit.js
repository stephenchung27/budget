import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  editView: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'space-between',
    "& *": {
      width: "calc(100%/4)"
    },
  },
});

function ExpenditureItemEdit({ editMode }) {
  const classes = useStyles()

  if (editMode) {
    return <div className={classes.editView}>
      <div>$18.05</div>
      <div>Stuff</div>
      <div>Seongsil's Card</div>
      <div>Fixed Expenditure</div>
    </div>
  } else {
    return <div className={classes.editView}>
      <input type='text' value='$18.05' />
      <select>
        <option>Stuff</option>
      </select>
      <select>
        <option>Seongsil's Card</option>
        <option>Stephen's Card</option>
        <option>Cash</option>
      </select>
      <select>
        <option>Fixed Expenditure</option>
        <option>Varied Expenditure</option>
        <option>Savings</option>
      </select>
    </div>
  }
}

export default ExpenditureItemEdit;