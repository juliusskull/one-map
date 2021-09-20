export const getColor = (a)=> (a == 1)?'#0000FF':'#F93E3E';

export const get_regla_campos =(v)=>  v.replace("ID_"," ").replace("_"," ").trim();

export const get_regla_fila = (v) => v!='COLOR'?true:v!='ID'?true:false;