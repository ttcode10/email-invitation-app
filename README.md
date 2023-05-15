# Email Invitation App

An email sign up page [Demo Link](https://email-invitation-app.vercel.app)

Built with
<a href="http://react.dev/" target="_blank">![](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
</a>
<a href="https://www.typescriptlang.org/" target="_blank">![](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
</a>
<a href="https://chakra-ui.com/" target="_blank">![](https://img.shields.io/badge/Chakra_UI-319795?style=flat-square&logo=chakraui&logoColor=white)
</a>
<a href="https://styled-components.com/" target="_blank">![](https://img.shields.io/badge/styledcomponents-DB7093?style=flat-square&logo=styledcomponents&logoColor=white)
</a>
<a href="https://formik.org/" target="_blank">![](https://img.shields.io/badge/Formik-2563E6?style=flat-square&logo=Formik&logoColor=white)
</a>
<a href="https://github.com/jquense/yup" target="_blank">![](https://img.shields.io/badge/Yup-181717?style=flat-square&logo=Yup&logoColor=white)
</a>
<a href="https://axios-http.com/" target="_blank">![](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white)
</a>
<a href="https://vercel.com/" target="_blank">![](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
</a>

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
│   ├── Input validation
│   └── Success and error message
├── Data transmission
│   ├── Axios setup
│   ├── Post data
│   ├── Success response
│   └── Failed response
├── UX improvements
│   ├── Responsive web
│   └── Waiting state and spinner
└── Miscellaneous
    ├── Logo and favicon
    └── README.md
```

## Considerations
Build an extendable commercial-class app for a code test:

1. Encapsulate the 3rd party UI components so we can import locally (maintain a single source of truth) and enable "modify once change everywhere" (keep UI consistent).
2. Detach logic layer from presentation layer (e.g. keep axios API calling method and form validation rules in independent files).
3. Use custom hooks (useAxios) to enhance reusability and extendability.
4. Introduce Formik and Yup in form building and validation, so we don't need to write `onChange` `onBlur` on every input field, thus making the code much cleaner.
5. Consider user experience. For example, use `rem` for font size so the text can be resized in different screen accordingly; disable the button and display a spinner after submit form to prevent over-clicking.
