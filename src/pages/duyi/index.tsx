import { duyiRoutes } from '@/duyi-page/routes';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useMemo, useState } from 'react';
import style from './index.less';

type MenuItem = Required<MenuProps>['items'][number];
export default () => {
  const [pageKey, setPageKey] = useState('page-index');

  const renderPage = useMemo(() => {
    return duyiRoutes?.find(i=>i.key === pageKey)?.component || <></>;
  }, [pageKey]);

  const onSideClick = (item)=>{
    setPageKey(item.key)
  }

  return (
    <div className={style.content}>
      <div className={style['page-side']}>
        <Menu selectedKeys={[pageKey]} items={duyiRoutes} onClick={onSideClick} />
      </div>

      <div className={style['page-content']}>
        {renderPage}
      </div>
    </div>
  );
};
