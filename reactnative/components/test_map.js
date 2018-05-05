console.log(
  "laws",
  this.props.laws.filter(({ _id }) =>
    votes.find(obj => Object.keys(obj).includes(_id))
  )
);

console.log(votes, "votes");
