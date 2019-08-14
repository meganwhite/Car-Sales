export const removeFeature = () => {
  console.log('action creator was invoked');
  return { type: 'REMOVE_FEATURE' };
};

// write an action creator for update title
export const buyItem = feature => {
    console.log('action creator was invoked');
    return {
        type: 'BUY_ITEM',
        payload: feature
    };
};

