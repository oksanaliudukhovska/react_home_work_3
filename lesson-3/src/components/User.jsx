export const User = ({salary, func}) => {
    // console.log(props.obj);
    //мы можем сделать деструктуризацию: 
    // export const User = ({user})) => {
    //     console.log(props.obj);
    // через пропс мы передаем инфу
   func();
   
    return (
        <>
        {/* <h2>{props.obj.name}</h2>
        <h2>{props.obj.age}</h2> */}
        <h3>Salary is: {salary}</h3>
        {/* если мы передаем {...user} то тогда пишем без obj */}
        {/* и сверху писать вместо пропс name, age деструктуриция */}
        </>
    )
}