const { addNoteHandler, getAllNotesHandler } = require('./handler')
const handler = require('./handler')

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: handler.getNoteById,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: handler.editNoteById,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: handler.deleteNoteById,
    },
]

module.exports = { routes }
