export default {
    name: 'comment',
    type: 'document',
    title: 'Comment',
    fields: [
        {
            name: 'name',
            type: 'string',
        },
        {
            title: 'Approved',
            name: 'approved',
            type: 'boolean',
            description: `Comments won't shoe on the site without approval`,
        },
        {
            name: 'email',
            type: 'string',
        },
        {
            name: 'comment',
            type: 'string',
        },
        {
            name: 'post',
            type: 'reference',
            to: [{type: 'post' }],
        },
    ],
}