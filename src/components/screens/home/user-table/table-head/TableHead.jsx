import styles from './tableHead.module.css'

const TableHead = fn => {
	return (
		<div className={styles.table_head} onClick={fn.onClick}>
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
