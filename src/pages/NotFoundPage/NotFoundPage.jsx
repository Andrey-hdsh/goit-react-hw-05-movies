import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      Sorry, but most likely you are in the wrong place. Follow this link{' '}
      <Link to="/">HOME</Link> and try again.
    </div>
  );
};

export default NotFoundPage;
