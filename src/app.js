import header from './header';
import userInterface from './user-interface';

const app = () => {
  const content = document.getElementById('content');

  content.appendChild(header());
  content.appendChild(userInterface());
};

export default app;
