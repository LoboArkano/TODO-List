const headerTitle = () => {
  const headerTitle = document.createElement('h1');

  headerTitle.innerHTML = 'todo app';

  return headerTitle;
};

const header = () => {
  const header = document.createElement('header');

  header.classList.add('header');
  header.appendChild(headerTitle());

  return header;
};

export default header;
