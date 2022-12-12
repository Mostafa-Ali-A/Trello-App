const cards = [
  {
    id: 'card-1',
    title: 'Learn Back End Node.jsLearn Back End Node.jsLearn Back End Node.js'
  },{
    id: 'card-2',
    title: 'Build Full Stack Projects1'
  },
  {
    id: 'card-3',
    title: 'Work as Freelance'
  }
];

const data = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'To Do',
      cards
    },
  'list-2': {
    id: 'list-2',
    title: 'Doing',
    cards: [
    {
      id: 'Card-4',
      title: 'Improve My React Skills'
      },
      {
        id: 'Card-5',
        title: 'Build React Projects'
      }
    ]
},
  },
  listIds: ['list-1', 'list-2'],
};

export default data;