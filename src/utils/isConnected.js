const isConnected = localStorage.getItem('@weser/connected');
const dataUserStorage = localStorage.getItem('@user-data');
const UserStorage = JSON.parse(dataUserStorage);

module.exports = { isConnected: isConnected, dataStorage: UserStorage };
