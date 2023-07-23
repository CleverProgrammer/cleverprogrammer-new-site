import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const StudentCard = ({ student, placedStudents }) => {
  // console.log('🔫🚀')
  return (
    <div className={styles.card}>
      {placedStudents.length > 0 ? (
        <>
          <div style={{ display: 'flex' }}>
            <img src={student.fields.Photo[0].url} alt='' />
            <div style={{ alignSelf: 'center' }}>
              <h2 style={{ alignSelf: 'center', marginLeft: '15px' }}>
                {student.fields.Name}
              </h2>
              <div className={styles.companyLogo}>
                <img src={student.fields.CompanyLogo[0].url} />
              </div>
            </div>
          </div>
          <h3>{student.fields.Headline}</h3>
          <p>{student.fields.Story}</p>
          {/* <div className={styles.proofImages}>
            {student.fields.Proof &&
              student.fields.Proof.map((proof, index) => (
                <Image
                  key={index}
                  className={styles.proofImage}
                  src={proof.url}
                  alt={`Proof ${index + 1}`}
                  width={50}
                  height={50}
                />
              ))}
          </div> */}
        </>
      ) : (
        ''
      )}
    </div>
  )
}

export default StudentCard
