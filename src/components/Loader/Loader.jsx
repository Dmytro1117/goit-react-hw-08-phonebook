import { Triangle } from 'react-loader-spinner';
import style from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={style.loading}>
      <Triangle
        height="80"
        width="80"
        color="#1785de"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
    />
    </div>
  );
};
export default Loader;

