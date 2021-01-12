import React from 'react';
const ThreeColumns = () => {
    return (
        <div className="main-container">
            <div className="column-container">
                <h2 className="count">10</h2>
                <h3 className="column-title">ODDANYCH WORKÓW</h3>
                <p className="column-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aut autem commodi dolore earum excepturi iure magnam modi molestiae omnis placeat quia quisquam quos repellendus sequi totam velit, vero!</p>
            </div>
            <div className="column-container">
                <h2 className="count">5</h2>
                <h3 className="column-title">WSPARTYCH ORGANIZACJI</h3>
                <p className="column-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aut autem commodi dolore earum excepturi iure magnam modi molestiae omnis placeat quia quisquam quos repellendus sequi totam velit, vero!</p>
            </div>
            <div className="column-container">
                <h2 className="count">7</h2>
                <h3 className="column-title">ZORGANIZOWANYCH ZBIÓREK</h3>
                <p className="column-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aut autem commodi dolore earum excepturi iure magnam modi molestiae omnis placeat quia quisquam quos repellendus sequi totam velit, vero!</p>
            </div>
        </div>
    )
}
export default ThreeColumns;