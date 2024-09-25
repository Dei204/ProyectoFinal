async function postUsers(user, email, pass) {
    try {
     
        const userData = { 
            user,
            email,
            pass
        };

        const response = await fetch("http://localhost:3001/Users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export default postUsers