export const MenuItems = async () => {
    // Replace this with your actual fetch logic
    return new Promise((resolve, reject) => {
        // Simulating API call with setTimeout
        setTimeout(() => {
            const data = {
                menuItems: [
                   
                        { title: 'Home', path: '/' },
                        { title: 'About', path: '/about' },
                        { title: 'Skills', path: '/skills' },
                        { title: 'Projects', path: '/projects' },
                    ],
                    
       
            };
            resolve(data);
        }, 1000); // Simulating 1 second delay
    });
};
