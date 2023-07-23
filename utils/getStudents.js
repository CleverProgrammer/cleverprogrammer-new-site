// utils/getStudents.ts

export const getStudents = async () => {
  const response = await fetch('api/students')
  const students = await response.json()
  return students
}
