import React from 'react';

const Header = () => {
    let data = [1, 2, 3, 4, 5];
    return (
        <div>
            <ul> {/* Wrap the <li> elements in a <ul> or <ol> */}
                {data.map((i, k) => (
                    <li key={k}>{i}</li> // Use a unique key for each <li>
                ))}
            </ul>
        </div>
    );
};

export default Header;

    


// const Header=()=>{    //functional component
//     return( 
//         <>         
//         <div>          
//             <ul>
//                 <li>Home</li>
//                 <li>Product</li>
//                 <li>Contact</li>
//             </ul>
//         </div>
//         </>
//     )
// }
// export default Header;    //default export       //to export to other files
//export { Header };         //named export  






//<></> - fragments
// import React from 'react'      //type rfce

// function Header() {
//   return (
//     <div>Header</div>
//   )
// }

// export default Header

// import React from 'react'

// const Header = () => {
//     let data = [1,2,3,4,5]
//   return (
//     (data)
    
//   )
// }

// export default Header