import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"
import './index.css';
import App from './App';

const theme = extendTheme({
	styles: {
		global: {
			'html, body': {
				fontFamily: 'Roboto Mono',
			},
		},
	},
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>
);
