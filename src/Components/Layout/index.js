import s2 from './style.module.css';

const Layout=({title,descr,colorBg,urlBg})=>{
   
    const styleRoot=urlBg ? {backgroundImage:`url(${urlBg})`}:{backgroundColor:'red'};
	return(
    
    	<section className={s2.root}  style={styleRoot} >

    <div className={s2.wrapper}  >
        <article>
            <div className={s2.title}>
                <h3>{title}</h3>

                <span className={s2.separator}/>
            </div>
            <div className={s2.desc } className={s2.full }>
                <p>{descr}</p>
            </div>
        </article>
    </div>
</section>
);
}



export default Layout;