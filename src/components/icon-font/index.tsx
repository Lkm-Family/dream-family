
import '@/assets/icon/iconfont'
import styles from './index.less'

const IconFont = (props: any) => {
  const { type, style } = props;

  return (
    <span
      style={{
        ...style,
      }}
      role="img"
    >
      <svg className={styles.icon} aria-hidden='true'>
        <use xlinkHref={`#${type}`} />
      </svg>
    </span>
  );
};

export default IconFont;
