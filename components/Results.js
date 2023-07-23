import React from 'react'

const Results = ({ placedStudents, totalPlacedStudentsSalary }) => {
  let totalMonths = 0
  return (
    <>
      {placedStudents.length > 0 ? (
        <h3 style={{ textAlign: 'center' }}>
          We help our students land jobs with an average salary of{' '}
          <span style={{ backgroundColor: 'green' }}>
            $
            {Math.ceil(
              totalPlacedStudentsSalary / placedStudents.length
            ).toLocaleString('en-US')}
          </span>
          /year and average time span of{' '}
          {JSON.stringify(
            placedStudents.forEach(student => {
              if (typeof student.fields.AutoMonthsToPlacement === typeof 1) {
                console.log(student.fields.AutoMonthsToPlacement)
                totalMonths = totalMonths + student.fields.AutoMonthsToPlacement
              }
            })
          )}{' '}
          <span style={{ backgroundColor: '#ED6850' }}>
            {Math.floor(totalMonths / placedStudents.length)} months
          </span>{' '}
          👨‍💻.
        </h3>
      ) : (
        ''
      )}
    </>
  )
}

export default Results
