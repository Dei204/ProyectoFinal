const API_URL = "http://localhost:3001/items";

export const fetchItems = async () => {
    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching products');
        }

        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}


export const addItem = async (item) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
    });
    return response.json();
};

export const updateItem = async (id, item) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
    });
    return response.json();
};

export const deleteItem = async (id) => {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
};
