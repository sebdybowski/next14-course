'use client'
import { useOptimistic, useState } from 'react';

const wait = (value, time) =>
  new Promise((resolve) => setTimeout(() => resolve(value), time));

const List = () => {
  const [items, setItems] = useState([]);
  const [optimisticItems, setOptimisticItems] = useOptimistic(items);
  
  const formAction = async (formData) => {
    const label = formData.get('label');
    
    setOptimisticItems((state) => [...state, `${label} - optimistic`]);
    await wait(label, 2000);
    await fetch('http://google.com', {mode: 'no-cors'});
    setItems((state) => [...state, `${label} - server`]);
  }

  console.log({items, optimisticItems});

  return (
    <>
      <form
        className='mt-4'
        action={formAction}
      >
        <input name="label" className="p-2 rounded mr-1"/>
        <button type="submit" className="p-2 bg-green-500 rounded mr-1">Add</button>
      </form>
      <ul>  
        {optimisticItems.map((label, index) => (
          <li key={index}>{label}</li>
        ))}
      </ul>
    </>
  );
}
export default List;
