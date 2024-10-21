function Topics({data}) {
    return(
        <>
        {data.map((obj, ind) =>(
                    <li key={ind}>
                        <a href={obj.href}>{obj.title}</a>
                        </li>
                ))}
        </>
    )
}

export default Topics