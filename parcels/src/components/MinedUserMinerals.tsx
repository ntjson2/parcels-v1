
import React, { useEffect, useState } from 'react';
import db from './firestore';
import { collection, onSnapshot } from 'firebase/firestore';
import mps from './mps';

interface mineralUser {
  mineralid: number;
  userid: number;
 
}

interface Props {
  parcels: mineralUser[];
}

const MinedUserMinerals: React.FC<Props> = () => {
  // State to store the parcels
  const [minerals, setMinerals] = useState([])
  console.log(minerals);

  useEffect(
    ()=> 
    // Using onSnapshot as it is like a react hook
    // Use th doc ID as a general row id
    onSnapshot(collection(db,"minedMinerals"), (snapshot) => {
        const snapDoc:any = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          mineralid: doc.data().mineralid,
          userid: doc.data().userid        
        }));
        setMinerals(snapDoc);
      }
    ),
    []
  );  
return (
    <div className="p-3">
        <h2>Mined Data Per User</h2> {/* Added header */}
        <h6>This is a firestore list of current parcel data</h6>
        <div className="row row-cols-12">
            {minerals.map((mineralItem: mineralUser, index) => {
                const mpsData = Object.values(mps).find((item: any) => item.id == mineralItem.mineralid);
                return (
                    <div key={index} className="col-md-2">
                        <div className="card mb-1">
                            <div className="card-body">
                                <h6 className={mpsData?.css}>Mineral: {mpsData?.name}</h6>
                                <p className="card-text">User ID: {mineralItem.userid}</p>
                                {mpsData && (
                                    <>
                                        <p className="card-text">Chemical Name: {mpsData.chemicalName}</p>
                                        <p className="card-text">Luster: {mpsData.luster}</p>
                                        <p className="card-text">Crystal System: {mpsData.crystalSystem}</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);
}

export default MinedUserMinerals;