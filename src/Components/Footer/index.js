import s3 from './style.module.css';

const Footer=({title},{descr})=>{
	return(
    
    <footer>
    	<div class={s3.wrapper}>
       		 <h3>THANKS FOR VISITING</h3>
        	 <p>© 2021 #ReactMarathon.</p>
   		 </div>
	</footer>


	);
}
export default Footer;