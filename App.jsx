import Offer from './offer';
import { list } from './data';
import { useState } from 'react';
export default function App() {
  const [counter, setCounter] = useState(new Array(list.length).fill(0));
  const [add, setAdd] = useState(0); // Initial sum
  const [netWorth,setNetWorth] = useState(200000000000)
  function updateCounter(x, i) {
    const tempArr = [...counter];
    tempArr[i] = x;
    setCounter(tempArr);

    const newAdd = list.reduce(
      (acc, item, index) => acc + item.price * tempArr[index],
      0
    );
    setAdd(newAdd); // Update sum on counter change
    const newNetWorth = 200000000000-newAdd;
    setNetWorth(newNetWorth)
  }


  const bill = list.filter((x) => counter[x.id] > 0) // Filter out items with zero quantity
  .map((x) => (
    <div key={x.id} className='flex flex-row items-center w-full justify-center money'>
      <div className  = "w-[200px]">{x.name}</div>
      <div className='w-[200px]'>${x.price}</div> 
      <div className='w-[50px]'>{counter[x.id]}</div> 
      <div className='w-[300px]'>${x.price * counter[x.id]}</div> 
    </div>
  ));


  const disp = list.map((x) => (
    <Offer
      key={x.id}
      {...list[x.id]}
      countChange={updateCounter}
      index={x.id}
      count={counter[x.id]}
      limit = {netWorth/x.price}
    />
  ));

  console.log(counter);
  return (
    <div className='flex flex-col items-center'>
      <h1 className="p-10 text-5xl text-white title text-center">
        Can You Spend ELON MUSK's Money?
      </h1>
      <h1 className='p-5 text-3xl text-white title text-center'>Networth: ${netWorth}</h1>
      <div className="w-[80%] h-auto m-10 flex flex-row justify-center flex-wrap">{disp}</div>

      <div className="text-center text-white">
        <p className='text-2xl p-5 title'>Bill</p>
        {bill}
        <p className='text-xl money p-5'>Total: ${add}</p>
      </div>
      <p className = "text-white">(Based on Neal.fun 's Spend Bill Gate's Money)</p>
      <a href = "https://neal.fun/spend/" className='text-white'>Link</a>
    </div>
  );
}
