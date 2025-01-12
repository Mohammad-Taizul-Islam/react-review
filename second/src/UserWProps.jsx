import PropTypes from 'prop-types';


const UserWProps = (props) => {
  return (
    <section>
      <img src={props.img} width={200} alt={props.name}/>
       <h1>Name :{props.name}</h1>
      <h4>Email :{props.email} </h4>
      <h4>Age : {props.age}</h4>
        <h4>Locations :{props.locations} </h4>
        <h4>isMarried :{props.isMarried} </h4>
        <h4>Hobbies {
           props.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
           ))
          }</h4>
    </section>
  );
};

UserWProps.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isMarried: PropTypes.bool.isRequired,
  locations: PropTypes.string.isRequired,
  hobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default UserWProps;
