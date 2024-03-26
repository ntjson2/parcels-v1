// q: Other attributes related to mineralology that mineralProps should contain? 


const minerals = {
    item1: {
        id: 1,
        mineral: "Gold",
        grams: 1.4,
        subParcel: 6,
        displayData: [4, 1, 2, 543, 2, 6, 934]
    },
    item2: {
        id: 2,
        mineral: "Jasper",
        grams: 1.4,
        subParcel: 6,
        displayData: [4, 214, 2, 5, 2, 6, 9]
    },
    item3: {
        id: 3,
        mineral: "Silver",
        grams: 0.4,
        subParcel: 6,
        displayData: [4.1, 2, 4.5, 2, 643, 9],            
    },
    item4: {
        id: 4,
        mineral: "Garnet",
        grams: 1.2,
        subParcel: 6,
        displayData: [1, 3, 5, 7, 9, 11, 13]
    },
    item5: {
        id: 5,
        mineral: "Copper",
        grams: 0.8,
        subParcel: 6,
        displayData: [2, 4, 6, 8, 10, 12, 14]
    }
};

const ListData = () => {
   
    return (
        <div className="m-3 border rounded text-center">
            {Object.entries(minerals).map(([_, item]) => {
                return (
                    <div className="border-bottom" key={item.id}>
                        <h3>{item.mineral}</h3>
                        <p>Avg grams per/ton {item.grams}</p>
                        <p>
                            <small>
                                Map Locations: {item.displayData.map((data, index) => {
                                    return (
                                        <span
                                            key={index}
                                            className="badge rounded-pill text-bg-primary me-2"
                                        >
                                            {data}
                                        </span>
                                    );
                                })}
                            </small>
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default ListData;