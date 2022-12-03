const cards = [
  {
    id: 'card-1',
    content: 'Learn Back End Node.js'
  },
  {
    id: 'card-2',
    content: 'Build Full Stack Projects'
  },
  {
    id: 'card-3',
    content: 'Work as Freelance'
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
      content: 'Improve My React Skills'
      },
      {
        id: 'Card-5',
        content: 'Build React Projects'
      }
    ]
},
  },
  listIds: ['list-1', 'list-2'],
};

export default data;