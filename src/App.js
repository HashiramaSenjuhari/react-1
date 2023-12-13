import React from 'react'


const styles = {
  header:{
    color: 'black',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.153)',
    width: '100vw',
    height: '10vh',
    textAlign: 'center',
  },
  para:{
    paddingTop: '15px',
    fontFamily: 'sans-serif',
    fontSize: '2rem'
  }
}
const App = () => {
  return (
    <>
    <div style={styles.header}>
      <p style={styles.para}>      hello Kalvium ,
      IAM HARIPRASATH the billionaire</p>
    </div>
    </>
  )
}

export default App