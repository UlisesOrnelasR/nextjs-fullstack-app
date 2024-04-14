import prisma from "@/libs/prisma";

const ProductsPage = async () => {
  const products = await prisma.product.findMany();
  console.log(products);

  return (
    <div>
      <h1>List of products</h1>
      <table>
        <thead>
          <tr>
            <th>
              <td>Nombre</td>
              <td>Price</td>
              <td>Stock</td>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsPage;
