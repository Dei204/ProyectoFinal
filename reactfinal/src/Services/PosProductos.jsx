export async function ProductoData(data) {
  try {
    const url = "http://localhost:3001/cards"; 

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Network response was not ok: ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error in ProductoData:', error.message);
    throw error;
  }
}
