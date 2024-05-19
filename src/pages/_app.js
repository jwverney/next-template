'use client'
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import '@/app/globals.css';
import RootLayout from '@/app/layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Provider store={store}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Provider>
    </>

  );
}
