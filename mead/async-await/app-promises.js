const users = [
  {
    id: 1,
    name: 'Andrew',
    schoolId: 101 
  },
  {
    id: 2,
    name: 'Jessica',
    schoolId: 999 
  },
]

const grades = [
  {
    id: 1,
    schoolId: 101,
    grade: 86
  },
  {
    id: 2,
    schoolId: 999,
    grade: 100
  },
  {
    id: 3,
    schoolId: 101,
    grade: 80
  },
]

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    const user = users.find(u => u.id === id )

    if (user) {
      resolve(user)
    } else {
      reject(`Unable to locate user with id of ${id}`)
    }
  })
}

const getGrades = (schoolId) => {
  return new Promise((resolve, reject) => {
    resolve(grades.filter(grade => grade.schoolId === schoolId))
  })
}

const getStatus = async (userId) => {
  const user = await getUser(userId)
  const grades = await getGrades(user.schoolId)
  return grades.map(grade => grade.grade).reduce((a, b) => a + b) / grades.length
}

getStatus(1).then(e => console.log(e))
