# Node.js Login System

A simple Node.js application for user authentication, including login and registration functionalities.

## Features

- User registration
- User login
- JWT-based authentication

## Requirements

- Node.js (>= 14.x)
- npm (>= 6.x)
- MongoDB (or another database of your choice)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MYusron12/nodejs-login.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd nodejs-login
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Create a `.env` file in the root directory and add the following environment variables:**

   ```env
   JWT_SECRET=your_jwt_secret_key
   MONGO_URI=your_mongo_database_uri
   ```

5. **Start the application:**

   ```bash
   npm start
   ```

   The server will start on `http://localhost:3000` by default.

## API Endpoints

- **POST /api/auth/register**
  Register a new user.
  **Request Body:**

  ```json
  {
    "username": "string",
    "password": "string",
    "name": "string",
    "address": "string"
  }
  ```

- **POST /api/auth/login**
  Authenticate a user and get a JWT token.
  **Request Body:**

  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```

  **Response:**

  ```json
  {
    "token": "jwt_token_string"
  }
  ```

- **POST /api/auth/verify**
  Verify the JWT token.
  **Request Body:**

  ```json
  {
    "token": "jwt_token_string"
  }
  ```

  **Response:**

  ```json
  {
    "valid": true,
    "user": {
      "id": "user_id",
      "username": "username",
      "name": "name",
      "address": "address"
    }
  }
  ```

## Testing

To run tests, use:

```bash
npm test
```

## Contributing

If you want to contribute to this project, please fork the repository and submit a pull request with your changes. Ensure that your code follows the project's coding style and includes appropriate tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by various authentication systems
- Uses [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) for JWT handling
- Uses [express](https://expressjs.com/) for building the REST API

```

### Penjelasan:

- **Features:** Menyebutkan fitur utama dari aplikasi.
- **Requirements:** Daftar dependensi yang diperlukan untuk menjalankan aplikasi.
- **Installation:** Langkah-langkah untuk menginstal dan menjalankan aplikasi.
- **API Endpoints:** Dokumentasi untuk endpoint API yang disediakan oleh aplikasi.
- **Testing:** Instruksi untuk menjalankan tes.
- **Contributing:** Panduan untuk kontribusi.
- **License:** Informasi lisensi proyek.
- **Acknowledgments:** Penghargaan kepada alat atau pustaka yang digunakan dalam proyek.
```
