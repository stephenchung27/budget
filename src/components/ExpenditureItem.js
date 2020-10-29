import React, {useState} from 'react';
import ExpenditureItemEdit from './ExpenditureItemEdit';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  item: {
    display: 'flex',
  }
});

function ExpenditureItem() {
  const classes = useStyles();
  const [editMode, setEditMode] = useState(true);

  return <div className={classes.item}>
    <ExpenditureItemEdit editMode={editMode} />
    <div>
      <button onClick={() => setEditMode(!editMode)}>{editMode ? "Edit" : "Save"}</button>
      <button>Delete</button>
    </div>
  </div>
}

export default ExpenditureItem;