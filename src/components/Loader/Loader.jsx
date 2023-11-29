import { Circles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Circles
      height="160"
      width="160"
      color="#61d0a9"
      ariaLabel="circles-loading"
      wrapperStyle={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;