// import { fetchAPI } from '@api/api';

// export const initializeTimes = () => {
//     return fetchAPI(new Date());
//   };

export const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state, action) => {
    switch(action.type) {
        case 'UPDATE_TIMES':
            return action.times;
        default:
            return state;
    }
};