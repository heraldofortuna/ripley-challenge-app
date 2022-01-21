# Reto de Ripley

![Project Image](./frontend/src/assets/screenshot1.png)

> Screenshot - List of clients

![Project Image](./frontend/src/assets/screenshot2.png)

> Screenshot - Add a new client

---

## Table of Contents

- [Description](#description)
- [How to use?](#how-to-use)
- [References](#references)
- [License](#license)
- [Author](#author)

---

## Description

You must implement a web application that allows keep track of different places to eat. The application is quite simple: so you only need to display a table that shows the information from the database. It is not registration or login is required.

### Technologies

- Node.js
- Express
- HTML
- CSS
- JavaScript
- ReactJS
- Styled components
- MySQL

[Go up](#reto-de-ripley)

---

## How to use?

### Prepare and run the backend:

First, after cloning the project locally, install Pipenv using pip: (Note: Depending on your installation, you may need to use pip3 instead of pip.)

```html
$ pip install pipenv
```

And activate a new virtual environment:

```html
$ pipenv shell
```

Install Django using Pipenv:

```html
$ pipenv install django
```

Now, navigate into the directory:

```html
$ cd backend
```

Run migrations:

```html
$ python3 manage.py migrate
```

And start up the server:

```html
$ python3 manage.py runserver
```

Finally, navigate to http://localhost:8000 in your web browser.

### Prepare and run the frontend:

First, navigate into the directory:

```html
$ cd frontend
```

Next, install dependencies using yarn (node version v16.13.1):

```html
yarn install
```

Enter and run the following sentence in your console:

```html
yarn start
```

to enter developer mode.

Finally, open [http://localhost:3000](http://localhost:3000) to see it in your default browser.

---

## References

Tutorial of DigitalOcean community:

```html
https://www.digitalocean.com/community/tutorials/build-a-to-do-application-using-django-and-react
```

Django official documentation:

```html
https://docs.djangoproject.com/en/4.0/
```

ReactJS official documentation:

```html
https://reactjs.org/docs/getting-started.html
```

Loader component:

```html
https://icons8.com/cssload/en/horizontal-bars
```

[Go up](#reto-de-ripley)

---

## Comments

- You can filter the table, in addition to sorting in ascending and descending order with respect to various fields.

- Honestly, I managed to finish all the application requirements except one: Filtered by backend. I feel like I lacked time and knowledge about backend.

- The application is responsive.

- I had a problem this year-end holiday so I was 2 whole days late. I sincerely hope that there is still time to deliver the project and you can review it.

[Go up](#reto-de-ripley)

---

## License

MIT License

Copyright (c) [2021] [Heraldo Fortuna]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[Go up](#reto-de-ripley)

---

## Author

- Twitter - [@heraldofortuna](https://twitter.com/heraldofortuna)
- GitHub - [heraldofortuna](https://github.com/heraldofortuna)
- Linkedin - [heraldofortuna](https://www.linkedin.com/in/heraldo-fortuna/)

[Go up](#reto-de-ripley)
