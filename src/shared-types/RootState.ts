import { ThemeState } from 'styles/theme/slice/types';
import { GithubAuthState } from 'pages/auth/slice/types';
import { GithubState } from 'pages/dashboard/slice/types';
export interface RootState {
  theme?: ThemeState;
  githubAuth?: GithubAuthState;
  github: GithubState;
}
