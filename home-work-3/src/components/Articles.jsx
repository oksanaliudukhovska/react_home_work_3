import Article from "./article"


function Articles({data}) {
    return(
        <>
        {data.map((item, ind) => (
         < Article key={ind} item={item}/>
        ))}
        </>
    )
}

export default Articles