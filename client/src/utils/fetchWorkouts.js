const fetchWorkouts = () => {
  return fetch('/api/workouts')
    .then(res => {
      return res.json();
    })
    .catch(error => {
      console.log(error);
    });
};

export default fetchWorkouts;