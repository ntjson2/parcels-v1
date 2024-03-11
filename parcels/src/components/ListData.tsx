/* const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

initializeApp();
const db = getFirestore();
const docRef = db.collection('users').doc('alovelace');

await docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});

const aTuringRef = db.collection('users').doc('aturing');

await aTuringRef.set({
  'first': 'Alan',
  'middle': 'Mathison',
  'last': 'Turing',
  'born': 1912
});

const snapshot = await db.collection('users').get();
snapshot.forEach((doc) => {
  console.log(doc.id, '=>', doc.data());
});

 */

const ListData = () =>{
    const minerals = {
        item1:{
            mineral:"Gold",
            grams: 1.4,
            subParcel: 6,
            displayData:[4,1,2,543,2,6,934]
        }, 
        item2:{
            mineral:"Jasper",
            grams: 1.4,
            subParcel: 6,
            displayData:[4,214,2,5,2,6,9]
        },
        item3:{
            mineral:"Silver",
            grams: 0.4,
            subParcel: 6,
            displayData:[4.1,2,4.5,2,643,9]
        }
    }

    return(
        <div className="m-3 border rounded text-center">
            {Object.entries(minerals).map(([_, item]) => {
                return(
                    <div className="border-bottom">
                        <p>
                           <h3>{item.mineral}</h3> 
                           grams {item.grams}
                        </p>
                        <p>
                            <small>
                                {item.displayData.map((data)=>{
                                    return( 
                                        <span className="badge rounded-pill text-bg-primary me-2">{data}</span>
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