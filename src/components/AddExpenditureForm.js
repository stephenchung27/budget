import React from 'react';

function AddExpenditureForm() {
  return <div>
    <input type="number" />
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
    <button>Submit</button>
  </div>
}

export default AddExpenditureForm;
