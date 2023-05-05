import { Grid } from '../components/Grid';
import { useState } from 'react';

function Countdown() {
  const [innerText, setText] = useState('');

  var countDownDate = new Date('Dec 7, 2023 00:00:00').getTime();

  const fun = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setText(`${days}d ${hours}h ${minutes}m ${seconds}s`);

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(fun);
      setText('We done');
    }
  }, 1000);

  return (
    <>
      <div className='dae-container' id='demo'>
        {innerText}
      </div>
      <Grid />
    </>
  );
}

export default Countdown;
