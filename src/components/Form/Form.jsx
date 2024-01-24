// kak mojno delat distractor , nado mojno uznat 
import style from "../Form/form.module.scss";

export const Form =(props)=>{
    return(
        
    
            <form className={style.FormStyle} onSubmit={(e)=> props.submitAction(e)}>
                {props.children}
            </form>

        )


}