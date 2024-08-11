import { useReducer } from 'react'
import './calculator.css'

function calculation(value) {
  try {
    const lastCharacter = value[value.length - 1]
    let result

    if (isNaN(lastCharacter)) {
      const calcPart = eval(value.slice(0, -1))
      result = lastCharacter === '.' ? calcPart : eval(`${calcPart}${lastCharacter}${calcPart}`)
    } else {
      result = eval(value)
    }

    if (/\.\d{3,}$/.test(result)) {
      result = result.toFixed(2)
    }

    return result.toString()
  } catch {
    return 'ERROR'
  }
}

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_INPUT': {
      if (state.currentInput === 'ERROR') {
        return { currentInput: action.payload }
      } else {
        return { ...state, currentInput: state.currentInput + action.payload }
      }
    }
    case 'CLEAR_INPUT':
      return { ...state, currentInput: '' }
    case 'CALCULATE_INPUT': {
      return { ...state, currentInput: calculation(state.currentInput) }
    }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(calculatorReducer, {
    currentInput: '',
  })

  const handleButtonClick = (value) => {
    if (value === '=') {
      dispatch({ type: 'CALCULATE_INPUT' })
    } else if (value === 'clear') {
      dispatch({ type: 'CLEAR_INPUT' })
    } else {
      dispatch({ type: 'ADD_TO_INPUT', payload: value })
    }
  }

  return (
    <div className="calculator--wrapper">
      <div className="calculator">
        <div className="display" data-testid="display">
          {state.currentInput || '0'}
        </div>
        <div className="buttons">
          <div className="button--container button--container__manipulation">
            <button onClick={() => handleButtonClick('+')}>+</button>
            <button onClick={() => handleButtonClick('-')}>-</button>
            <button onClick={() => handleButtonClick('*')}>*</button>
            <button onClick={() => handleButtonClick('/')}>/</button>
          </div>
          <div className="button--container">
            <div className="button--container__number">
              <div className="button--line">
                <button onClick={() => handleButtonClick('7')}>7</button>
                <button onClick={() => handleButtonClick('8')}>8</button>
                <button onClick={() => handleButtonClick('9')}>9</button>
              </div>
              <div className="button--line">
                <button onClick={() => handleButtonClick('4')}>4</button>
                <button onClick={() => handleButtonClick('5')}>5</button>
                <button onClick={() => handleButtonClick('6')}>6</button>
              </div>
              <div className="button--line">
                <button onClick={() => handleButtonClick('1')}>1</button>
                <button onClick={() => handleButtonClick('2')}>2</button>
                <button onClick={() => handleButtonClick('3')}>3</button>
              </div>
              <div className="button--line">
                <button data-testid="zero-button" onClick={() => handleButtonClick('0')}>
                  0
                </button>
                <button onClick={() => handleButtonClick('.')}>.</button>
                <button data-testid="clear" onClick={() => handleButtonClick('clear')}>
                  C
                </button>
              </div>
            </div>
            <button className="button__sum" onClick={() => handleButtonClick('=')}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
