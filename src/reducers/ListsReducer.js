const initialState = [
  {
  title: 'title',
  id: 0,
  cards:
    [
      {
      id: 0,
      text: '1 card'
      },
      {
      id: 1,
      text: '2 card'
      }
    ]
  }
];

const ListsReducer = (state = initialState, action) => {
switch (action.type) {
  default:
    return state;
    }
};

export default ListsReducer;