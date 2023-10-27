const updateItem = async (id, name, description, price, quantity, category, image, featured) => {
    try {
        const body = { id, name,  price, description, image,quantity, category,  sku };
        const response = await fetch(`http://localhost:3000/update/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
        return response.json();
    } catch (error) {
        console.error(error.message);
    }
};
