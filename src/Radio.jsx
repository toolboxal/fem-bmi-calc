import { useState } from 'react'

function Radio({ onHandleInputs }) {
  const [radioValue, setRadioValue] = useState('metric')
  function handleClick(e) {
    setRadioValue(e.target.value)
    onHandleInputs('system', e.target.value)
  }
  return (
    <div className="radios-container">
      <div className="radio-wrapper">
        <input
          type="radio"
          name="radio"
          id="metric"
          value="metric"
          onChange={handleClick}
          checked={radioValue === 'metric'}
        />
        <label htmlFor="metric">Metric</label>
      </div>
      <div className="radio-wrapper">
        <input
          type="radio"
          name="radio"
          id="imperial"
          value="imperial"
          onChange={handleClick}
        />
        <label htmlFor="imperial">Imperial</label>
      </div>
    </div>
  )
}

export default Radio
