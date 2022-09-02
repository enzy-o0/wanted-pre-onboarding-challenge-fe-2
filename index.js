/**
 * @typedef {Object} Item
 * @property {string} id
 * @property {string} content
 * @property {boolean} isCompleted
 * @property {string} category
 * @property {Array=} tags
 */

/** @function createTodo
 * @param {string} id
 * @param {string} content
 */
const createTodo = (id, content) => {};

/** @function readTodo
 * @param {string} id
 * @returns {Item}
 */
const readTodo = (id) => {};

/** @function updateTodo
 * @param {string} id
 * @param {Item=} item
 */
const updateTodo = (id, item) => {};

/** @function deleteTodo
 * @param {string} id
 */
const deleteTodo = (id) => {};
