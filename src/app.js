import header from './header';
import { formCont } from './form';
import userInterface from './user-interface';

const app = () => {
  const content = document.getElementById('content');

  content.appendChild(formCont());
  content.appendChild(header());
  content.appendChild(userInterface());
};

export default app;
