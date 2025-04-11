import styles from './BlogFilter.module.scss';

import { categories } from '../assets/dummy-data';
import { useSearchParams } from 'react-router-dom';

const BlogFilter = () => {
  // setSearchParams -> 쿼리스트링을 만들어주는 함수
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCategoryChange = (e) => {
    // 콜백 함수의 매개값으로 직전의 쿼리스틀힝이 전달됨.
    // set 함수를 이용해서 원하는 쿼리스트링을 추가, 리턴하면 반영
    setSearchParams((prev) => {
      prev.set('category', e.target.value);
      return prev;
    });
  };

  return (
    <div className={styles.filter}>
      <select
        value={searchParams.get('category') || ''}
        onChange={handleCategoryChange}
      >
        {categories.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>

      <select>
        <option value='latest'>최신순</option>
        <option value='oldest'>오래된순</option>
      </select>

      <input type='text' placeholder='검색어를 입력하세요' />
    </div>
  );
};

export default BlogFilter;
