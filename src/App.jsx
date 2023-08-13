import { useState } from 'react'

import Radio from './Radio'
import Inputs from './Inputs'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import LastSection from './LastSection'

const initialState = {
  system: 'metric',
  cm: 0,
  kg: 0,
  feet: 0,
  inch: 0,
  stone: 0,
  pounds: 0,
}

function App() {
  const [measurements, setMeasurements] = useState(initialState)
  const { cm, kg, feet, inch, stone, pounds, system } = measurements

  function handleInputs(inputType, value) {
    if (inputType === 'system') {
      setMeasurements({
        system: value,
        cm: 0,
        kg: 0,
        feet: 0,
        inch: 0,
        stone: 0,
        pounds: 0,
      })
    } else setMeasurements({ ...measurements, [inputType]: value })
  }

  function calcMetricBMI(cm, kg) {
    const bmi = (kg / (cm / 100) ** 2).toFixed(1)
    if (isNaN(bmi)) return 0
    return bmi
  }
  function calcImpBMI(stone, pounds, feet, inch) {
    const height = feet * 12 + inch
    const weight = stone * 14 + pounds
    const bmi = ((weight / height ** 2) * 703).toFixed(1)
    if (isNaN(bmi)) return 0
    return bmi
  }
  const metricBMI = calcMetricBMI(cm, kg)
  const impBMI = calcImpBMI(stone, pounds, feet, inch)

  function calcIdealMetricWeight(cm) {
    const lowerWeight = (18.5 * (cm / 100) ** 2).toFixed(1)
    const upperWeight = (24.9 * (cm / 100) ** 2).toFixed(1)
    return { lowerWeight, upperWeight }
  }
  function calcIdealImpWeight(feet, inch) {
    const height = feet * 12 + inch
    const lowerWeight = ((18.5 * height ** 2) / 703).toFixed(1)
    const upperWeight = ((24.9 * height ** 2) / 703).toFixed(1)
    const lowerStone = parseInt(lowerWeight / 14)
    const lowerPounds = parseInt(lowerWeight % 14)
    const upperStone = parseInt(upperWeight / 14)
    const upperPounds = parseInt(upperWeight % 14)
    return { lowerStone, lowerPounds, upperStone, upperPounds }
  }
  const idealMetricRange = calcIdealMetricWeight(cm)
  const idealImpRange = calcIdealImpWeight(feet, inch)

  function healthyRangeCheck(bmi) {
    let verdict = ''
    if (bmi < 18.5) {
      verdict = ' underweight'
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      verdict = ' healthy weight'
    } else if (bmi >= 25 && bmi < 29.9) {
      verdict = ' overweight'
    } else {
      verdict = ' obese'
    }
    return verdict
  }

  return (
    <main>
      <section className="section-top">
        <div className="spine">
          <div className="section-top-container">
            <div className="content-container">
              <img src="../public/images/logo.svg" alt="" className="logo" />
              <h1>Body Mass Index Calculator</h1>
              <p>
                Better understand your weight in relation to your height using
                our body mass index (BM) calculator. While BMI is not the sole
                determinant of a healthy weight, it offers a valuable starting
                point to evaluate your overall health and well-being.
              </p>
            </div>
            <article className="card">
              <h2>Enter your details below</h2>
              <Radio onHandleInputs={handleInputs} />
              <Inputs
                onHandleInputs={handleInputs}
                system={measurements.system}
              />
              <div className="results-summary">
                {!metricBMI && !impBMI ? (
                  <div className="welcome-msg">
                    <p>Welcome!</p>
                    <p>
                      Enter your height and weight and you'll see your BMI
                      result here
                    </p>
                  </div>
                ) : (
                  <div className="results">
                    <div className="results-box">
                      <p>Your BMI is...</p>
                      <p className="bmi-results">
                        {system === 'metric' && metricBMI}
                      </p>
                      <p className="bmi-results">
                        {system === 'imperial' && impBMI}
                      </p>
                    </div>
                    <div className="results-text">
                      <p>
                        Your BMI suggests you are
                        {system === 'metric'
                          ? healthyRangeCheck(metricBMI)
                          : healthyRangeCheck(impBMI)}
                        .
                      </p>
                      {system === 'metric' ? (
                        <p>
                          Your ideal weight is between{' '}
                          <span>
                            {idealMetricRange.lowerWeight} kg ~{' '}
                            {idealMetricRange.upperWeight} kg.
                          </span>
                        </p>
                      ) : (
                        <p>
                          Your ideal weight is between{' '}
                          <span>
                            {idealImpRange.lowerStone}
                            st {idealImpRange.lowerPounds}lbs ~{' '}
                            {idealImpRange.upperStone}st{' '}
                            {idealImpRange.upperPounds}
                            lbs.
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </article>
          </div>
        </div>
      </section>
      <SecondSection />
      <ThirdSection />
      <LastSection />
    </main>
  )
}

export default App
