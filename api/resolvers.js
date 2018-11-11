const defaultData = [
	{
		id: 1,
		name: 'Luke SkyWaler',
		gender: 'male',
    homeworld: 'Tattoine',
    about: "Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known."
	},
	{
		id: 2,
		name: 'R2D2',
		gender: 'bot',
    homeworld: 'Naboo',
    about: "A resourceful astromech droid, R2-D2 served Padmé Amidala, Anakin Skywalker and Luke Skywalker."
  },
  {
		id: 2,
		name: 'Obi-Wan Kenobi',
		gender: 'male',
    homeworld: 'Stewjon',
    about: "A legendary Jedi Master, Obi-Wan Kenobi was a noble man and gifted in the ways of the Force."
  }
  
];


const resolvers = {
  Query: {
    allPeople: () => {
      return defaultData;      
    },
    person: (root, { id }) => {
      return defaultData.find(p => p.id === id);
    }
  }
}

export default resolvers;