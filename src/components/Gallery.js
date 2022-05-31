export function Gallery(props){
    const {image,widthS,heightS} = props;

    return(
        <div className="g">
            <img src={image} width={widthS} height={heightS} alt='img'></img>
        </div>
    )
}