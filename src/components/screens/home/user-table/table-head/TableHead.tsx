import styles from './TableHead.module.scss'

interface TableHeadProps {
  onClick: (e: React.MouseEvent) => void
}

const TableHead: React.FC<TableHeadProps> = handleSortChange => {
  return (
    <div className={styles.table_head} onClick={handleSortChange.onClick}>
      <div>
        <h4 id='id'>Id</h4>
      </div>
      <div>
        <h4 id='name'>Name</h4>
      </div>
      <div>
        <h4 id='email'>Mail</h4>
      </div>
      <div>
        <h4 id='phone'>Phone</h4>
      </div>
      <div>
        <h4 id='username'>Username</h4>
      </div>
      <div>
        <h4>Address</h4>
      </div>
      <div>
        <h4></h4>
      </div>
    </div>
  )
}

export default TableHead
