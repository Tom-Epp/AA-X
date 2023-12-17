
# AA-X User Interface




## Features

- Loading screen. 
- Dashboard UI showing general vehicle information, bookings, vehicle image, engine and battery status.
- Toggling between different pages using the bottom navigation.
## Screenshots

![Interface prototype](https://github.com/Tom-Epp/AA-X/assets/39195851/0849cac8-ec4e-4606-964e-852f083c1d9e)

![Loading](https://github.com/Tom-Epp/AA-X/assets/39195851/afe2afcb-b736-4106-8a05-a08e6dcf1e78)

![Dashboard ](https://github.com/Tom-Epp/AA-X/assets/39195851/2107bc04-d869-4866-8d80-7f1c498c897d)

![Dashboard](https://github.com/Tom-Epp/AA-X/assets/39195851/8e1cc610-1430-4366-addb-ca0b7e32fdc1)

![Bookings](https://github.com/Tom-Epp/AA-X/assets/39195851/eb803518-835d-4572-a372-2b749fd415e9)


## Deployment

To deploy this project run

```bash
  npm install && npm run dev
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Lessons Learned

- There is a common bug when using Font Awesome icons with static site generators that use server side rendering, like Gatsby.js and Next.js that causes the icon is being rendered before the CSS is loaded.

- Next.js 14 uses SSR by defualt. 
