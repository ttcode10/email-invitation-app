# Email Invitation App

An email sign up page [Demo Link](https://email-invitation-app.vercel.app)

Built with
![](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![](https://img.shields.io/badge/Chakra_UI-319795?style=flat-square&logo=chakraui&logoColor=white)
![](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white)
![](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

Version. Commits. Unit Test Coverage. Pipeline State.

## Features

- Enter name and email to request invitation
- Input validation and error handling
  - Name: at least 3 characters long
  - Email: correct email format
  - Confirm email: match with previous one
- Proper frontend and backend communication
  - Only post request to backend when all fields are valid
  - Handle 200 and 400 server response
- Show respective interaction for different server returns
  - 200: switch to a success popup, redirect to homepage after dismiss it
  - 400: display error message, allow user to re-attempt the submission
- Responsive design and mobile friendly

## Development Tasks
```
Tasks
├── Dev env setup
│   ├── React init
│   ├── Add eslint, prettier, husky
│   └── Template files clean up
├── Deploy
│   └── Setup vercel
├── Static UI
│   ├── Define themes and shared components
│   ├── Homepage background, header and footer
│   ├── Modal
│   ├── Form fields
│   └── Input validation
├── Data transmission
│   ├── Axios setup
│   ├── Post data
│   ├── Success response
│   └── Failed response
├── UX improvements
│   ├── Responsive web
│   ├── Waiting state and spinner
│   └── Animation
└── Miscellaneous
    ├── Logo and favicon
    └── README.md
```