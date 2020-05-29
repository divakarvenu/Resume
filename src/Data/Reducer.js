const Reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { ...state , 'Name' : 'nithya' };
      default:
        throw new Error();
    }
};

export default Reducer;