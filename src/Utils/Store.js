const cards = [
  {
    id: 'Card-1',
    content: 'Learning how to cook',
    },
    {
      id: 'Card-2',
      content: 'Making a sandwich',
    },
    {
      id: 'Card-3',
      content: 'Taking the trash out',
    },
];

const data = {
  lists: {
    'list-1': {
  id: 'list-1',
  title: 'Todo',
  cards,
    }/*,
  'list-2': {
    id: 'list-2',
    title: 'Doing',
    cards: [
    {
      id: 'Card-4',
      content: 'Cloning trello',
      },
      {
        id: 'Card-5',
        content: 'Upload video to youtube',
      },
    ],
},*/
},
listIds: ['list-1'/*, 'list-2'*/],
};

/*const ListsReducer = (state = initialState, action) => {
switch (action.type) {
  default:
    return state;
    }
};*/

export default data;