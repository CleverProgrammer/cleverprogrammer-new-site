import React, { useEffect } from 'react'
import StudentCard from './StudentCard'
import styles from '../styles/Home.module.css'
import { getStudents } from '../utils/getStudents'

const AllStudentCards = ({ setPlacedStudents, placedStudents }) => {
  useEffect(() => {
    const fetchStudents = async () => {
      const { students } = await getStudents()
      console.log(students, '🔥')

      setPlacedStudents(students)
    }
    fetchStudents()
  }, [])

  return (
    <div className={styles.grid}>
      {placedStudents && placedStudents.length > 0
        ? placedStudents.map((student, index) => (
            <StudentCard
              student={student}
              key={index}
              placedStudents={placedStudents}
            />
          ))
        : ''}
    </div>
  )
}

export default AllStudentCards
