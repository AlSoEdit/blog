
export const ADD_POST = 'ADD_POST';
export function addPost(postData) {
    return {
        type: ADD_POST,
        payload: postData
    };
}
