import { KeyboardEvent } from 'react';
import { css } from '@emotion/css';
import Plus from '../images/plus.svg';
import { mqMax } from '../util/constants';

interface Props {
  addTodo: (todo: any) => void;
}

const generatorStyle = css({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  WebkitUserSelect: 'none',
  msUserSelect: 'none',
  userSelect: 'none',
});

const inputStyle = css({
  width: '100%',
  height: '56px',
  borderRadius: '4px',
  outline: 'none',
  border: 'none',
  background: 'rgba(0, 0, 0, 0.05)',
  fontFamily: 'Inter',
  fontSize: '21px',
  padding: '0 50px',
  margin: '15px 0',
  [mqMax[1]]: {
    height: '48px',
    fontSize: '16px',
  },
});

const plusStyle = css({
  position: 'absolute',
  margin: '0 20px',
  cursor: 'pointer',
});

const ToDoGenerator = (props: Props) => {
  const addTodo = () => {
    const generator = document.getElementById('generator') as HTMLInputElement;
    if (generator.value) {
      props.addTodo({
        completed: false,
        content: generator.value,
      });
    }
  };

  const detectEnter = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className={generatorStyle}>
      <img src={Plus} alt='Plus' className={plusStyle} onClick={addTodo} />
      <input
        type='text'
        id='generator'
        className={inputStyle}
        placeholder='Add a to-do...'
        onKeyPress={detectEnter}
      />
    </div>
  );
};

export default ToDoGenerator;
