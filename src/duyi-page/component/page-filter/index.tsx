import { Switch } from 'antd';
import styles from './index.less'
import { useState } from 'react';
import IconFont from '@/components/icon-font';

const PageFilter= ()=>{
    const [showFilter, setShowFilter] = useState(false);

    // iframe 添加filter 属性
    const addIframeCss = (checked: boolean) => {
        setShowFilter(checked);
      };

      const addHtmlCss = (checked: boolean) => {
        if(checked){
            window.document.body.style.filter = 'grayscale(1)';
        }else{
            window.document.body.style.filter = '';
        }
      }
      
    return <div className={styles['page-filter-content']}>
        <div className={styles['iframe-filter']}>
            试试给页面添加滤镜 <IconFont type='icon-handoup' style={{fontSize: '18px',color: 'green'}} /><Switch  onChange={addIframeCss} />
        </div>
        <div className={styles['iframe-filter']}>
            试试给网站添加滤镜 <IconFont type='icon-handoup' style={{fontSize: '18px',color: 'green'}} /><Switch  onChange={addHtmlCss} />
        </div>

        <pre>
        filter: grayscale(1)
        </pre>
        <iframe src="https://www.baidu.com" className={`${styles['iframe-container']} ${showFilter ? styles.filter : ''}`}  />
    </div>
}

export default PageFilter;