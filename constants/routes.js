
const createPost = {
    title: 'Create post form',
    submitText: 'Create post',
    inputsSettings: [
        { type: 'text', name: 'title', placeholder: 'Post title', required: true },
        { type: 'text', name: 'content', placeholder: 'Post content', required: true, isTextArea: true },
    ]
};

module.exports = {
    forms: {
        createPost
    }
};
