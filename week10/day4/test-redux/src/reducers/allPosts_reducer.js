export default function(state = [], action) {
    switch (action.type) {
        case 'ADD_POST':
            let allPosts = [action.payload, ... state];
            return allPosts;
        default:
            return state;
    }
}