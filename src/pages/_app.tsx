import { configureAppStore } from 'store/configureStore';
import withRedux from "next-redux-wrapper";
const store = configureAppStore();
import '../styles/globals.css'

function Main({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withRedux(store)(Main);
