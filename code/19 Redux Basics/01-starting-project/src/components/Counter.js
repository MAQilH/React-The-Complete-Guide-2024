import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/index';

const Counter = () => {
  const dispatch = useDispatch()
  const {counter, show} = useSelector(state => {
    return {
      show: state.counter.show,
      counter: state.counter.counter  
    }
  })
  
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  function incrementHandler() {
    dispatch(counterActions.increment())
  }

  function decrementHandler() {
    dispatch(counterActions.decrement())
  }

  function increase() {
    dispatch(counterActions.increase(10))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Inc</button>
        <button onClick={increase}>Increase by 10</button>
        <button onClick={decrementHandler}>Dec</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
