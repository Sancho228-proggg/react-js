import s1 from './style.module.css';

const Header=(props)=>{
	return(
    <header className={s1.root}>
    <div className={s1.forest}></div>
    <div className={s1.container}>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
    </div>
	</header>


	);
}
export default Header;
