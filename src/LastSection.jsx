function LastSection() {
  return (
    <section className="section-last">
      <div className="spine">
        <div className="grid-container">
          <div className="text-container">
            <h2>Limitations of BMI</h2>
            <p>
              {' '}
              Although BMI is often a practical indicator of healthy weight, it
              is not suited for every person. Specific groups should carefully
              consider their BMI outcomes, and in certain cases, the measurement
              may not be beneficial to use.
            </p>
          </div>
          <div className="grid-children child-1">
            <div className="heading-box">
              <div className="img-container">
                <img
                  src="../public/images/icon-gender.svg"
                  alt="gender image"
                />
              </div>
              <h3>Gender</h3>
            </div>
            <p>
              {' '}
              The development and body fat composition of girls and boys vary
              with age. Consequently, a child&#39;s age and gender are
              considered when evaluating their BMI.
            </p>
          </div>
          <div className="grid-children child-2">
            <div className="heading-box">
              <div className="img-container">
                <img src="../public/images/icon-age.svg" alt="age image" />
              </div>
              <h3>Age</h3>
            </div>
            <p>
              In aging individuals, increased body fat and muscle loss may cause
              BMI to underestimate body fat content.
            </p>
          </div>
          <div className="grid-children child-3">
            <div className="heading-box">
              <div className="img-container">
                <img
                  src="../public/images/icon-muscle.svg"
                  alt="muscle image"
                />
              </div>
              <h3>Muscle</h3>
            </div>
            <p>
              BMI may misclassify muscular individuals as overweight or obese,
              as it doesn&#39;t differentiate muscle from fat.
            </p>
          </div>
          <div className="grid-children child-4">
            <div className="heading-box">
              <div className="img-container">
                <img
                  src="../public/images/icon-pregnancy.svg"
                  alt="muscle image"
                />
              </div>
              <h3>Pregnancy</h3>
            </div>
            <p>
              Expectant mothers experience weight gain due to their growing
              baby. Maintaining a healthy pre-pregnancy BMI is advisable to
              minimise health risks for both mother and child.
            </p>
          </div>
          <div className="grid-children child-5">
            <div className="heading-box">
              <div className="img-container">
                <img src="../public/images/icon-race.svg" alt="race image" />
              </div>
              <h3>Race</h3>
            </div>
            <p>
              Certain health concerns may affect individuals of some Black and
              Asian origins at lower BMIs than others. To learn more, it is
              advised to discuss this with your GP or practice nurse.
            </p>
          </div>
          <img
            className="curved-right"
            src="../public/images/pattern-curved-line-right.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

export default LastSection
