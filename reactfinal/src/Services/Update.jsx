async function updateUsers(id) {
    try {
     
        const userData = { 
           
        
        };
        const response = await fetch(""+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export default updateUsers