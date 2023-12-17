
# AA-X User Interface




## Features

- Loding screen. 
- Dashboard UI showing general vehicle information, bookings, vehicle image, engine and battery status.
- Toggling between different pages using the bottom navigation.
## Screenshots




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
