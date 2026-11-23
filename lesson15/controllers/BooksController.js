const axios = require('axios');

class BooksController {

    async getAllBooks() {
        return await axios.get('https://demoqa.com/BookStore/v1/Books');
    }

    async getBook(isbn) {
        return await axios.get(`https://demoqa.com/BookStore/v1/Book?ISBN=${isbn}`);
    }

    async deleteAllBooks(authToken, userId) {
        return await axios.delete(`https://demoqa.com/BookStore/v1/Books?UserId=${userId}`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });
    }

    async addBook(authToken, userId, isbn) {
        return await axios.post(
            'https://demoqa.com/BookStore/v1/Books',
            {
                userId,
                collectionOfIsbns: [
                    {
                        isbn,
                    },
                ],
            },
            {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
                validateStatus: () => true,
            },
        );
    }
}

module.exports = new BooksController();
