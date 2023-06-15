import "./ProductView.css"

export default function ProductView (product) {

    return (
        <div className="product-view">
            <div className="media">
                <img src={product.image} alt={`Picture of ${product.name}`}/>
            </div>
            <p>{product.description}</p>
        </div>
    )
}