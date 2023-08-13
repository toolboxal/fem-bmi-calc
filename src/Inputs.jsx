import { useState, useEffect } from 'react'

function Inputs({ onHandleInputs, system }) {
  const [inputs, setInputs] = useState({
    cm: '',
    kg: '',
    feet: '',
    inch: '',
    stone: '',
    pounds: '',
  })
  function handleChange(e) {
    const inputType = e.target.id
    const inputValue = e.target.value
    setInputs({ ...inputs, [inputType]: inputValue })
    onHandleInputs(inputType, Number(inputValue))
  }

  useEffect(() => {
    setInputs({
      cm: '',
      kg: '',
      feet: '',
      inch: '',
      stone: '',
      pounds: '',
    })
  }, [system])

  return (
    <div>
      {system === 'metric' ? (
        <div className="metric-inputs">
          <div className="input-label-container">
            <label htmlFor="cm">Height</label>
            <div className="input-unit-container">
              <input
                type="text"
                name="cm"
                id="cm"
                onChange={handleChange}
                value={inputs.cm}
              />
              <span>cm</span>
            </div>
          </div>
          <div className="input-label-container">
            <label htmlFor="kg">Weight</label>
            <div className="input-unit-container">
              <input
                type="text"
                name="kg"
                id="kg"
                onChange={handleChange}
                value={inputs.kg}
              />
              <span>kg</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="imperial-inputs">
          <div className="input-label-container">
            <label htmlFor="feet">Height</label>
            <div className="input-unit-container">
              <input
                type="text"
                name="feet"
                id="feet"
                onChange={handleChange}
                value={inputs.feet}
              />
              <span>ft</span>
            </div>
          </div>
          <div className="input-label-container">
            <div className="input-unit-container">
              <input
                type="text"
                name="inch"
                id="inch"
                onChange={handleChange}
                value={inputs.inch}
              />
              <span>in</span>
            </div>
          </div>
          <div className="input-label-container">
            <label htmlFor="feet">Weight</label>
            <div className="input-unit-container">
              <input
                type="text"
                name="stone"
                id="stone"
                onChange={handleChange}
                value={inputs.stone}
              />
              <span>st</span>
            </div>
          </div>
          <div className="input-label-container">
            <div className="input-unit-container">
              <input
                type="text"
                name="pounds"
                id="pounds"
                onChange={handleChange}
                value={inputs.pounds}
              />
              <span>lbs</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Inputs
