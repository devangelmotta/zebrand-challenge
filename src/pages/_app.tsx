import { configureAppStore } from 'store/configureStore';
import withRedux from "next-redux-wrapper";
import { useRouter } from "next/router";
import '../styles/globals.css';

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

const store = configureAppStore();

function Main({ Component, pageProps }) {
  const router = useRouter()
  return(
    <TransitionGroup>
    <CSSTransition
      key={router.query.id}
      timeout={200}
      classNames="fade"
    >
      <Component {...pageProps} />
    </CSSTransition>
  </TransitionGroup>
  )
}


export default withRedux(store)(Main);
