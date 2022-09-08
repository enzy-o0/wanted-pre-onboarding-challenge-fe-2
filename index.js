/**
 * @typedef {Object} Item
 * @property {string} id
 * @property {string} content
 * @property {boolean} isCompleted
 * @property {string} category
 * @property {Array<string>=} tags
 */

/** @function createTodo
 * @param {string} id
 * @param {string} content
 * @param {string} category
 * @param {Array<string>=} tags
 */

let todoArr = [Item];
const createTodo = (id, content, category, tags) => {
  const item = {
    id: id,
    content: content,
    isCompleted: false,
    category: category,
    tags: tags,
  };

  return todoArr.push(item);
};

/** @function readTodo
 * @param {string} id
 * @returns {Item}
 */
const readTodo = (id) => {
  return todoArr.find((todo) => todo.id === id);
};

/** @function readAllTodo
 * @returns {Item}
 */
const readAllTodo = () => {
  return todoArr;
};

/** @function updateTodo
 * @param {string} id
 * @param {Item=} item
 */
const updateTodo = (id, content, isCompleted, category, tags) => {
  const todo = {
    content: content,
    isCompleted: isCompleted,
    category: category,
    tags: tags,
  };

  let idx = todoArr.findIndex((todo) => todo.id === id);
  return (todoArr[idx] = todo);
};

/** @function deleteTodo
 * @param {string} id
 */
const deleteTodo = (id) => {
  let idx = todoArr.findIndex((todo) => todo.id === id);
  return delete todoArr[idx];
};
