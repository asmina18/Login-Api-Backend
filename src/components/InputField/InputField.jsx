import style from './inputField.module.scss'

export const InputField = (props)=>{

  

    return(
        // eto skilet katory mi sozdaem
        // Hvis label true - så indsæt er label 
        <>
          {props.labelText && 

          <label className={style.inputStyle}>{props.labelText}</label>}
          
        <input className={style.inputStyle}
         type={props.type}
         name={props.name} 
         placeholder={props.placeholder} 
         required={props.required}>
        </input>
        
        </>
    )
}