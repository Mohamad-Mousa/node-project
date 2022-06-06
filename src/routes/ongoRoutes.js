import { addNewProduct,
        getProducts,
        getProductbyId,
        updateProduct,
        deleteProduct
 } from '../ongoControllers/ongoController';

const routes = (app) => {
    app.route('/products')
        .get((req, res, next) => {

            //middleware
            
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getProducts)

        // post endpoint
        
        .post(addNewProduct);

    app.route('/products/:productID')

        //get a specific product
        .get(getProductbyId)

        //updating a specific product
        .put(updateProduct)
        
        //deleting a specific product
        .delete(deleteProduct);

       
}

export default routes;