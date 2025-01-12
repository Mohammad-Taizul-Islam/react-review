import PropTypes from 'prop-types'

Person.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}

// export default Person
const Person = ({name,age}) => {
  return (
    <div>
      <h1>Name : {name} </h1>
      <h4>AGe : {age} </h4>
    </div>
  )
}

export default Person
