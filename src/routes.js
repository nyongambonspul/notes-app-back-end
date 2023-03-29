const { 
  addNoteHandler, 
  getAllNotesHandler, 
  getAllNoteByIdHandler,
  deleteNoteByIdHandler, 
} = require("./handler");

const routes = [
  { 
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler   
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getAllNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
 },

];

module.exports = routes;
