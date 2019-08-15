export const removeFeature = (feature) => {
    console.log(feature)
  return { 
    type: 'REMOVE_FEATURE',
    payload: feature
    };
};

// write an action creator for update title
export const buyItem = (feature) => {
    return {
        type: 'BUY_ITEM',
        payload: feature
    };
};

